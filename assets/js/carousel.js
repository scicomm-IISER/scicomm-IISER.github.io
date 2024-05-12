document.getElementById("carousel-issue").style.display = "block"; 

function switchCarousel(nextItem, nextButton) {
	console.log(nextItem)
	console.log(nextButton)
	for (const child of document.getElementById("carousel").children) {
	  child.style.display = "none";
	}
	document.getElementById(nextItem.toString()).style.display = "block"; 
	for (const child of document.getElementById("carousel-nav").children) {
	  child.className = "empty-circle";
	}
	document.getElementById(nextButton).className = "solid-circle"; 
}
