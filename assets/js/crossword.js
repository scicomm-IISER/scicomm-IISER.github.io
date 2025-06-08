<<<<<<< HEAD
let crosswordData = null;
let gridData = [];
let wordPlacements = [];

// File input handler
document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFile(file) {
	const reader = new FileReader();
	reader.onload = function(e) {
		try {
			let data;
			const content = e.target.result;
			
			if (file.name.endsWith('.json')) {
				data = JSON.parse(content);
			} else {
				// Simple YAML/text parser for basic format
				data = parseSimpleFormat(content);
			}
			
			loadCrosswordData(data);
		} catch (error) {
			showMessage('Error parsing file: ' + error.message, 'error');
		}
	};
	reader.readAsText(file);
}

function handleFileSelect(event) {
	const file = event.target.files[0];
	if (!file) return;
	
	const reader = new FileReader();
	reader.onload = function(e) {
		try {
			let data;
			const content = e.target.result;
			data = JSON.parse(content);
			loadCrosswordData(data);
		} catch (error) {
			showMessage('Error parsing file: ' + error.message, 'error');
		}
	};
	reader.readAsText(file);
}

function parseSimpleFormat(content) {
	const lines = content.split('\n').filter(line => line.trim());
	const words = [];
	
	for (let line of lines) {
		// Support formats like: "CAT,across,Feline pet" or "CAT,Feline pet" (no direction) or "word: CAT, hint: Feline pet"
		if (line.includes(',')) {
			const parts = line.split(',').map(p => p.trim());
			if (parts.length >= 2) {
				if (parts.length === 2) {
					// Format: "WORD,hint" - no direction specified
					words.push({
						word: parts[0].toUpperCase(),
						hint: parts[1]
					});
				} else if (parts.length >= 3) {
					// Format: "WORD,direction,hint" or "WORD,hint,direction"
					const possibleDirections = ['across', 'down'];
					const dirIndex = parts.findIndex(p => possibleDirections.includes(p.toLowerCase()));
					
					if (dirIndex !== -1) {
						words.push({
							word: parts[0].toUpperCase(),
							direction: parts[dirIndex].toLowerCase(),
							hint: parts.filter((p, i) => i !== 0 && i !== dirIndex).join(',').trim()
						});
					} else {
						// No direction found, treat as word,hint
						words.push({
							word: parts[0].toUpperCase(),
							hint: parts.slice(1).join(',').trim()
						});
					}
				}
			}
		}
	}
	
	return { words };
}

function loadCrosswordData(data) {
	crosswordData = data;
	if (!crosswordData.words || crosswordData.words.length === 0) {
		showMessage('No words found in the data', 'error');
		return;
	}
	
	// Generate crossword layout
	generateCrossword();
}

function generateCrossword() {
	// Advanced crossword generation with automatic direction assignment
	const words = crosswordData.words.map(w => ({
		...w,
		word: w.word.toUpperCase(),
		direction: w.direction || null // Allow existing directions but don't require them
	}));
	
	// Sort words by length (longer first for better placement)
	words.sort((a, b) => b.word.length - a.word.length);
	
	// Try multiple direction combinations to find the most compact grid
	let bestLayout = null;
	let bestScore = Infinity;
	
	// Generate different direction combinations
	const combinations = generateDirectionCombinations(words);
	
	for (let combination of combinations) {
		const layout = tryLayout(combination);
		if (layout) {
			const score = calculateLayoutScore(layout);
			if (score < bestScore) {
				bestScore = score;
				bestLayout = layout;
			}
		}
	}
	
	if (bestLayout) {
		wordPlacements = bestLayout;
		createGrid();
		displayHints();
	} else {
		showMessage('Could not generate crossword layout', 'error');
	}
}

function generateDirectionCombinations(words) {
	const combinations = [];
	const maxCombinations = Math.min(16, Math.pow(2, Math.min(words.length, 8))); // Limit combinations
	
	for (let i = 0; i < maxCombinations; i++) {
		const combination = words.map((word, index) => {
			// If direction is already specified, keep it
			if (word.direction) {
				return { ...word };
			}
			
			// Otherwise, assign based on bit pattern for variety
			const direction = (i >> (index % 8)) & 1 ? 'across' : 'down';
			return { ...word, direction };
		});
		
		// Ensure we have both across and down words
		const acrossCount = combination.filter(w => w.direction === 'across').length;
		const downCount = combination.filter(w => w.direction === 'down').length;
		
		if (acrossCount > 0 && downCount > 0) {
			combinations.push(combination);
		}
	}
	
	return combinations;
}

