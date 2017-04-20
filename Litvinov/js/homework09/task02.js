'use struct';
console.log("in side task02.js");
/*
2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.»
*/
;(function(){
    
function Person(name, years, sex, interests){
    this._name = name;
    this._years = years;
    this._sex= sex;
    this._interests= interests;
    this.toString = function(){
        return `Человек: ${this._name}. Возраст: ${this._years} лет. Пол: ${this._sex}. Интересы: ${this._interests}.`
        }
    };
    
function Student(name, years, sex, interests, university){
    Person.call(this,name, years, sex, interests);
    this._university = university;
    this.toString = function(){
        return `Человек: ${this._name}. Возраст: ${this._years} лет. Пол: ${this._sex}. Интересы: ${this._interests}. Обучается в ${this._university}.`
        }
};
    
var petr= new Person("Иван",25,"м",["музыка", "программирование"] );
console.log(petr.toString());
var petr_student = new Student("Иван",25,"м",["музыка", "программирование"],"ИТМО" );
console.log(petr_student.toString());   

}());