'use strict';
console.log("in side random_letter.js");

/*
сделать функцию которая генерит слова со средней вероятностью 5.5 символов в слове
*/
//(function()
var dictionary = (function(){
    var letters = [];
    var name= "";
    var lcounter = 0;
    var prev_type = "";
    var random_int = function(min, max) {
          // Math.ceil -возвращает наименьшее число, большее или равное аргументу
          min = Math.ceil(min);
          // Math.floor-возвращает наибольшее целое меньше или равное аргументу
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        };
    
    return{
        load: function(data){
            var letters_data = JSON.parse(data);
            this.name = letters_data.name;
            this.letters = letters_data.letters;
        },
        info: function(){
            for(var prop in this){
                console.log("object alphabet: "+prop);
                }   
            },
        get_alphabet: function(){
            var outbox = [];
            for(var i=0; i<this.letters.length; i++){
                outbox[i]=this.letters[i].name;
                }
            return outbox;
            },
        get_random_letter: function(){
            // почему не работает? var num = this.random_int(1, 33);
            var count = 100,result ="", num;
            while(count){
                num = random_int(1, 33);
                result ="";
                if(this.prev_type != this.letters[num].type){
                    this.prev_type = this.letters[num].type;
                    result = this.letters[num].name;
                    break;
                    }
                count--;
                }
            return result;
        }
    }
})();


/*  при при рандомной генерации слов от 4-8 среднее кол-во букв 5.48 в слове 
что примерно соответсвует усредненной оценке из достоверных источников */

var random_int = function(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        };

dictionary.load(data);
dictionary.info();
// console.log(dictionary.get_alphabet());
var word=[], word_length_max, total_word = 0, max_count, count=15;
max_count = count;
while(count--){
    word_length_max = random_int(4, 8);
    for(var i=0; i< word_length_max; i++){
        word.push(dictionary.get_random_letter());
        }
    console.log(word.join(""));
    word.length = 0;
    total_word += word_length_max;
    // console.log("срелнее кол-во букв в слове: ", total_word/(10-count));
}
console.log("срелнее кол-во букв в слове: ", total_word/max_count);