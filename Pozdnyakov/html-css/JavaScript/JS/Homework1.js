'use strict';
console.log('Задачки');

// Задачка 1

//var num1, num2, num3;
//num1 = 2;
//num2 = 0;
//num3 = -4;

//    switch(num1) {
//    case (num1 < 0): 
//        console.log(num1*2);
//        break;
//    case (num1 > 0): 
//        console.log(num1*3);
//        break;
//    default:
//        console.log(num1);
//}

//if (num1 > 0) {
//    console.log(Math.pow(num1, 3));
//} else if (num1 < 0){
//    console.log(Math.pow(num1, 2));
//} else {
//    console.log(num1);
//}

//console.log(typeof(num1));

// Задачка 2

var month = parseInt(prompt('Введите месяц'));

if ((month <= 5) && (month >= 3)) {
    console.log('Spring')
} else if ((month <= 8) && (month >= 6)) {
    console.log('Summer')
} else if ((month <= 11) && (month >= 9)) {
    console.log('autumn')
} else if ((month === 12) || (month === 1) || (month === 2)) {
    console.log('Winter')
} else {
    console.log('error')
}
