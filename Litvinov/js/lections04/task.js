'use struct';
console.log("in side task.js");
/* посчитать количество гласных */
(function (){
    var str = "Тестовая строка";
    var verb = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
    var count=0;
    for(var i=0; i<str.length; i++){
        for(var j=0; j< verb.length; j++){
            if(str[i] === verb[j]){
                count++;
            }
        }
    }
    console.log("count: "+count);
})();

// регулярные выражения
var regexp =/шаблон/;
var regexp =/шаблон/gmi;

// str.search(reg);
var str1 = 'lo\n sd  lo\n'+
    '  sd lo\n '+
    'sdsd \n sdfsf';
/*
console.log(str);
var regEx = /lo/gm;
var rez = str.match(regEx);
console.log(rez)
//--------------------------------------
var regEx = /lo/g;
var rez = str.match(regEx);
console.log(rez)

var str = '1е место: Винни\n' +
  '2е место: Пятачок\n' +
  '33е место: Слонопотам';
console.log(str1);
console.log( str1.match(/^\d+/gm) ); // 1, 2, 33
console.log( str1.match(/lo/gm) ); // 1, 2, 33
console.log( str1.match(/^\d+/g) ); // 1
console.log( str1.match(/lo/g) ); // 1
*/

// определение валидности числа
var str = "7(921)911-51-97";
var rez = /\d[ (]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/.test(str);
console.log(rez);
// экранировние символов 
var str = "7 (921)";
var rez = /\d \(\d{3}\)/.test(str);
console.log(rez);

var str = "7 (921)911-51-97";
var rez = /\d \(\d{3}\)\d{3}-\d{2}-\d{2}/.test(str);
console.log(rez);

var str = "+7 (921)911-51-97";
var rez = /\+(7|8) \(\d{3}\)\d{3}-\d{2}-\d{2}/.test(str);
console.log(rez);

var str = "8 (921)911-51-97";
var rez = /(\+7|8) \(\d{3,4}\)\d{3}-\d{2}-\d{2}/.test(str);
console.log(rez);

var str = "8 (9214)911-51-97";
var rez = /(\+7|8) \(\d{3,4}\)\d{3}-\d{2}-\d{2}/.test(str);
console.log(rez);
console.log("----------------------");
// определить info@ifmo.ru
var str = "info@ifmo.ru";
var rez = /\w+[@]\w+[.][r][u]/.test(str);
console.log(rez);
// дата
console.log("----------------------");
var str = "31.12.2015";
var rez = /\d{2}[.]\d{2}[.]\d{4}/.test(str);
console.log(rez);
console.log("--------313.12.2015--------------");
var str = "313.12.2015";
// var rez = /\d?[.]\d{2}[.]\d{4}/.test(str);
var rez = /\d/.test(str);
console.log(rez);