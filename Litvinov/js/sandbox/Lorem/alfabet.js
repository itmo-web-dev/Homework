'use strict';
console.log("in side alfabet.js  ");

var letter = {
     name: "a",
     counter: 0,
     type: "vowels",
     number: 1
};
var vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "е", "ё"];
var consonants = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"];

var alphabet = {
    letters: [],
    name: "",
    lcounter: 0,
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
        var outbox = []
        for(var i=0; i<this.letters.length; i++){
            outbox[i]=this.letters[i].name;
            }
        return outbox;
        },
    count_letters: function(l){
        // console.log(l.toLowerCase());
        for(var i=0; i < this.letters.length; i++){
            if (this.letters[i].name==l.toLowerCase()){
                this.letters[i].counter++;
                this.lcounter++;
                // break;
                };
            };
        },
    get_symbols_count: function(){
        return this.lcounter;
        },
    get_all_letters_count: function(){
        for(var i=0; i<this.letters.length;i++){
            var letter = this.letters[i].name;
            var letter_count = this.letters[i].counter;
            var leter_persent =((this.letters[i].counter*100)/this.lcounter).toFixed(3);
            console.log(`буква: ${letter} роц.: ${leter_persent} %,  кол: ${letter_count}`);
        }
    }
};

describe("alphabet test get all alphabet", function(){
    var res_correct, msg;
    res_correct=['тттт', 'а', 'б', 'в', 'г', 'д', 'е',
                 'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
                 'м', 'н', 'о', 'п', 'р', 'с', 'т', 
                 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 
                 'ъ', 'ы', 'ь', 'э', 'ю', 'я' ];
    beforeEach(function() {
        alphabet.load(data);
    });
    msg = "проверка букв : {1}".replace('{1}',res_correct);
    it(msg, function(){
       expect(alphabet.get_alphabet()).toEqual(res_correct);
    });
});    


describe("alphabet test letter counter a", function(){
    var res_correct, msg;
    var data_input = ["а", "а", "б","а","а","а"];
    res_correct=5;
    beforeEach(function() {
        alphabet.load(data);
        for(var i=0;i<data_input.length;i++){
            alphabet.count_letters(data_input[i]);
            }
    });
    msg = "проверка букв {0}: {1}".replace('{0}',data_input).replace('{1}',res_correct);
    it(msg, function(){
       expect(alphabet.letters[1].counter).toEqual(res_correct);
    });
});    

describe("alphabet test letter counter б", function(){
    var res_correct, msg;
    var data_input = ["a", "a", "б","б","a","a"];
    res_correct=2;
    beforeEach(function() {
        alphabet.load(data);
        for(var i=0;i<data_input.length;i++){
            alphabet.count_letters(data_input[i]);
            }
    });
    msg = "проверка букв {0}: {1}".replace('{0}',data_input).replace('{1}',res_correct);
    it(msg, function(){
       expect(alphabet.letters[2].counter).toEqual(res_correct);
    });
});  
