for (const element of document.getElementsByClassName("email-id")) {
	element.addEventListener('click', function(){ navigator.clipboard.writeText(event.srcElement.getAttribute("data")); });
}

