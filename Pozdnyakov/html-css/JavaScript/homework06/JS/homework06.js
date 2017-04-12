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

    for (var x = -5; x += 0.01;) {
        if (x < 5) {
            aX.push(x);
        } else
            break;
    };

    function myFunction() {
        var aY = [];
        for (var i = 0; i < aX.length; i++) {
            if (aX[i] < 1) {
                aY.push(aX[i] * aX[i] - 4 * aX[i])
            } else if (aX[i] >= 1) {
                aY.push(aX[i] * aX[i] - 4 * aX[i])
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
function elementIndex (i, j) {
            if (i === 0 && j ===0) return 0;
            if (i === 0 && j ===1) return 1;
            if (i === 0 && j ===2) return 2;
            if (i === 1 && j ===0) return 3;
            if (i === 1 && j ===1) return 4;
            if (i === 1 && j ===2) return 5;
            if (i === 2 && j ===0) return 6;
            if (i === 2 && j ===1) return 7;
            if (i === 2 && j ===2) return 8;
        };    
window.X0 = function () {
        var str = '<table><tbody>';
        for (var i = 0; i < 3; i++) {
            str = str + '<tr>';
            for (var j = 0; j < 3; j++) {
                str = str + '<td>' + decode(arr[elementIndex(i, j)]) + '</td>';
            };
            str = str + '</tr>';
        };

        str = str + '</tbody></table>';
        return str;

    };

}());