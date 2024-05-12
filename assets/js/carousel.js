function switchCarousel(index) {
	switch(index) {
	  case 1:
		document.getElementById("carousel-issue").style.display = "block"; 
		document.getElementById("carousel-article").style.display = "none"; 
		document.getElementById("carousel-nav-1").className = "solid-circle"; 
		document.getElementById("carousel-nav-2").className = "empty-circle"; 
		break;
	  case 2:
		document.getElementById("carousel-issue").style.display = "none"; 
		document.getElementById("carousel-article").style.display = "block"; 
		document.getElementById("carousel-nav-1").className = "empty-circle"; 
		document.getElementById("carousel-nav-2").className = "solid-circle"; 
		break;
	  default:
		// code block
	} 
}
