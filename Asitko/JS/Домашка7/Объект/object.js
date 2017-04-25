'use strict'
var cat = {
	name: "Котяра",
	class: "bengal",
	foto: "cat.jpg",
	total: "25000 руб."
}

window.onload = function() {
	var a = document.getElementById('a');
	var b = document.getElementById('b');
	var wrap = document.getElementById('wrap');
	var foto = document.createElement('img');
	wrap.appendChild(foto);
	foto.style.float = 'left';
	foto.src = cat.foto;
	foto.style.width = '400px';
	foto.style.height = '300px';
	var string = document.createElement('p');
	wrap.appendChild(string);
	string.innerHTML = 'Name: ' + cat.name + '<br>' + 'Class: ' + cat.class + '<br>' + 'Total: ' + cat.total;
}

function showPopup() {
	b.style.display = 'block';
	b.style.opacity = 0.8;
	a.style.display = 'block';
	a.style.top = '100px';
	a.style.left = '400px';
}

function closePopup() {
	a.style.display = 'none';
	b.style.display = 'none';
}




