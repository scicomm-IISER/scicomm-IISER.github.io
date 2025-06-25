// Build interface
function build(questions, seed) {
	const form = document.getElementById('ll-form');

	// Show seed word + next letter hint
	document.getElementById('seed-word').insertAdjacentHTML("afterend",
	  `<p>Next word should start with: <strong>${seed.slice(-1)}</strong>. Last word should end with: <strong>${seed.slice(0,1)}</strong>.</p>`
	);
	questions.forEach((q, i) => {
	  const block = document.createElement('div');
	  block.className = 'hint-block';

	  const hint = document.createElement('div');
	  hint.className = 'hint-text';
	  hint.textContent = `${i + 1}. ${q.hint} (${q.word.length})`;
	  block.appendChild(hint);

	  const llInputs = document.createElement('form');
	  llInputs.className = 'llInputs';
	  llInputs.id = `form-${i}`;

	  const inputs = [];

	  for (let j = 0; j < q.word.length; j++) {
		const input = document.createElement('input');
		input.maxLength = 1;

		if (j === 0) {
		  if (i === 0) {
			input.value = q.first || seed.slice(-1);
		  }
		  input.classList.add('locked');
		  input.readOnly = true;
		}

		// 🔑 Auto-select on focus
		input.addEventListener('focus', () => {
		  setTimeout(() => input.select(), 0);
		});

		input.addEventListener('input', e => {
		  const char = e.data || input.value.slice(-1);
		  if (!char || !char.match(/[A-Z]/i)) return;

		  input.value = char.toUpperCase();

		  if (j < q.word.length - 1) {
			inputs[j + 1].focus();
		  }

		  if (j === q.word.length - 1 && i < questions.length - 1) {
			const lastChar = input.value.toUpperCase();
			const nextInput = questions[i + 1].input[0];
			nextInput.value = lastChar;
			questions[i + 1].input[1].focus();
		  }
		});

		input.addEventListener('keydown', e => {
		  const key = e.key;

		  if (key === 'ArrowRight' && j < q.word.length - 1) {
			inputs[j + 1].focus();
		  } else if (key === 'ArrowLeft' && j > 0) {
			inputs[j - 1].focus();
		  } else if (key === 'ArrowDown' || key === 'ArrowUp') {
			const dir = key === 'ArrowDown' ? 1 : -1;
			const targetRow = questions[i + dir];
			if (targetRow && targetRow.input[j]) {
			  targetRow.input[j].focus();
			}
		  }
		});

		inputs.push(input);
		llInputs.appendChild(input);
	  }

	  q.input = inputs;
	  block.appendChild(llInputs);
	  form.appendChild(block);
	});
}

// Final validation
function checkAnswers(questions, seed) {
  console.log(questions);
  let correct = true;
  let lastChar = seed[seed.length - 1].toUpperCase();

  for (let i = 0; i < questions.length; i++) {
	  let question = questions[i];
	  answers = document.getElementById(`form-${i}`).elements;
	  console.log(question.word);
	  for (j = 0; j < question.word.length; j++) {
	   answers[j].value = question.word[j];
	  }
  }
}
