(function() { 
'use strict'; 

console.log('Задачки');
    
//1. Напишите функцию (), которая в зависимости от переданных в нее целочисленных аргументов "количество дней",
//будет выводить слово "день" в нужно форме ("если передали - 1, то 1 день", "если передали - 3, то 3 дня" и т.д). 

function calendar() {
    for (var i = 0; i < arguments.length; i++) {
        if ((arguments[i]%10 === 0) || (arguments[i]%5 === 0) 
           || ((arguments[i]%100 >= 11) && (arguments[i]%100 <= 19))) {
            console.log(arguments[i] + ' Дней');
        } else if ((arguments[i]%10 >= 2) && (arguments[i]%10 <= 4)) {
            console.log(arguments[i] + ' Дня');
        } else if (arguments[i]%10 === 1) {
            console.log(arguments[i] + ' День');
        } else {
           console.log(arguments[i] + ' Дней'); 
        }
    }
}

//calendar(121, 365, 12, 19, 1, 3, 1123, 489, 364, 1238);    
    
//2. Написать функцию подсчета суммы от n до m
    
function numSumn(n, m) { 
    if (n === m) return m;
    if (n > m) {
    return n + numSumn((n - 1), m);
    } else {
    return n + numSumn((n + 1), m);    
    }
}    

console.log(numSumn(5, 9));
    
    
//3. Написать функцию factorial(n), которая возвращает факториал числа n, использовать рекурсию!
    
function factorial(n) {
   if (n === 1) return 1;
    return n * factorial(n - 1); 
}    

//console.log(factorial(10)); 
    
//4. (на замыкание)
//Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.

function carry(num1) {
    return function(i) {
        return num1 + i; 
    }
}    

var myCarry = carry(127);

//console.log(myCarry(-28));
    
//Дополнительная задача к четвергу (на замыкание):
//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись,
//пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, 
//которые уже были сгенерированы функцией.
    
   var arr = [];
    
function myRandom() {
    var num1;
    return function superRandom() {
     
        if (arr.length === 100) { //Если массив заполнился, удаляем все элементы
            arr = []; 
        };
        var i = 0 
        while (i < 1) { // Генерим число пока оно не будет уникальным
        num1 = (Math.floor(Math.random() * 100) + 1);    
        if (arr.indexOf(num1) == -1) {        
            arr.push(num1);        // Если не встретилось в массиве, то записываем
            i = 1;
        }
        }
        return num1; // и выводим
    }
} 

var count =  myRandom();   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());
//console.log(count());   
//console.log(count());

//console.log(arr.length + ' длина массива');
    
} ());


    
    

