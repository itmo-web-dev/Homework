(function () {
    'use strict';

    console.log('Задачки');

    //1 Подключить стороннюю библиотеку для построения графиков.
    //Построить график функции y = f(x):
    //y = 5/x, при x>=1;
    //y = x*x – 4*x, при x<1.
    //Шаг варьирования x равен 0.01 и интервал варьирования -5 ? x ? 5.
    //Расчёт функции y = f(x) реализовать в виде отдельной функции.

    var aX = [];

    for (var x = -5; x < 5; x += 0.01) {
            aX.push(x);
    };

    function myFunction() {
        var aY = [];
        for (var i = 0; i < aX.length; i++) {
            if (aX[i] < 1) {
                aY.push(aX[i] * aX[i] - 4 * aX[i])
            } else if (aX[i] >= 1) {
                aY.push(5 / aX[i])
            }
        };
        return aY;
    };

    window.line1 = {
        y: myFunction(),
        x: aX,
        type: 'scatter'
    };

    //2 Одномерным массивом задана доска 3 на 3 
    //var area = [ null, null, null, null, null, null, null, null, null ]
    //Необходимо сформировать игровое поле, состоящее из квадратов для крестиков-ноликов в HTML. 
    //При появлении в массиве 0-ля рисовать нолик , 1-цы крестик. 
    //Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
    //Для вывода html поля использовать document.write(). Код генерации html поля 
    //вынести в отдельную функцию в отдельный подключаемый js модуль.   
var arr = [1, null, 1, null, 1, null, 0, 0, null];
function decode(a) {
          if (a === 1) {
              return 'X';
          } else if (a === 0) {
              return '0';
          } else return null;
        }; 
window.X0 = function () {
        var str = '<table><tbody>';
        for (var i = 0; i < 3; i++) {
            str = str + '<tr>';
            for (var j = 0; j < 3; j++) {
                str = str + '<td>' + decode(arr[i*3 +j]) + '</td>';
            };
            str = str + '</tr>';
        };

        str = str + '</tbody></table>';
        return str;

    };
    
//3 Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
//Библиотека должна обладать следующими методами:
//- поиск минимального элемента в переданном массиве;
//- поиск максимально элемента в переданном массиве;
//- расчет среднего арифметического значения элементов переданного массива;
//- создание копии (клонирование) переданного массива.    
    
    window.myLib = {
        searchMin: function(arr1) {
            var minEl = arr1[0];
            for (var i = 1; i < arr1.length; i++) {
                if (minEl > arr1[i]) {
                    minEl = arr1[i]
                };
            }
            return 'Минимальный элемент массива: ' + minEl;
        },
        searchMax: function(arr1) {
            var maxEl = arr1[0];
            for (var i = 1; i < arr1.length; i++) {
                if (maxEl < arr1[i]) {
                    maxEl = arr1[i]
                };
            }
            return 'Максимальный элемент массива: ' + maxEl;
        },        
        getAverage: function(arr1) {
            var av = 0;
            for (var item of arr1) {
                av = av + item;
            }
            return 'Среднее арифметическое значение элементов: ' + av / arr1.length;
        },
        cloneArr: function(arr1) {
            var newArr = arr1.slice(0, arr1.length);
            return 'Клон исходного масиива: ' + newArr;
        }
    };
    
//Bonus.
//Задача повышенной сложности:
//4 Написать кодер для шифра Цезаря (https://ru.wikipedia.org/wiki/Шифр_Цезаря). 
//На вход принимается строка и сдвиг. На выход - зашифрованное/расшифрованное сообщение.
//Выдержка из Вики:
//Шифр Цезаря — это вид шифра подстановки, в котором каждый символ в открытом 
//тексте заменяется символом, находящимся на некотором постоянном числе позиций левее 
//или правее него в алфавите. Например, в шифре со сдвигом вправо на 3, А была бы 
//заменена на Г, Б станет Д, и так далее.

var rusU = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];  
var rusL = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];

//console.log('Индекс: ' + rusU.indexOf('В')); 

var str = 'На дворе трава, на траве дрова. Корабли лавировали. Эукариот. Яблоко c юлой из подъезда ь';
    
//console.log('Check str: ' + str[2]);    

//Функция, которая будет возвращать правильный индекс, если шаг слишком большой/маленький    
function returnIndex(a) { 
    while (a > 32) {
                a = a - 33
            };
    while (a < 0) {
                a = a + 33
            };
    return a;
}
    
function myCesar(str, step) {
    var strArr = str.split('');
    var ind;
    var shifrInd;
    for (var i = 0; i < strArr.length; i++) {
        if (rusU.indexOf(strArr[i]) != -1) {
            ind = rusU.indexOf(strArr[i]);
            shifrInd = ind + step;
            shifrInd = returnIndex(shifrInd);
            strArr[i] = rusU[shifrInd];
        } else if (rusL.indexOf(strArr[i]) != -1) {
            ind = rusL.indexOf(strArr[i]);
            shifrInd = ind + step;
            shifrInd = returnIndex(shifrInd);
            strArr[i] = rusL[shifrInd];
        }
    }
    var str = strArr.join('');
    return str;
}
    console.log('Исходная строка: ' + str);
    str = myCesar(str, 10);
    console.log('Строка после шифрования: ' + str);
    str = myCesar(str, -10);
    console.log('Строка после ДЕшифрования: ' + str);

}());