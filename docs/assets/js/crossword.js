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
  const crossword = document.getElementById('crossword');
  crossword.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  crossword.innerHTML = '';
  acrossList.innerHTML = '';
  downList.innerHTML = '';

  const cellRefs = {};
  const grid = Array.from({ length: size * size }, () => null);
  const hintNumbers = new Map();
  const wordHints = {};

  const wordMap = getWordStartMap(data);
  assignHintNumbers(grid, wordMap, data.blanks, size, hintNumbers, wordHints);

  generateGrid(grid, hintNumbers, wordHints, data, size, crossword, cellRefs);

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

  function generateGrid(grid, hintNumbers, wordHints, data, size, crossword, cellRefs) {
    for (let row = 0; row < size; row++) {
      // const tr = document.createElement('tr');
      for (let col = 0; col < size; col++) {
        const idx = row * size + col;
        const td = document.createElement('span');

        if (data.blanks.includes(idx)) {
          td.classList.add('blank');
        } else {
          // td.classList.add('cell-wrapper');
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
        // tr.appendChild(td);
		  crossword.appendChild(td);
      }
      // grid.appendChild(tr);
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
}
