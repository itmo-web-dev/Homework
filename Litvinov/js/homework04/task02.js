'use struct';
console.log("in side task02.js");
/*
 Дана строка S и символ C. Удвоить каждое вхождение символ C в строку S.
*/

function str_append(str_base, str_insert){
    return str_base+str_insert;
    }

function replace_symbol(str, symbol_search, symbol_in){
    var result="";
    for(var i=0; i<str.length;i++){
        if (str[i] === symbol_search){
                result = str_append(result, symbol_in);
        } else {
                result = str_append(result, str[i]);
                }
        console.log(str[i]+' '+ result);
    }
    return result;
}
 
describe("task_02 replace_symbol", function(){
    var input_str='caaccaa', res_correct='ccaaccccaa';
    var msg = "Удвоить каждое вхождение символa 'c'\n в строку '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = replace_symbol(input_str,'c','cc');
        expect(rez).toEqual(res_correct);
    });
});

describe("task_02 replace_symbol", function(){
    var input_str='$$$$caaccaa', res_correct='$$$$ccaaccccaa';
    var msg = "Удвоить каждое вхождение символa 'c'\n в строку '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = replace_symbol(input_str,'c','cc');
        expect(rez).toEqual(res_correct);
    });
});

describe("task_02 replace_symbol", function(){
    var input_str='testcbase', res_correct='test<span>c</span>base';
    var msg = "Добавить <span> 'c'\n в строку '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = replace_symbol(input_str,'c','<span>c</span>');
        expect(rez).toEqual(res_correct);
    });
});
    