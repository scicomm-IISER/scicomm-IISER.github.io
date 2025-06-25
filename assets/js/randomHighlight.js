async function randHighlight(category) {
	const pathToJson = "/assets/posts-metadata/" + category + ".json";
    const response = await fetch(pathToJson);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

async function randomPost(category) {
	const post = await randHighlight(category)
	if (category == "article" || category == "interview" ) {
		const url = document.getElementById("highlight-" + category + "-url");
		url.href = post["permalink"]
		const image = document.getElementById("highlight-" + category + "-image");
		image.src = post["hero-image"]
		const title = document.getElementById("highlight-" + category + "-title");
		title.innerHTML = post["title"]
		const author = document.getElementById("highlight-" + category + "-author");
		author.innerHTML = post["authors"]
		const link = document.getElementById("highlight-" + category + "-link");
		link.href = post["permalink"]
	} else if (category == "digest") {
		const url = document.getElementById("highlight-digest-link");
		url.href = post["permalink"]
		const title = document.getElementById("highlight-digest-title");
		title.innerHTML = post["title"]
		const author = document.getElementById("highlight-digest-author");
		author.innerHTML = post["author"]
		const reference = document.getElementById("highlight-digest-reference");
		reference.innerHTML = post["reference"]
		const summary = document.getElementById("highlight-digest-summary");
		summary.innerHTML = post["summary-trunc"]
		const link = document.getElementById("highlight-digest-link");
		link.href = post["permalink"]
	} else if (category == "quiz") {
		const url = document.getElementById("highlight-quiz-link");
		url.href = post["permalink"]
		const title = document.getElementById("highlight-quiz-title");
		title.innerHTML = post["title"]
		const author = document.getElementById("highlight-quiz-author");
		author.innerHTML = post["author"]
		const image = document.getElementById("highlight-quiz-image");
		image.src = post["hero-image"]
	} else if (category == "crossword") {
		const url = document.getElementById("highlight-crossword-link");
		url.href = post["permalink"]
		const title = document.getElementById("highlight-crossword-title");
		title.innerHTML = post["title"]
		const author = document.getElementById("highlight-crossword-author");
		author.innerHTML = post["author"]
		const image = document.getElementById("highlight-crossword-image");
		image.src = post["hero-image"]
	}
}

let categories = ["article", "interview", "digest", "crossword", "quiz", "linkedlist"]
categories.forEach((cat) => {
	if (document.getElementById(`${cat}-shuffle`) != null) {
		console.log(cat);
		document.getElementById(`${cat}-shuffle`).addEventListener("click", function () { randomPost(cat); });
	}
});
// if (document.getElementById('elementId')
// document.getElementById("article-shuffle").addEventListener("click", function () { randomPost("article"); });
// document.getElementById("interview-shuffle").addEventListener("click", function () { randomPost("interview"); });
// document.getElementById("digest-shuffle").addEventListener("click", function () { randomPost("digest"); });
// document.getElementById("crossword-shuffle").addEventListener("click", function () { randomPost("crossword"); });
// document.getElementById("quiz-shuffle").addEventListener("click", function () { randomPost("quiz"); });
// document.getElementById("linkedlist-shuffle").addEventListener("click", function () { randomPost("linkedlist"); });
// randomPost("article");
// randomPost("interview");
