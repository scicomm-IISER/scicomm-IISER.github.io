document.getElementById("carousel-issue").style.display = "block"; 

function switchCarousel(element, nextItem) {
	for (const child of document.getElementById("carousel").children) {
	  child.style.display = "none";
	}
	document.getElementById(nextItem).style.display = "block"; 
	for (const child of document.getElementById("carousel-nav").children) {
	  child.className = "empty-circle";
	}
	element.className = "solid-circle"; 
}


function activateNextCarousel() {
	let childrenMain = document.getElementById("carousel").children;
	let childrenNav = document.getElementById("carousel-nav").children;
	for (var i = 0; i < childrenMain.length; i++) {
	  if (childrenMain[i].style.display == "block") {
		  let nextCount = i + 1
		  if (nextCount > childrenMain.length - 1) {
			  nextCount = 0
		  }
		  switchCarousel(childrenNav[nextCount], childrenMain[nextCount].id);
		  break;
	  }
	}
}


setInterval(activateNextCarousel, 4000);
