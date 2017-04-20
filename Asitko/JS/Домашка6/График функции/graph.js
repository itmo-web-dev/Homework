'use strict'

// Подключить стороннюю библиотеку для построения графиков.
// Построить график функции y = f(x):
// y = 5/x, при x>=1;
// y = x*x – 4*x, при x<1.
// Шаг варьирования x равен 0.01 и интервал варьирования -5 ? x ? 5.
// Расчёт функции y = f(x) реализовать в виде отдельной функции.

var arrx = [];
var arry = [];
var y = arry[i];
	for (var i=-5; i <= 5; i = i+0.01) {
		arrx.push(i);}
		console.log(arrx);
		for (var i=-5; i < arrx.length-1; i++){
		var x = arrx[i];
		if (x >= 1) {
			y = 5/x;
			arry.push(y);
		} else if(x<1) {
			y = x*x - 4*x;
			arry.push(y);
		} 
	}
		console.log(arry);

var line = {
		x:arrx,
		y:arry,
		type:'scatter'
	};


	