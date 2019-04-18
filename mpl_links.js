"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Gabriel Fuentes
   Date: 4.18.19  
   
   Filename: mpl_links.js

*/
// Event listener to load an anonymous function on load
window.addEventListener('load', function() {
	// allSelect variable is used to reference to all select elements nested within the govLinks form
	var allSelect = document.querySelectorAll('form#govLinks select');
	// Loop through allSelect to change the event of the events
	for (var i = 0; i < allSelect.length; i++) {
		allSelect[i].onchange = function(e) {
			location.href = e.target.value;
		};
	}
});
