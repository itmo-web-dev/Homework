;(function(){
    'use strict';
    var graphX = [];
    for (var x = -5; x <= 5; x += 0.01)
    {
        graphX.push(x)
    };
    function output()
    {
        var graphY = [];
        for (var i = 0; i < graphX.length; i++)
        {
            if (graphX[i] < 1)
            {
                graphY.push(graphX[i] * graphX[i] - 4 * graphX[i])
            } else if (graphX[i] >= 1) 
            {
                graphY.push(5 / graphX[i])
            }
        };
    return graphY;
    };
    window.line1 = 
    {
        y: output(),
        x: graphX,
        type: 'scatter'
    };
/*-----------------------------------------------------------------------------------*/
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
                str = str + '<td>' + decode(arr[i*3+j]) + '</td>';
            };
            str = str + '</tr>';
        };

        str = str + '</tbody></table>';
        return str;

    };
/*--------------------------------------------------------------------------------------*/

window.myLib = {
        minVal: function(arr1) {
            var minOne = arr1[0];
            for (var i = 1; i < arr1.length; i++) {
                if (minOne > arr1[i]) {
                    minOne = arr1[i]
                };
            }
            return 'Минимальный элемент массива: ' + minOne;
        },
        maxVal: function(arr1) {
            var maxOne = arr1[0];
            for (var i = 1; i < arr1.length; i++) {
                if (maxOne < arr1[i]) {
                    maxOne = arr1[i]
                };
            }
            return 'Максимальный элемент массива: ' + maxOne;
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

/*--------------------------------------------------------------------------------------*/
function cesar(string, crypt)
{
    var upperC = 
    ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я',
    'А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
    var lowerC = 
    ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',
    'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    var str = string.split('');
    var encrString = [];
    var joinedStr, x;
    for(var i = 0; i < str.length; i++)
    {
        if(str[i].toLowerCase() == str[i])
        {
            x = lowerC.indexOf(str[i])+crypt;
            encrString.push(lowerC[x]);
        }
        if(str[i].toUpperCase() == str[i])
        {
            x = upperC.indexOf(str[i])+crypt;
            encrString.push(upperC[x]);
        }
    }
    joinedStr = encrString.join('');
    return joinedStr;
}
console.log(cesar('Привет', 4));
}());