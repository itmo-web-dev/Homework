'use strict';

//Создать массив из чисел. 
//Выполнить сортировку массива по возрастанию методом пузырька. 
//Запрещено использовать стандартные методы.

//копипаст

var num = [2,3,7,13,5,0,20];

console.log (num);

var sort = num.length-1;

for (var i = 0; i < sort; i++)
    
    for (var j = 0; j < sort-i; j++)
        
        if (num[j]> num[j+1]) {
            
            var max = num[j];
            
            num[j] = num[j+1];
            
            num[j+1] = max;
            
        }