function tryLayout(words) {
	const placements = [];
	
	// Start with the first (longest) word
	if (words.length > 0) {
		placements.push({
			...words[0],
			row: 20,
			col: 20,
			number: 1
		});
	}
	
	// Try to place remaining words
	let wordNumber = 2;
	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		let placed = false;
		let bestPlacement = null;
		let maxIntersections = 0;
		
		// Try to intersect with all existing words
		for (let existing of placements) {
			if (existing.direction === word.direction) continue; // Skip same direction
			
			const intersections = findAllIntersections(word.word, existing.word);
			
			for (let intersection of intersections) {
				const placement = calculatePlacement(word, existing, intersection);
				if (placement && isValidPlacement(word, placement, placements)) {
					const intersectionCount = countPotentialIntersections(word, placement, placements);
					if (intersectionCount > maxIntersections) {
						maxIntersections = intersectionCount;
						bestPlacement = placement;
					}
				}
			}
		}
		
		if (bestPlacement) {
			placements.push({
				...word,
				...bestPlacement,
				number: wordNumber++
			});
			placed = true;
		} else {
			// Try to place in empty space
			const emptyPlacement = findEmptySpace(word, placements);
			if (emptyPlacement && isValidPlacement(word, emptyPlacement, placements)) {
				placements.push({
					...word,
					...emptyPlacement,
					number: wordNumber++
				});
				placed = true;
			}
		}
		
		if (!placed) {
			return null; // This combination doesn't work
		}
	}
	
	return placements;
}

function calculateLayoutScore(placements) {
	// Calculate grid bounds
	let minRow = Infinity, maxRow = -Infinity;
	let minCol = Infinity, maxCol = -Infinity;
	
	placements.forEach(word => {
		const endRow = word.direction === 'down' ? word.row + word.word.length - 1 : word.row;
		const endCol = word.direction === 'across' ? word.col + word.word.length - 1 : word.col;
		
		minRow = Math.min(minRow, word.row);
		maxRow = Math.max(maxRow, endRow);
		minCol = Math.min(minCol, word.col);
		maxCol = Math.max(maxCol, endCol);
	});
	
	const width = maxCol - minCol + 1;
	const height = maxRow - minRow + 1;
	
	// Score: prefer smaller, more square grids
	const area = width * height;
	const squareness = Math.abs(width - height);
	
	return area + squareness * 2; // Penalty for non-square grids
}

function findAllIntersections(word1, word2) {
	const intersections = [];
	for (let i = 0; i < word1.length; i++) {
		for (let j = 0; j < word2.length; j++) {
			if (word1[i] === word2[j]) {
				intersections.push({ char: word1[i], pos1: i, pos2: j });
			}
		}
	}
	return intersections;
}

function isValidPlacement(word, placement, existingPlacements) {
	// Check if placement is valid (no collisions, proper spacing)
	const cells = getCellsForWord(word, placement);
	
	// Check each cell of the new word
	for (let i = 0; i < cells.length; i++) {
		const cell = cells[i];
		
		// Check for conflicts with existing words
		for (let existing of existingPlacements) {
			const existingCells = getCellsForWord(existing, existing);
			
			for (let existingCell of existingCells) {
				if (cell.row === existingCell.row && cell.col === existingCell.col) {
					// Same cell - must have same letter
					if (cell.letter !== existingCell.letter) {
						return false;
					}
				} else if (areAdjacent(cell, existingCell) && 
						  existing.direction !== word.direction) {
					// Adjacent cells from perpendicular words - check for illegal adjacency
					if (!isLegalAdjacency(cell, existingCell, word, existing)) {
						return false;
					}
				}
			}
		}
	}
	
	return true;
}

function getCellsForWord(word, placement) {
	const cells = [];
	for (let i = 0; i < word.word.length; i++) {
		cells.push({
			row: placement.row + (word.direction === 'down' ? i : 0),
			col: placement.col + (word.direction === 'across' ? i : 0),
			letter: word.word[i]
		});
	}
	return cells;
}

