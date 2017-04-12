'use strict';

//Проверить истинность высказывания: 
//Среди трех данных целых чисел есть хоть бы одна пара совпадающих.

var a, b, c;
a = parseInt (prompt('Ведите первое число'));
b = parseInt (prompt('Ведите  второе число'));
c = parseInt (prompt('Ведите  третье число'));
    if (a === b || a === c || b === c) {
        alert ('true');
    } else {
        alert ('false');
    }



