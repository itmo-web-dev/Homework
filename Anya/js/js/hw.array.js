'use strict';

var arr = [1, 4, 7, 0, 3, 14, 9];

var min_i = 0;
var max_i = 0;

for (var i = 1; i < 7; i++) {
	// console.log(arr[min_i] + '>' + arr[i]);
	if (arr[min_i] > arr[i]) {
		min_i = i;
	};
	if (arr[max_i] < arr[i]) {
		max_i = i;
	};

};

console.log('max: ' + arr[max_i] + '\nmin: ' + arr[min_i]);



//////////////////////Найти (мин, макс) значение в массиве

var arr = [1, 4, 7, 0, 3, 14, 9];

console.log(Math.min.apply({}, arr));
console.log(Math.max.apply({}, arr));

//////////////////////найти среднее

var arr = [1, 4, 7, 0, 3, 14, 9];
var summ = 0;

for (var i = 0; i < arr.length; i++){
	summ += arr[i]	
}

console.log(summ/arr.length);

//////////////////////удалить первый

var arr = [1, 4, 7, 0, 3, 14, 9];

arr.splice(0, 1);

console.log(arr);

//////////////////////и последний элемент

var arr = [1, 4, 7, 0, 3, 14, 9];

arr.pop(0, 1);

console.log(arr);

////////////////////////////////////////////////////////////



bubble sort
var arr = [17, 2, 10, 5, 4, 7, 3, 9, 6, 1, 8, 12, 14, 13, 11];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length - i; j++) {
		if (arr[j] > arr[j+1]) {
			var k = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = k;
		};
	};
	console.log(arr);

};

var arr = document.querySelectorAll('p');
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i].innerHTML);
}
