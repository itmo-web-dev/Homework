'use strict';

// console.log('Функции');

//именованые функции
/*
function имя_функции(должно быть глаголом, [сюда передавать аргументы apr1, apr2..]) {
тело функции
	[return]
}
*/

/*

function printFunc() {
	console.log(printFunc);
}
printFunc(); //вызов функции

function printHello (name) {
	console.log('Hello' + name);
}

printHello('Ivan'); //<-- выводит имя

///////////

function summ(a, b, c) {
	console.log(a + b + c);
}

summ(3, 7, 5);

//////////

//ARGUMENTS

function showAllUsers () {
	for (var i = 0; i < arguments.length; i++) {
		console.log('User' + (i + 1), arguments[i])
	}
}

showAllUsers('Ivan', 'Valery', 'Sasha');

//////////

function printUserInfo(name, surname) {
	surname = surname || 'Значение по умолчанию';
	console.log(name, surname);
}

printUserInfo('Yaroslav', 'Semenov');

//////////

*/
/*



function summ(a,b) {
	if (!checkNum(a, b)) {
		console.log('Вычисления не  возможны');
	}
	return a + b;
}

var sm = summ(2, 3);
console.log(sm);

function checkNum(a, b) {
	if ((typeof(a) != 'number' ||
		typeof(b) != 'number)')) {
		// console.log('ошибка ввода');
		return false;
	} else {
		// console.log('числа');
		return true;
	}
}

*/

//////////////////////////////////

// var res = calc();
// console.log(res);


/*

function calc(num1, num2, opr) {
	if (opr === '+') {
		return num1 + num2;
	} else if (opr === '-') {
		return num1 - num2;
	} else if (opr === '*') {
		return num1*num2;
	} else if (opr === '/') {
		if (num2 === 0)  {
			return 'Делить на ноль нельзя)';
		}
		return num1/num2;
	}
}

var res = calc(7, 9, '*');
console.log(res);



*/

//////////АНОНИМНЫЕ ФУНКЦИИ

/*

var someFunc = function(number) {
	if (number%2 === 0) {
		return 'четное';
	}
	return 'нечетное';
}

console.log(someFunc(9));


*/


// var name = 'Bob'; ////глобальная переменная

/*

function showName() {
	var name = 'Ivan';////локальная переменная
	console.log(name);
}

function someFunc() {
	var name = 'Bob';
	console.log(name);
}

showName();

*/
// (function() {

// }())   <------- самовызывающаяся функция

/*

(function() {

	'use strict';
	console.log('func');
   <---сюда добавлять всю функцию, она отработает и самоудалится--->
}())

*/


(function() {

function numSumm(n) {
	if(n === 1) return 1;
	return n + numSumm(n-1);
}
console.log(numSumm(5));

////функция в функции
function createCounter () {
	var calsNumber = 0;
	return function() {
		return calsNumber++;//происходит запоминание и благодаря этому счетчик будет увеличиваться
	}
}

var count = createCounter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());




/*функция, которая в зависимости от переданных в нее
целочисленных аргументов 'кол-во дней',
будет возвращать: "день", в правильной форме(дней)
например: 1 день, 2 дня, 5 дней. и тд
*/

function showDays() {
	for (var i = 0; i < arguments.length; i++) {
		if ((arguments[i]%10 === 0) 
			|| (arguments[i]%5 === 0)
			|| ((arguments[i]%100 >= 12)
			&& (arguments[i]%100 <= 19))) {
			return arguments[i] + ' Дней'
		} else if (arguments[i]%10 === 1) {
			return arguments[i] + ' День'
		} else if ((arguments[i]%10 >= 2)
			&& (arguments[i]%10 <= 4)) {
			return arguments[i] + ' Дня'
		} else return arguments[i] + ' Дней'
	}
}

console.log(showDays(11, 67, 44, 12, 98, 33, 199));




}())



