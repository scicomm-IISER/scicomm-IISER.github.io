let buttons = document.getElementsByTagName("button");
for (i = 0; i < buttons.length; i++) {
	let correctAnswer = buttons[i].value;
	buttons[i].addEventListener(
		"click",
		function () {
			this.innerText = correctAnswer;
		},
		{ once: true, }
	);
}
