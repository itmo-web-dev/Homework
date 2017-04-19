'use strict';

/*
function Fact(n) {
	if (n == 1) {
		return 1;
	} else {
		return n*Fact(n-1);
	}
}

function Fact(n) {
	var m = n; 
	return function() {
		return "factorial" + m;
	}
}

var a = fact(3);
	a() // " " 3
	a.m = 3;
	a["..."] = 3;




var obj = {
	name: "carrot",
	color: "orange";
}
obj.name.length()

//if('name' in obj) 
//	obj.name

i = name;
i = 0;
for (var i in obj) {
	if (i == 6) break; {}
	console.log(В obj есть свойство + i);
	console.log("Значит" + obj[i]);
}

var a = {
	name: [{name:"..."}, {name:"..."}]
}

var a = []
a.name = "carrot";
a.length // 0

var a = [1, 2;]
a [0] = 1;
a [1] = 2;
a.length = 2;

// var a = []
// a.name = "...";
// a.length =
// console.log(a)//

// a = [];
// a[3] = "...";
// [ , , , "..."] --- выведет вот это

var admin = {
	login: "root",
	password: "root",
	type: null
}
var user = {

}

admin.login
     .password
     .type===//underfined




////////MATH////////

Math.abs(-1);
//1
Math.sqrt(4);
//2
Math.pow(2,2);
//4
Math.round(1.6);
//2
Math.floor(1.6);
//1
Math.ceil(1.1);
//2
Math.random();
//0.895478634
Math.floor(Math.random() * (max - min + 1)) + min;

Math.min(1,2,4,99);
//1
Math.max(1,2,4,99);
//99
var arr [1,2,4,99];
Math.max(...arr);
//99
var arr [1,2,4,99];
Math.min(...arr);
//1

////////////DATE///////////

new Date();
var a = new Date();

a.getDate();
8
a.getUTCDay();
6
a.getUTCHours();
14
a.setDate();
a.toGMTString();



var b = new Date(2017, 04, 08);
var b = new Date('13/04/2017');

var b = new Date(1);
//Jan 01 1970 ...

var c = Date.parse('08.04.2017');
//в милисекундах




задача 1
var objHuman = {
	name: 'Ivan',
	lastname: 'Ivanov',
	foto: 'foto.jpg',
	age: 21,
	email: 'i.ivanov@mail.ru',
	homeCity: 'St Petersburg' 
};
console.log('Объект человек содержит:');

for (var property in objHuman) {
	console.log('Свойство ' + property + ' содержит ' + objHuman[property]);
}

задача 2
var objWindow = {
	height: "200px",
	width: "400px",
	title: "text window",
	sharset: "utf-8"
};
console.log('Объект окно содержит:');

for (var property in objWindow) {
	console.log('Свойство ' + property + ' содержит ' + objWindow[property]);
}

///задача 3
var objSlider = {
	id: 'color slider',
	container: '200px:400px',
	slides: ['red', 'blue', 'green']
};
console.log('Объект окно содержит:');

for (var property in objSlider) {
	console.log('Свойство ' + property + ' содержит ' + objSlider[property]);
}

//задача 4
var objMenu = {
	name: "Main memu",
	items: [
		{
			name: "О компании",
			url: "about.html"
		},
		{
			name: "Товары",
			url: "goods.html"
		},
		{
			name: "Корзина",
			url: "backet.html"
		}
	]
}
console.log('Объект меню содержит:');
var objMenuProp;
var objMenuItem;
for (var property in objMenu) {
	objMenuProp = objMenu[property];
	if(typeof objMenuProp == 'object' 
		&& objMenuProp.length >= 0) {
		console.log('Свойство ' + property + ' содержит ' + objMenu[property]);
		for (var j = 0; j < objMenuProp.length; j++) {
			objMenuItem = objMenuProp[j];
			console.log('Объект №:  ' + j + ' включает ' );
			for (var property2 in objMenuItem) {
				console.log('Свойство ' + property2 + 
		' содержит ' + objMenuItem[property2]);
			}
		}
	} else {
	console.log('Свойство ' + property + 
		' содержит ' + objMenuProp);
	}
}
*/


// var a = [1, 2, 3];
// var b = a;
// b[3] = 4;
// console.log(a); // [1, 2, 3, 4]
// console.log(b)// [1, 2, 3, 4]

//функция, клонирующая копию бъектa
// var a = {
// 	name: 'Ivan',
// 	age: 21
// }
// var b = {};
// var i = 0;
// for (var prop in a) {
// 	if (i == 1 || i == 3 || i==5) {
// 		b[prop] = a[prop];
// 	}
// 	b[prop] = []
// 	for (var i = 0; i < a[prop].length; i++) {
// 		b[prop][i] = a[prop]
// 	}
// 	//clone(a)
// }

// написать функцию которой передается объект, 
//а она выводит его содержимое
// a(this) //this -- обращение к глобальной переменной

// var a = {
// 	name: 'Ivan',
// 	age: 21,
// 	print: function() {
// 		console.log(this);
// 	}
// }
// a.print();

function filter(arr, func) {
	var temp = [];
for (var i; i < arr.length; i++)
	if (func(arr[i])){
		temp.push(arr[i])
	}
}

filter([1,2,3], function(x){if (x < 0) {return true} else } });