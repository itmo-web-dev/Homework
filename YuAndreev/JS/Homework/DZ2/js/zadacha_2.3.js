'use strict';

//Задан числовой массив: [2,3,7,13,5,0,20]
//1. Найти (мин, макс) значение в массиве
//2. Найти среднее
//3. Удалить первый и последний элемент



var number = [2,3,7,13,5,0,20];
alert (number);
alert (Math.max.apply(null, number));
alert (Math.min.apply(null, number));

var sum = 0;
for (var i=0; i<number.length; i++) {
    sum = parseInt(sum)+parseInt(number[i]);
    }
var sr = sum / number.length;
alert (sr);

alert (number);

alert (number.shift ());
alert (number.pop ());
alert (number);

























































