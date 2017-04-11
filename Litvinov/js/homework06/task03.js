'use struct';
console.log("in side task01.js");
/*
3 Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива.
*/
;(function(){
    window.Math_sd = {
       clone_array: function(array_in){
           var result_array = [];
           for(var key in array_in){
               result_array[key]=array_in[key];
           }
           return result_array;
       },
       min: function(array_in){
             for(var i=0, min=array_in[0];  i<array_in.length; i++){
                if (min > array_in[i])
                    min = array_in[i];
                }
              return min;
            },
        max: function(array_in){
             for(var i=0, max=array_in[0]; i<array_in.length; i++){
                if (max < array_in[i])
                    max = array_in[i];
                }
              return max;
            },
        average: function(array_in){
             for(var i=0, sum=0; i<array_in.length;i++){
                  sum += array_in[i];
                }
              return sum/array_in.length;
            }
    };
}());

// блок тестирования копирования массивов
var A=[1,3];
A.smel = 100;
A.bonus=[10, 20, 30];
A.bonus.tupic = 100;
var B=Math_sd.clone_array(A);
console.log(A === B);
A.push(3);
console.log(A);
console.log(B);


    

describe("task_03 Math_sd.min", function(){
    var res_correct, msg;
    var value_in = [3,6,7,8];
    res_correct=3;
    msg = "минимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
       expect(Math_sd.min(value_in)).toEqual(res_correct);
    });
 });      
 describe("task_03 Math_sd.min", function(){
    var res_correct, msg;   
    var value_in = [-10, 6,7,8];
    res_correct= -10;
    msg = "минимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.min(value_in)).toEqual(res_correct);
    });
});    

describe("task_03 Math_sd.max", function(){
    var res_correct, msg;
    var value_in = [3,6,7,8];
    res_correct=8;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
       expect(Math_sd.max(value_in)).toEqual(res_correct);
    });
 });    
describe("task_03 Math_sd.max", function(){
    var res_correct, msg;    
    var value_in = [-10, 6,7,8];
    res_correct= 8;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.max(value_in)).toEqual(res_correct);
    });
});

describe("task_03 Math_sd.average", function(){
    var res_correct, msg;    
    var value_in = [-10, 6,7,8];
    res_correct= 2.75;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.average(value_in)).toEqual(res_correct);
    });
});    

describe("task_03 Math_sd.average", function(){
    var res_correct, msg;    
    var value_in = [10, 6,7,8];
    res_correct= 7.75;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.average(value_in)).toEqual(res_correct);
    });
});
   