function areAdjacent(cell1, cell2) {
	const rowDiff = Math.abs(cell1.row - cell2.row);
	const colDiff = Math.abs(cell1.col - cell2.col);
	return (rowDiff <= 1 && colDiff <= 1) && !(rowDiff === 0 && colDiff === 0);
}

function isLegalAdjacency(cell1, cell2, word1, word2) {
	// Prevent words from being adjacent without intersecting
	// This fixes the "CRANEI" type visual confusion
	
	// If cells are directly adjacent (not diagonal), they should only touch at intersections
	const rowDiff = Math.abs(cell1.row - cell2.row);
	const colDiff = Math.abs(cell1.col - cell2.col);
	
	// If directly adjacent (not diagonal)
	if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
		// Only allow if they have the same letter (intersection)
		return cell1.letter === cell2.letter;
	}
	
	// Diagonal adjacency is generally okay
	return true;
}

function countPotentialIntersections(word, placement, existingPlacements) {
	let count = 0;
	const cells = getCellsForWord(word, placement);
	
	for (let cell of cells) {
		for (let existing of existingPlacements) {
			const existingCells = getCellsForWord(existing, existing);
			for (let existingCell of existingCells) {
				if (cell.row === existingCell.row && cell.col === existingCell.col && 
					cell.letter === existingCell.letter) {
					count++;
				}
			}
		}
	}
	
	return count;
}

function calculatePlacement(newWord, existingWord, intersection) {
	let row, col;
	
	if (newWord.direction === existingWord.direction) {
		return null; // Can't place parallel words at intersection
	}
	
	if (existingWord.direction === 'across') {
		// New word is down
		row = existingWord.row - intersection.pos1;
		col = existingWord.col + intersection.pos2;
	} else {
		// New word is across
		row = existingWord.row + intersection.pos2;
		col = existingWord.col - intersection.pos1;
	}
	
	return { row, col };
}

function checkCollision(placement) {
	return !isValidPlacement(placement, placement);
}

function findEmptySpace(word, existingPlacements) {
	// Find a good empty space for words that can't intersect
	let attempts = 0;
	const maxAttempts = 20;
	
	while (attempts < maxAttempts) {
		const baseRow = 15 + Math.floor(attempts / 4) * 3;
		const baseCol = 15 + (attempts % 4) * 4;
		
		const placement = {
			row: baseRow,
			col: baseCol
		};
		
		if (isValidPlacement(word, placement, existingPlacements)) {
			return placement;
		}
		
		attempts++;
	}
	
	// Fallback: place at a safe distance
	return {
		row: 15 + existingPlacements.length * 2,
		col: 15 + existingPlacements.length * 2
	};
}

function createGrid() {
	// Calculate grid bounds
	let minRow = Infinity, maxRow = -Infinity;
	let minCol = Infinity, maxCol = -Infinity;
	
	wordPlacements.forEach(word => {
		const endRow = word.direction === 'down' ? word.row + word.word.length - 1 : word.row;
		const endCol = word.direction === 'across' ? word.col + word.word.length - 1 : word.col;
		
		minRow = Math.min(minRow, word.row);
		maxRow = Math.max(maxRow, endRow);
		minCol = Math.min(minCol, word.col);
		maxCol = Math.max(maxCol, endCol);
	});
	
	const rows = maxRow - minRow + 1;
	const cols = maxCol - minCol + 1;
	
	// Initialize grid
	gridData = Array(rows).fill().map(() => Array(cols).fill({ type: 'black' }));
	
	// Place words in grid
	wordPlacements.forEach(word => {
		for (let i = 0; i < word.word.length; i++) {
			const row = word.row - minRow + (word.direction === 'down' ? i : 0);
			const col = word.col - minCol + (word.direction === 'across' ? i : 0);
			
			gridData[row][col] = {
				type: 'letter',
				letter: word.word[i],
				number: i === 0 ? word.number : null
			};
		}
	});
	
	renderGrid();
	document.getElementById('gameContainer').classList.replace("container", "container-active");
}

