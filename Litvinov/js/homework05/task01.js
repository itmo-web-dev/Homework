'use struct';
console.log("in side task01.js");
/*
1 Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. 
Учится в ИТМО. 
*/
(function(){
    
var student ={
    first_name:  "Иван",
    family: "Петров",
    age: "21 год",
    interests: ["программирование","гольф","музыку"],
    study: "ИТМО",
    get_interests: function(){
        var result = "";
        var interests = this["interests"];
        
        try{
            if(interests == "") throw "empty";
            if(interests == null) throw "field is not created";
        
            if(Object.prototype.toString.call(interests) === '[object Array]'){
                result = interests.join(', ');
            };
        }catch(err){
            return err;
            }
         return result;
    },
    info: function(){
        cmd = `${this.first_name} ${this.family}.`;
        cmd+= ` ${this.age}.`;
        cmd+= ` Интересы: ${this.get_interests()}.`;
        cmd+= ` Учится в ${this.study}.`;
        return cmd;
        } 
    };

console.log( student.info());



describe("task_01 student_info", function(){
    var res_correct, msg;
    beforeEach(function() {
        student.interests = ["программирование","гольф","музыку"];
    });
    res_correct='программирование, гольф, музыку';
    msg = "увлечения студента: {1}".replace('{1}',res_correct);
    it(msg, function(){
       expect(student.get_interests()).toEqual(res_correct);
    });
});    
   
describe("task_01 student_info", function(){
    var res_correct, msg;
    beforeAll(function() {
       student.interests = [];
    });
    res_correct='empty';
    msg = "увлечения студента: {1}".replace('{1}',res_correct);
    student.interests = [];
    it(msg, function(){
       expect(student.get_interests()).toEqual(res_correct);
    });
});
   
describe("task_01 student_info", function(){
    var res_correct, msg;
    beforeAll(function() {
       delete student.interests;
    });
    res_correct='field is not created';
    msg = "увлечения студента: {1}".replace('{1}',res_correct);
    student.interests = [];
    it(msg, function(){
       expect(student.get_interests()).toEqual(res_correct);
    });
});
    
})();
