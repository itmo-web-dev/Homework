'use strict'
// //Напишите функцию, которая в зависимости от 
// //переданных в нее целочисленных аргументов
// //"количество дней", будет возвращать
// //"день" в правильной форме, например "1 день" и т.д. 


function calendar() {
	for (var i = 0; i < arguments.length; i++){
		if ((arguments[i]%10 === 0) 
			|| (arguments[i]%5 === 0)
			|| ((arguments[i]%5 >= 12)
			|| (arguments[i]%100 <= 19))) {
			return arguments[i] + ' Дней';
		} else if (arguments[i]%10 === 1) {
			return arguments[i] + ' День';
		} else if (arguments[i]%10 >= 2 || arguments[i]%10 <= 4) {
			return arguments[i] + ' Дня';
		} else return arguments[i] + 'Дней'
	}	
}

console.log(calendar(117));

// Написать функцию подсчета суммы от n до m
console.log('Подсчет суммы от n до m');
function calcSumm(n, m) {
	var summ = 0;
		for (;n <= m; n++) {
			summ = summ + n;
		} return console.log(summ);
}

calcSumm(1, 12);

// // Написать функцию factorial(n), которая возвращает 
// //факториал числа n, использовать рекурсию!

function factorial(n) {
	if (n != 1) {
		return n * factorial(n-1);
	} return n;
}
console.log( factorial(9) );

// //Написать функцию, которая возвращает новую функцию, 
// //которая увеличивает/уменьшает переданное число на указанный при карировании шаг.

// ЕЩЕ НЕ ДЕЛАЛ