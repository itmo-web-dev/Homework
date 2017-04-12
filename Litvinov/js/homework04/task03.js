'use struct';
console.log("in side task03.js");
/*
 Проверить что введенный пароль удовлетворяет следующим условиям сложности:
	- длинна от 9 символов;
	- содержит обязательно английские буквы верхнего и нижнего регистра;
	- содержит более двух цифр;
	- содержит обязательно один из неалфавитных символов (например, !, $, #, %).
*/

function is_length_correct(password){
     return (password.length > 8)
}
function is_eng_letter(password){
     return (/[a-z]/.test(password)) && (/[A-Z]/.test(password))
}

function is_more_two_digits(password){
    var match = password.match(/\d/img);
    return (match != null)&&(match.length > 2);
    }
function is_one_not_alphabet_symbol(password){
    var match = password.match(/\W/img);
    return (match != null)&&(match.length<2);
    }


function is_pass_correct(password){
    return is_length_correct(password)&&
           is_eng_letter(password)&&
           is_more_two_digits(password)&&
           is_one_not_alphabet_symbol(password);
}
 
describe("task_03 is_length_correct", function(){
    var input_str='sdfj', res_correct=false;
    var msg = "Проверить длинну пароля: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_length_correct(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_length_correct", function(){
    var input_str='sdfjhhjjl', res_correct=true;
    var msg = "Проверить длинну пароля: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_length_correct(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_length_correct", function(){
    var input_str='', res_correct=false;
    var msg = "Проверить длинну пароля: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_length_correct(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_eng_letter", function(){
    var input_str='sdfjhhjjl', res_correct=false;
    var msg = "проверка английских букв: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_eng_letter(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_eng_letter", function(){
    var input_str='sdfjHHjjl', res_correct=true;
    var msg = "проверка английских букв: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_eng_letter(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_more_two_digits", function(){
    var input_str='sd5f5jHHjl', res_correct=false;
    var msg = "проверка более 2-х чисел: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_more_two_digits(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_more_two_digits", function(){
    var input_str='sd5f5jHH62jjl', res_correct=true;
    var msg = "проверка более 2-х чисел: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_more_two_digits(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_more_two_digits", function(){
    var input_str='sdfjHHjjl', res_correct=false;
    var msg = "проверка более 2-х чисел: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_more_two_digits(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_one_not_alphabet_symbol", function(){
    var input_str='sd5f5jHH62$jjl', res_correct=true;
    var msg = "проверка наличия не алфавитного символа: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_one_not_alphabet_symbol(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_one_not_alphabet_symbol", function(){
    var input_str='sd5f5jHH62jjl', res_correct=false;
    var msg = "проверка наличия не алфавитного символа: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_one_not_alphabet_symbol(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_one_not_alphabet_symbol", function(){
    var input_str='sd5f$5jH$H62j$jl', res_correct=false;
    var msg = "проверка наличия не алфавитного символа: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_one_not_alphabet_symbol(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_pass_correct", function(){
    var input_str='sdfjsdfjsdfdf', res_correct=false;
    var msg = "Проверить что введенный пароль: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_pass_correct(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_pass_correct", function(){
    var input_str='s4dDfj4sdf4jsd$fdf', res_correct=true;
    var msg = "Проверить что введенный пароль: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_pass_correct(input_str);
        expect(rez).toEqual(res_correct);
    });
});

describe("task_03 is_pass_correct", function(){
    var input_str='s4dDfj4s%df4jsd$fdf', res_correct=false;
    var msg = "Проверить что введенный пароль: '{0}'  результат {1}".replace('{0}',input_str).replace('{1}',res_correct);
    it(msg, function(){
        var rez = is_pass_correct(input_str);
        expect(rez).toEqual(res_correct);
    });
});

