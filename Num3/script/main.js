(function(){
'use strict';

/*var sclon = [' ДЕНЬ', ' ДНЯ', ' ДНЕЙ'];

function days() {
	for(var i = 0; i < arguments.length; i++) {
		if (arguments[i] < 10) {
			if (arguments[i] == 1) {return arguments[i] + sclon[0]}
			else if (arguments[i] < 5) {return arguments[i] + sclon[1]}
			else if (arguments[i] >= 5) {return arguments[i] + sclon[2]}
		}
		else if (arguments[i] < 100) {
			if (arguments[i]%10 == 1) {return arguments[i] + sclon[0]}
			else if (arguments[i]%10 < 5 && arguments[i] > 20) {return arguments[i] + sclon[1]}
			else if (arguments[i]%10 >= 5 || arguments[i] >=10 && arguments[i] <= 20) {return arguments[i] + sclon[2]}
		}
		else if (arguments[i] < 1000) {
			if (arguments[i]%10 == 1 && arguments[i] !== 111 || arguments[i]%100 == 21) {return arguments[i] + sclon[0]}
			else if (arguments[i]%100 < 5 || arguments[i]%100 > 20 && arguments[i]%100 < 25) {return arguments[i] + sclon[1]}
			else if (arguments[i]%100 >= 5 || arguments[i]%100 >= 10 && arguments[i]%100 <= 20) {return arguments[i] + sclon[2]}
		}
	}
}

console.log(days(111));*/

/*Написать функцию factorial(n), которая возвращает факториал числа n,
использовать рекурсию!Написать функцию factorial(n),
которая возвращает факториал числа n, использовать рекурсию!*/

/*function factor(n) {
	if (n == 1) return 1;
	return n * factor(n - 1);
}

console.log(factor(7));*/


/*Напишите функцию которая возвращает новую функцию, которая увеличивает\уменьшает
переданное число на указаный шаг
*/

/*function func(num){
	var count = num;
	if (typeof num === 'number') {
		return function(steps) {
			return count + steps;
		};
	}
	return '"' + num + '"' + ' не число';
}

console.log(func(20)(20));*/

}())