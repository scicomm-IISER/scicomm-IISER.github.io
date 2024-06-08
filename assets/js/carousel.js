function activateCarousel(index) {
	height = document.getElementById("carousel").clientHeight;
	for (const child of document.getElementById("carousel").children) {
		child.classList.remove("active-item");
	}
	for (const child of document.getElementById("carousel-nav").children) {
	  child.classList.remove("active-nav");
	}
	document.getElementById("carousel").children[index].classList.add("active-item");
	document.getElementById("carousel-nav").children[index].classList.add("active-nav");
	document.getElementById("carousel").style.height = height + "px";
	clearInterval(slideshow);
	slideshow = setInterval(switchCarousel, 5000);
}

function switchCarousel() {
	let index=0;
	for (let i = 0; i < document.getElementById("carousel-nav").children.length; i++) {
		if (document.getElementById("carousel-nav").children[i].classList.contains("active-nav")) {
			index = i;
			break;
		}
	} 
	activateCarousel((index + 1) % 3);
}

for (let i = 0; i < document.getElementById("carousel-nav").children.length; i++) {
	document.getElementById("carousel-nav-" + i).addEventListener("click", function(){ activateCarousel(i); });
}

var slideshow = setInterval(switchCarousel, 5000);
