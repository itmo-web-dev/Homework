'use strict';

// alert('text1');
// setTimeout (function() {
// 	alert('text2')
// },
// 5000);


// function alertOut() {
// 	alert('Text2')
// }; alert('text1');
// setInterval(alertOut, 5000);

;(function() {
	function changeColor () {
		var circle1 = document.getElementById('red');
		var color1 = window.getComputedStyle(circle1).backgroundColor;
		// console.log(color);
		if (color1 === 'rgb(128, 128, 128)') {
			circle1.style.backgroundColor = 'red';
		} else if (color1 === 'rgb(255, 0, 0)') {
			circle1.style.backgroundColor = 'grey';
		};
	}

	setInterval(changeColor, 5000);
}());


