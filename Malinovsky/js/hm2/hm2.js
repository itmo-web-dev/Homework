// Задан числовой массив (2, 3, 7, 13, 5, 0, 20)
//найти min max
// найти среднее 
// удалить первый и последний элементы массива



//min max
var arr = [2, 3, 7, 13, 5, 0, 20];
var min = arr[0];
var max = arr[0];
for (var i = 0; i < arr.length; i++) 
{
    if (arr[i] < min) {min = arr[i]}
}
console.log('min = ' + min)
for (var i = 0; i < arr.length; i++) 
{
    if (arr[i] > max) {max = arr[i]}
}
console.log('max = ' + max)