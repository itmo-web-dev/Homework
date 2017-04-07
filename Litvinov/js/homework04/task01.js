'use struct';
console.log("in side task01.js");
/*
 Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 
*/


function calc_sum_numbers(str){
    var numbers=[], sum=0;
    for(var i=0; i<str.length;i++){
        try{
            x = parseInt(str[i]);
            if(isNaN(x)) throw "not a number";
            numbers[i]=x;
        }catch(err){
            if(err=="not a number")
                numbers[i] = "NaN";
        }
    }
    console.log(numbers);
    for(var j=0; j<numbers.length;j++){
        if(numbers[j] != "NaN")
            sum += numbers[j]
    }
    return sum;  
}
 
describe("task_01 calc_sum_numbers", function(){
    var input_str='1111';
    var msg = "Вывести сумму цифр этого числа: {0}  результат {1}".replace('{0}',input_str).replace('{1}',"4");
    it(msg, function(){
        var rez = calc_sum_numbers(input_str);
        expect(rez).toEqual(4);
    });
});

describe("task_01 calc_sum_numbers", function(){
    var input_str='1234', res_correct=10;
    var msg = "Вывести сумму цифр этого числа: {0}  результат {1}".replace('{0}',input_str).replace('{1}', res_correct);
    it(msg, function(){
        var rez = calc_sum_numbers(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_01 calc_sum_numbers", function(){
    var input_str='-1234', res_correct=10;
    var msg = "Вывести сумму цифр этого числа: {0}  результат {1}".replace('{0}',input_str).replace('{1}', res_correct);
    it(msg, function(){
        var rez = calc_sum_numbers(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_01 calc_sum_numbers", function(){
    var input_str='-123jdfjtelqweljyt34jjer', res_correct=13;
    var msg = "Вывести сумму цифр этого числа: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}', res_correct);
    it(msg, function(){
        var rez = calc_sum_numbers(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_01 calc_sum_numbers", function(){
    var input_str='-123   34 ', res_correct=13;
    var msg = "Вывести сумму цифр этого числа: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}', res_correct);
    it(msg, function(){
        var rez = calc_sum_numbers(input_str);
        expect(rez).toEqual(res_correct);
    });
});
    