function renderGrid() {
	const gridContainer = document.getElementById('crosswordGrid');
	gridContainer.innerHTML = '';
	gridContainer.className = 'crossword-grid';
	
	gridData.forEach((row, rowIndex) => {
		const rowDiv = document.createElement('div');
		rowDiv.className = 'grid-row';
		
		row.forEach((cell, colIndex) => {
			const cellDiv = document.createElement('div');
			cellDiv.className = 'grid-cell';
			
			if (cell.type === 'black') {
				cellDiv.classList.add('black');
			} else {
				const input = document.createElement('input');
				input.type = 'text';
				input.maxLength = 1;
				input.dataset.row = rowIndex;
				input.dataset.col = colIndex;
				input.dataset.answer = cell.letter;
				
				input.addEventListener('input', function(e) {
					e.target.value = e.target.value.toUpperCase();
					if (e.target.value) {
						moveToNextCell(e.target);
					}
				});
				
				cellDiv.appendChild(input);
				
				if (cell.number) {
					const numberDiv = document.createElement('div');
					numberDiv.className = 'cell-number';
					numberDiv.textContent = cell.number;
					cellDiv.appendChild(numberDiv);
				}
			}
			
			rowDiv.appendChild(cellDiv);
		});
		
		gridContainer.appendChild(rowDiv);
	});
}

function moveToNextCell(currentInput) {
	const inputs = Array.from(document.querySelectorAll('.grid-cell input'));
	const currentIndex = inputs.indexOf(currentInput);
	if (currentIndex < inputs.length - 1) {
		inputs[currentIndex + 1].focus();
	}
}

function displayHints() {
	const acrossHints = document.getElementById('acrossHints');
	const downHints = document.getElementById('downHints');
	
	acrossHints.innerHTML = '';
	downHints.innerHTML = '';
	
	wordPlacements.forEach(word => {
		const hintDiv = document.createElement('div');
		hintDiv.className = 'hint-item';
		hintDiv.innerHTML = `<strong>${word.number}.</strong> ${word.hint}`;
		
		if (word.direction === 'across') {
			acrossHints.appendChild(hintDiv);
		} else {
			downHints.appendChild(hintDiv);
		}
	});
}

function revealSolution() {
	const inputs = document.querySelectorAll('.grid-cell input');
	inputs.forEach(input => {
		const userAnswer = input.value.toUpperCase();
		const correctAnswer = input.dataset.answer;
		
		// Clear previous classes
		input.classList.remove('correct', 'incorrect', 'revealed');
		
		if (userAnswer === '') {
			// Empty cell - fill with correct answer and mark as revealed
			input.value = correctAnswer;
			input.classList.add('revealed');
		} else if (userAnswer === correctAnswer) {
			// Correct answer - mark as correct
			input.classList.add('correct');
		} else {
			// Wrong answer - show correct answer and mark as incorrect
			input.value = correctAnswer;
			input.classList.add('incorrect');
		}
	});
}

function clearGrid() {
	const inputs = document.querySelectorAll('.grid-cell input');
	inputs.forEach(input => {
		input.value = '';
		input.classList.remove('correct', 'incorrect', 'revealed');
	});
}

