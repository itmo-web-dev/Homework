(function(){
'use strict';


/*1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. 
Нужно определить - является ли треугольник с заданными координатами прямоугольным.
В решении использовать только математические и логические операторы.
Результат в консоль.
Обязательное условие: все вычисления производить только с целыми числами. 
Любой переход в дробные числа запрещен!*/

/*var x1 = 0, x2 = 4, x3 = 0, y1 = 3, y2 = 0, y3 = 0;
// calculate lengths
var sideSqrt1 = ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2));
var side1 = Math.sqrt(sideSqrt1);
console.log('Сторона 1 = ' + side1);
var sideSqrt2 = ((x1 - x3) * (x1 - x3)) + ((y1 - y3) * (y1 - y3));
var side2 = Math.sqrt(sideSqrt2);
console.log('Сторона 2 = ' + side2);
var sideSqrt3 = ((x2 - x3) * (x2 - x3)) + ((y2 - y3) * (y2 - y3));
var side3 = Math.sqrt(sideSqrt3);
console.log('Сторона 3 = ' + side3);
// evidence
if (((sideSqrt1 + sideSqrt2) == sideSqrt3) || 
	((sideSqrt3 + sideSqrt2) == sideSqrt1) ||
	((sideSqrt1 + sideSqrt3) == sideSqrt2)) {console.log('Прямоугольный треугольник!');}
	else console.log('Не прямоугольный и не факт что треугольник!');*/


/*-----------------------------------------------------------------------------------------------------*/

/*2. Создать массив из чисел.
Выполнить сортировку массива по возрастанию методом пузырька.
Запрещено использовать стандартные методы.*/


/*var array = [1, 3, 6, 7, 3, 2];
console.log(array);
var n = array.length;
console.log(n);
for(var i = 0; i < n - 1; i++) {
	for(var i1 = 0; i1 < n - 1 - i; i1++) {
		if(array[i1+1] < array[i1]) {
			var t = array[i1+1]; array[i1+1] = array[i1]; array[i1] = t;
		}
	}
}
console.log(array);*/

/*-----------------------------------------------------------------------------------------------------*/

/*3. Задан числовой массив: [2,3,7,13,5,0,20].
Найти (мин, макс) значение в массиве, найти среднее,
удалить первый и последний элемент*/

/*var min = arr[0];
var max = min;
var mid = 0;
  	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
  	}
console.log('min num =' + min + ' max num =' + max);
	for (var i = 0; i < arr.length; i++) {
		mid = arr[i]+ mid;
  	}
console.log('middle of ALL =' + mid/arr.length);
console.log('OLDmassive ' + arr);
arr.pop();
arr.shift();
console.log('NEWmassive ' + arr);*/
}())