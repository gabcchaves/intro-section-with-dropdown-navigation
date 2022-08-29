'use strict';

// Assign elements their respective events
function loadEvents() {
	// Drop down menus
	let featuresMenu = document.querySelector("#features-dropbtn");
	let companyMenu = document.querySelector("#company-dropbtn");
	let featuresMenuContent = document.querySelector("#features-dropbtn-content");
	let companyMenuContent = document.querySelector("#company-dropbtn-content");
	let mobileSideMenu = document.querySelector("#sidemenu");
	let mobileSideMenuContent = document.querySelector("#menu");

	featuresMenu.addEventListener("click", () => {
		// Check menu state
		if (featuresMenuContent.style.display != "none") {
			featuresMenuContent.style.display = "none";
		} else {
			featuresMenuContent.style.display = "flex";
		}
	});

	companyMenu.addEventListener("click", () => {
		// Check menu state
		if (companyMenuContent.style.display != "none") {
			companyMenuContent.style.display = "none";
		} else {
			companyMenuContent.style.display = "flex";
		}
	});

	mobileSideMenu.addEventListener("click", () => {
		// Check menu state
		if (mobileSideMenuContent.style.display != "none") {
			mobileSideMenuContent.style.display = "none";
		} else {
			mobileSideMenuContent.style.display = "flex";
			mobileSideMenu.childNodes[0].src = "images/icon-close-menu.svg";
		}
	});
}

// Invoke procedures on window load
window.addEventListener("load", () => {
	loadEvents();
});
