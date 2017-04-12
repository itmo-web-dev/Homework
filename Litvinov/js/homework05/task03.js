'use struct';
console.log("in side task03.js");
/*

3 Задан массив целых чисел. Написать функцию filter. 
Функция filter получает в качестве аргументов исходный 
массив и функцию предикат проверяющую является ли число 
отрицательным (предикат – функция, которая возвращает 
истину или ложь). Функция filter используя предикат 
позволяет сформировать и вернуть новый массив, в который 
вошли все отрицательные элементы исходного массива.    
*/

(function(){
var trace = false;// true - for view debug log in console    

var sort_custom = function(a){
                if(isNaN(a))
                    return false;
                return (a < 0);
            };   
    
function find_negative_values(arr, func){
    var result = [], temp;
    
    for(var i=0,k=0; i<arr.length; i++){
        if(func(arr[i])){
            result[k++]=arr[i];
        }
    }
    
    if(trace) console.log(`результат: ${result}`);
    return result;
}
    
// release    
if (!trace){
    var A=[1, -2, 5, -10, 8, -4];
    console.log(`Дано: ${A}`);
    console.log(find_negative_values(A, sort_custom));
}
    
    
describe("task_03 find negative values", function(){
    var res_correct, msg;
    var A=1;
    res_correct= false;
    msg =`проверка функции с условием ${A} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(sort_custom(A)).toBeFalsy();
    });
});    
    
describe("task_03 find negative values", function(){
    var res_correct, msg;
    var A= -1;
    res_correct= true;
    msg =`проверка функции с условием ${A} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(sort_custom(A)).toBeTruthy();
    });
});
    
describe("task_03 find negative values", function(){
    var res_correct, msg;
    var A= "test";
    res_correct= false;
    msg =`проверка функции с условием ${A} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(sort_custom(A)).toBeFalsy();
    });
});
    
describe("task_03 find negative values", function(){
    var res_correct, msg;
    var A=[1, -2, 5, -10, 8, -4];
    res_correct=[ -2, -10, -4 ];
    msg =`найти получить массив отрицательных чисел ${A} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(find_negative_values(A, sort_custom)).toEqual(res_correct);
    });
});    

})();
