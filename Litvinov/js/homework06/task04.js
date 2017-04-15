'use strict';
/*
Задача повышенной сложности:
4 Написать кодер для шифра Цезаря (https://ru.wikipedia.org/wiki/Шифр_Цезаря). 
На вход принимается строка и сдвиг. На выход - зашифрованное/расшифрованное сообщение.
Выдержка из Вики:
Шифр Цезаря — это вид шифра подстановки, в котором каждый символ в открытом 
тексте заменяется символом, находящимся на некотором постоянном числе позиций левее 
или правее него в алфавите. Например, в шифре со сдвигом вправо на 3, А была бы 
заменена на Г, Б станет Д, и так далее.
*/

var text =  '...Вероятно, вашим  первым  серьезным  открытием,  доктор  Пильман, следует считать так называемый радиант Пильмана?  - Полагаю, что нет. Радиант Пильмана - это не первое, не серьезное и, собственно, не открытие. И не совсем мое.     - Вы, вероятно, шутите, доктор. Радиант Пильмана - понятие, известное всякому школьнику.     - Это меня не удивляет. Радиант Пильмана и был открыт впервые  имен но школьником. К сожалению, я не помню, как его звали. Посмотрите у  Стетсона в его "Истории Посещения"  -  там  все  это  подробно  рассказано.  Открыл радиант  впервые  школьник,  опубликовал  координаты  впервые  студент,  а назвали радиант почему-то моим именем.'

function is_upper_case(letter){
    var pattern = new RegExp("[АБ-Я]");
    var upper_case=false;
    if (pattern.test(letter)){
                upper_case = true;
            }else{
                upper_case = false;
            }
    return upper_case;
}

function is_russian(letter){
    // ёЁ не включается в поиск от а-яА-Я его надо добавить отдельно
    var pattern_alph = new RegExp("[аб-яёАБ-ЯЁ]");
    var rus=false;
    if (pattern_alph.test(letter)){
                rus = true;
            }else{
                rus = false;
            }
    return rus;
}

function code(shift_letters, side, dict){
     var base_alphabet=['а', 'б', 'в', 'г', 'д', 'е',
                     'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
                     'м', 'н', 'о', 'п', 'р', 'с', 'т', 
                     'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 
                     'ъ', 'ы', 'ь', 'э', 'ю', 'я' ];
    var tmp;
    // TODO: что-то не то с dict - в принципе его создание тут не нужно
    if(dict == undefined){
        dict = new Object();
    } else {
        for(var i=0; i<base_alphabet.length; i++){
            tmp = dict[base_alphabet[i]];
            base_alphabet[i] = tmp;
        }
    }
    
    console.log(base_alphabet);

    var code_alphabet = Math_sd.shifted(base_alphabet, shift_letters, side);
    console.log(code_alphabet);

    var dict = new Object();
        for(var i=0; i< base_alphabet.length; i++){
            dict[base_alphabet[i].toString()]=code_alphabet[i];
        }
    return dict;
};

function text_coder(text, code_dict){
    var new_str = "", letter ='', l="";
    for(var i=0; i<text.length; i++){
        l = text[i]; 
        if(is_russian(l)){
            letter = code_dict[l.toLowerCase()];
            if(is_upper_case(l))
                letter = letter.toUpperCase();
        } else{
            letter = l;
            }
        new_str += letter;  
    };
    return new_str;
};
    

function main(){
    console.log(text) ;
    var dict = code(3, "left");
    var coded_text = text_coder(text, dict);
    console.log(coded_text) ;
    
    var dict = code(3, "right", dict);
    var coded_text = text_coder(coded_text, dict);
    console.log(coded_text) ;
};

main();

describe("task_04 Caesar code", function(){
    it("is_upper_case ", function(){
        expect(is_upper_case("А")).toBeTruthy();
        expect(is_upper_case("ф")).toBeFalsy();
        expect(is_upper_case(1)).toBeFalsy();
        expect(is_upper_case("sd")).toBeFalsy();
    });
    
    it("is_russian ", function(){
        expect(is_russian("А")).toBeTruthy();
        expect(is_russian("ф")).toBeTruthy();
        expect(is_russian(1)).toBeFalsy();
        expect(is_russian("sd")).toBeFalsy();
        expect(is_russian("е")).toBeTruthy();
        expect(is_russian("ё")).toBeTruthy();
    });
});
    