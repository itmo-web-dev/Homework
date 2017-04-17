'use strict';

var a = 64;
var b = 4;
var c = 3;

if ((a < b) && (a < c)) {
	console.log ('Наименьшее число - ' + a)
}

if ((b < a) && (b < c)) {
	console.log ('Наименьшее число - ' + b)
}

if ((c < b) && (c < a)) {
	console.log ('Наименьшее число - ' + c)
}

//////////

var a = -16;
if (a < -9 && a > -100) {
	console.log (a, ' - отрицательное двузначное число')
} else 
if (a === 0) {
	console.log (a, ' - нулевое число') 
} else
if (a > 0 && a < 10) {
	console.log (a, ' - положительное однозначное число') 
} else console.log ('Проблем нет')

//////////

var num1 = parceInt(prompt('Введите число'));
switch (num1) {
	case 0:
		console.log('Ноль');
		break;
	case 1:
		console.log('Один');
		break;
	case 2:
		console.log('Два');
		break;
	case 3:
		console.log('Три');
		break;
	case 4:
		console.log('Четыре');
		break;
	case 5:
		console.log('Пять');
		break;
	case 6:
		console.log('Шесть');
		break;
	case 7:
		console.log('Семь');
		break;
	case 8:
		console.log('Восемь');
		break;
	case 9:
		console.log('Девять');
		break;
	default:
		console.log('Oшибка');
}