function showMessage(message, type) {
	const messageDiv = document.getElementById('message');
	messageDiv.textContent = message;
	messageDiv.className = type;
	setTimeout(() => {
		messageDiv.textContent = '';
		messageDiv.className = '';
	}, 3000);
=======
function handleFile(fileContent) {
  try {
    const data = typeof fileContent === 'string'
      ? JSON.parse(fileContent)
      : fileContent;

    buildCrossword(data);
  } catch (err) {
    console.error('Invalid input to handleFile:', err);
  }
}

function buildCrossword(data) {
  const size = data.size;
  const acrossList = document.getElementById('acrossClues');
  const downList = document.getElementById('downClues');
  const table = document.getElementById('crossword');
  table.innerHTML = '';
  acrossList.innerHTML = '';
  downList.innerHTML = '';

  const cellRefs = {};
  const grid = Array.from({ length: size * size }, () => null);
  const hintNumbers = new Map();
  const wordHints = {};

  const wordMap = getWordStartMap(data);
  assignHintNumbers(grid, wordMap, data.blanks, size, hintNumbers, wordHints);

  generateGrid(grid, hintNumbers, wordHints, data, size, table, cellRefs);

  renderClues(wordHints, acrossList, downList);

  function onLetterInput(e) {
    const input = e.target;
    const index = +input.dataset.index;
    const val = input.value.toUpperCase();
    input.value = val;
    const words = JSON.parse(input.dataset.cellWords);
    if (!words.length) return;

    const nextIndex = getNextInputIndex(words[0], data, size);
    if (nextIndex != null && cellRefs[nextIndex]) {
      cellRefs[nextIndex].focus();
    }
  }

  function getNextInputIndex({ dir, indexInWord, word }, data, size) {
    const wordData = data[dir][word];
    if (!wordData) return null;
    const start = wordData[0];
    const nextLetterIndex = indexInWord + 1;
    if (nextLetterIndex >= word.length) return null;
    return dir === 'across'
      ? start + nextLetterIndex
      : start + nextLetterIndex * size;
  }

  function generateGrid(grid, hintNumbers, wordHints, data, size, table, cellRefs) {
    for (let row = 0; row < size; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < size; col++) {
        const idx = row * size + col;
        const td = document.createElement('td');

        if (data.blanks.includes(idx)) {
          td.classList.add('blank');
        } else {
          td.classList.add('cell-wrapper');
          // const wrapper = document.createElement('div');
          // wrapper.className = 'cell-wrapper';

          const input = document.createElement('input');
          input.maxLength = 1;
          input.dataset.index = idx;
          input.dataset.cellWords = JSON.stringify(grid[idx]?.words || []);
          input.addEventListener('input', onLetterInput);
		  input.addEventListener('focus', (e) => {
		    if (e.target.value) e.target.select();
		  });
          td.appendChild(input);
          cellRefs[idx] = input;

          if (hintNumbers.has(idx)) {
            const hintDiv = document.createElement('div');
            hintDiv.className = 'hint-number';
            hintDiv.innerText = hintNumbers.get(idx);
            td.appendChild(hintDiv);
          }

          // td.appendChild(wrapper);
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }
// Hook up reveal and refresh buttons
  const revealBtn = document.getElementById('revealBtn');
  const refreshBtn = document.getElementById('refreshBtn');

  revealBtn.onclick = () => revealAnswers();
  refreshBtn.onclick = () => refreshGrid();

  function revealAnswers() {
    for (const dir of ['across', 'down']) {
      for (const word in data[dir]) {
        const [startIdx] = data[dir][word];
		  console.log(word);
		  console.log(startIdx);
		  console.log(dir);
        for (let i = 0; i < word.length; i++) {
          const idx = dir === 'across'
            ? startIdx + i
            : startIdx + i * size;
          const input = cellRefs[idx];
          if (input) input.value = word[i].toUpperCase();
        }
      }
    }
  }

  function refreshGrid() {
    for (const idx in cellRefs) {
      cellRefs[idx].value = '';
    }
  }
}

function getWordStartMap(data) {
  const map = { across: {}, down: {} };
  for (const dir of ['across', 'down']) {
    for (const word in data[dir]) {
      const [start, clue] = data[dir][word];
      map[dir][start] = { word, clue };
    }
  }
  return map;
}

function assignHintNumbers(grid, wordMap, blanks, size, hintNumbers, wordHints) {
  let nextHintNum = 1;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const idx = row * size + col;
      if (blanks.includes(idx)) continue;

      let isStart = false;

      if (wordMap.across[idx]) {
        isStart = true;
        const { word, clue } = wordMap.across[idx];
        wordHints[word] = { num: nextHintNum, clue, dir: 'across' };
        for (let i = 0; i < word.length; i++) {
          const widx = idx + i;
          if (!grid[widx]) grid[widx] = { words: [] };
          grid[widx].words.push({ word, dir: 'across', indexInWord: i });
        }
      }

      if (wordMap.down[idx]) {
        if (!isStart) isStart = true;
        const { word, clue } = wordMap.down[idx];
        wordHints[word] = { num: nextHintNum, clue, dir: 'down' };
        for (let i = 0; i < word.length; i++) {
          const widx = idx + i * size;
          if (!grid[widx]) grid[widx] = { words: [] };
          grid[widx].words.push({ word, dir: 'down', indexInWord: i });
        }
      }

      if (isStart) {
        hintNumbers.set(idx, nextHintNum++);
      }
    }
  }
}

function renderClues(wordHints, acrossList, downList) {
  const entries = Object.entries(wordHints).sort((a, b) => a[1].num - b[1].num);
  for (const [word, { num, clue, dir }] of entries) {
    const hint = document.createElement('div');
    hint.textContent = `${num}. ${clue} (${word.length})`;
    (dir === 'across' ? acrossList : downList).appendChild(hint);
  }
>>>>>>> 2d71367 (most of crossword done)
}
