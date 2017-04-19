'use strict';



// функция, которая в зависимости от переданных в нее
// целочисленных аргументов 'кол-во дней',
// будет возвращать: "день", в правильной форме(дней)
// например: 1 день, 2 дня, 5 дней. и тд

function calendar() {
    for (var i = 0; i < arguments.length; i++) {
        if ((arguments[i]%10 === 0) || (arguments[i]%5 === 0) 
           || ((arguments[i]%100 >= 11) && (arguments[i]%100 <= 19))) {
            console.log(arguments[i] + ' Дней');
        } else if ((arguments[i]%10 >= 2) && (arguments[i]%10 <= 4)) {
            console.log(arguments[i] + ' Дня');
        } else if (arguments[i]%10 === 1) {
            console.log(arguments[i] + ' День');
        } else {
           console.log(arguments[i] + ' Дней'); 
        }
    }
}

console.log(calendar(11, 67, 44, 12, 98, 33, 199));


//////////////////////////////////


// function summ(a,b) {
// 	if (!checkNum(a, b)) {
// 		console.log('Вычисления не  возможны');
// 	}
// 	return a + b;
// }

// var sm = summ(2, 3);
// console.log(sm);

//////////////////////////////////////

// function checkNum(a, b) {
// 	if ((typeof(a) != 'number' ||
// 		typeof(b) != 'number)')) {
// 		// console.log('ошибка ввода');
// 		return false;
// 	} else {
// 		// console.log('числа');
// 		return true;
// 	}
// };

// //////////////////////////////////////

// var factorial = function(number) {
// 	if (number <= 0) {
// 		return 1;
// 	} else {
// 		return (number * factorial(number - 1));
// 	}
// };
// console.log(factorial(6));

/////////////////////////////////

var autoSumm = function (m, n) {
var summ = 0;
for (i = m; i <= n; i++) {
	summ = summ + i;
	return(summ);
    };
};
console.log(autoSumm); 


//////////////////////////////////////////

// function FunName(x, y) {
// 	var oldX = x;
// 	var oldY = y;
// 	var calsNumber = 0;

// 	if (typeof oldY == 'undefined') {
// 		return function (newY)
// 		{
// 			return oldX + newY;
// 		};
// 	}
// 	return x + y;

// 	if (oldX >= 0 || oldY <= 0) {
// 		return function(x, y) {
// 			return calsNumber++;
// 		};
// 	}

// 	typeof (FunName(5));
// }

// var count = FunName();

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());




//////////////////////////////////


var FuncName = function(i) {
	return function(x) {
		return i + x;
	};
};

var NewFuncName = FuncName(54);
console.log(NewFuncName(11));


