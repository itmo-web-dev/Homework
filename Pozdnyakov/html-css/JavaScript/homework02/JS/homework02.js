'use strict'; 

console.log('Задачки');

//Задачка №1

//1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
//В решении использовать только математические и логические операторы. Результат в консоль.
//Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!


var z = [2, 2];
var y = [7, 7];
var x = [10, 4];

// вычисляем квадраты длин сторон и записываем в переменные
var xylength2 = (x[1] - y[1]) * (x[1] - y[1]) +  (x[0] - y[0]) * (x[0] - y[0]);
var yzlength2 = (y[1] - z[1]) * (y[1] - z[1]) +  (y[0] - z[0]) * (y[0] - z[0]);
var xzlength2 = (x[1] - z[1]) * (x[1] - z[1]) +  (x[0] - z[0]) * (x[0] - z[0]);

//Теперь проверяем выполнится ли теорема Пифагора  

((xzlength2 == xylength2 + yzlength2) || (yzlength2 == xylength2 + xzlength2) || (xylength2 == yzlength2 + xzlength2))
    ? (console.log('Треугольник прямоугольный!')) : console.log('Треугольник НЕ прямоугольный!')



//((x[0] == y[0]) && (x[0] == z[0])) 
//    ? (console.log('Это линия, а не треугольник')) 
//        : (((x[0] == y[0]) || (x[0] == z[0])) 
//           ? (((x[1] == y[1]) || (x[1] == z[1])) 
//              ? (console.log('Треугольник прямоугольный')) : ((y[1] == z[1]) 
//                                        ? (console.log('Треугольник прямоугольный')) : (console.log('Треугольник НЕ прямоугольный'))))
//           :((y[0] == z[0]) ? (((y[1] == x[1]) || (x[1] == z[1])) 
//                              ? (console.log('Треугольник прямоугольный')) : (console.log('Треугольник НЕ прямоугольный'))) 
//                                : (console.log('Треугольник НЕ прямоугольный')))) 

//Задачка №2
//2. Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.

//Массив один для задачи 2 и 3
var arr = [2, 3, 7, 13, 5, 0, 20];
console.log('массив до сортировки: ' + arr);

//Собственный вариант (работает нормально, но про цикл внутри цикла, в котром при каждом проходе основного цикла
//уменьшается количество итераций не додумался..)

for (var i = 0; i < (arr.length - 1); i++) {
    if (arr[0] > arr[1]) arr.splice(0, 2, arr[1], arr[0]);
    if (arr[1] > arr[2]) arr.splice(1, 2, arr[2], arr[1]);
    if (arr[2] > arr[3]) arr.splice(2, 2, arr[3], arr[2]);
    if (arr[3] > arr[4]) arr.splice(3, 2, arr[4], arr[3]);
    if (arr[4] > arr[5]) arr.splice(4, 2, arr[5], arr[4]);
    if (arr[5] > arr[6]) arr.splice(5, 2, arr[6], arr[5]);  
  }

//Как правильно (скопипастил)..
// var n = arr.length;
//    for (var i = 0; i < n-1; i++)
//     { for (var j = 0; j < n-1-i; j++)
//        { if (arr[j+1] < arr[j])
//           { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
//        }
//     }                     

console.log('массив после сортировки: ' + arr);

//Задачка №3
//3.Задан числовой массив. Найти минимальное значение в массиве и максимальное. Найти среднее всех элементов массива. Удалить первый и последний элементы
////2, 3, 7, 13, 5, 0, 20
//

//
var min = arr[0];
var max = min;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
  }

console.log('минимальное число массива =' + min + ' максимальное число массива =' + max);

var mid = 0;

for (var i = 0; i < arr.length; i++) {
      mid = arr[i]+ mid;
  }
console.log('Среднее всех элементов массива =' + mid/arr.length);

console.log('Старый массив ' + arr);

arr.pop();
arr.shift();

console.log('Новый массив ' + arr);

