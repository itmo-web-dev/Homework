////'use strict'; 
////
////console.log('Массивы');
////
//////var arr = []; // Объявление массива
////
////var arr2 = [1, 2, 6, 'user1', 'user4', null, [4, 8, 12], true];
////
var pictures = ['forest', 'sky', 'ocean'];
////
////var forest = pictures[0];
////console.log(forest);
////
////
////pictures[1] = 'river';
////
////pictures[3] = 'winter';
////
////console.log(pictures);
////
////var picturesLength = pictures.length;
////console.log(picturesLength);
////
//////методы массивов
////
////var a = pictures.pop(); //удаление последнего элемента массива
////console.log(a);
////console.log(pictures);
////
////pictures.push('spring');
////console.log(pictures);
////
////var b = pictures.shift(); //Удаление первого элемнта массива
////console.log(b);
////console.log(pictures);
////
////pictures.unshift('flowers'); //Добавление первого элемнта массива
////console.log(pictures);
////
////// .split()
////
//////var str = 'very, long, string';
//////var arr = str.split(', ', 1);
//////console.log(arr);
////
//////pictures = ['forest', 'sky', 'ocean'];
//////var str = pictures.join(', ');
//////console.log(str);
////
//////console.log(pictures);
//////pictures = pictures.reverse(); // переворачивает массив наоборот
//////console.log(pictures);
////
////// .splice(индекс, []) удаление/вставка элементов
////
console.log(pictures);
pictures.splice(1, 2, 'newElement'); 
console.log(pictures);
////
////
////// .slice(начало, конец) копирование элементов массива в новый массив
////
////var newArr = pictures.slice(1, 3);
////console.log(newArr);
////
////// .indexOf() возвращает номер конкретного элемента в массиве
////
////var c = pictures.indexOf('river');
////console.log(c);
////
////// .lastIndexOf()
////
////console.log(pictures);
////var d = pictures.lastIndexOf('river');
////console.log(d);
////
//
//
//var pictures = ['forest', 'sky', 'ocean', 'forest'];
//
//for (var i = 0; i < pictures.length; i++) {
//    console.log('Элемент массива №', i, pictures[i]);
//}
//
//pictures.length = 2;
//console.log(pictures);
//
////многомерный массив
//var matrix = [
//    [1, 2, 3],
//    [6. 8, 10],
//    [13, 0, 2]
//]
//
