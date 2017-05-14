'use strict'

function color() {
	var div = document.getElementById('quadro1');
<<<<<<< HEAD
	var color = div.style.backgroundColor;
	if (color == 'red') {
		div.style.backgroundColor = 'green';
	} else {div.style.backgroundColor = 'red'};
=======
	var color = getComputedStyle(div).backgroundColor;
	if (color == 'rgb(255, 0, 0)') {
		div.style.backgroundColor = 'rgb(0, 255, 0)';
	} else {div.style.backgroundColor = 'rgb(255, 0, 0)'};
>>>>>>> origin/master
}

function color1() {
	var div1 = document.getElementById('quadro2');
	var color1 = div1.style.backgroundColor;
	if (color1 == 'red') {
		div1.style.backgroundColor = 'green';
	} else {div1.style.backgroundColor = 'red'};

}

function color2() {
	var div2 = document.getElementById('quadro3');
	var color2 = div2.style.backgroundColor;
	if (color2 == 'red') {
		div2.style.backgroundColor = 'green';
	} else {div2.style.backgroundColor = 'red'};
}

var count = document.getElementById('counter');
var span = document.createElement('span');
count.appendChild(span);
span.innerHTML = '';
function counter() {
	var num = ++span.innerHTML;
}

function comment() {
	var msg = document.getElementById('text').value;
	var string = document.createElement('li');
	string.innerHTML = msg;
	var ul = document.getElementById('list');
	ul.appendChild(string);
}