function toggleMenu() {
	document.getElementById("logoDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches(".logo-drop-button")) {
		var dropdownElements = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var thisDropdownElement = dropdownElements[i];
			if (thisDropdownElement.classList.contains("show")) {
				thisDropdownElement.classList.remove("show");
			}
		}
	}
}


