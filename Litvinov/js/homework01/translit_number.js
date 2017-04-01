'use strict';
/*
2. Дано целое число, лежащее в диапазоне от -999 до 999. 
Вывести строку - словесное описание данного числа вида 
"отрицательное двузначное число", 
"нулевое число", 
"положительное однозначное число" и т.д. 

проверить положительное или отрицательное число 

конвертировать число в строку и перебрать по символьно  
особый вариант 0
*/

console.log("in side: translit_number.js");

function is_minus(num){
    if(num ==0)
        return "NaN";
    return (num > 0)? false: true;
   }
   
function translit(num){
    var znak = ["отрицательное","положительное"];
    var zero_text = "нулевое число";
    var rez_value="";
    
    if (num == 0){ return zero_text;}
    
    if(is_minus(num)){
        rez_value += znak[0];
    }else{
        rez_value += znak[1];
    }
    
    // TODO: конвертировать число в строку и перебрать по символьно  
             

   }
   
 