'use strict';
/* 5. Проверить истинность высказывания: 
‘Среди трех данных целых чисел есть хоть бы одна пара совпадающих".*/

var cmd= "task5.js";
console.log(cmd);

function is_two_concurrence(v1, v2, v3){
    return (v1==v2)||(v2==v3)||(v3==v1) ? true : false;
    }


