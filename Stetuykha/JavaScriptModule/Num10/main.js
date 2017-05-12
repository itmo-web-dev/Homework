(function () {
    'use strict';
    /*1. Используя прототипы:
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Cвойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/
function Good(name, price) {
    this.name = name;
    this.price = price;
}

function Basket() {
    this.arrayOfGoods = [];
    this.qntyGoods = 0;
    this.sumnGoods = 0;
}

Basket.prototype.setGood = function (objGood) {
    this.arrayOfGoods.push(objGood);
    this.qntyGoods = this.qntyGoods + 1;
    this.sumnGoods = this.sumnGoods + objGood.price;
}

Basket.prototype.getSumGoods = function () {
    return 'Товаров в корзине на сумму: ' + this.sumnGoods;
}

Basket.prototype.getQntyGoods = function () {
    return 'Количество товаров в корзине: ' + this.qntyGoods;
}

var good1 = new Good('product1', 500); // Первый товар
var good2 = new Good('product2', 2000); // Второй товар 
var basket1 = new Basket(); //Корзина
basket1.setGood(good1); // Добавляем 1-ый товар в корзину
console.log(basket1.getSumGoods()); // На какую сумму товаров в корзине
console.log(basket1.getQntyGoods()); // Количество товаров в корзине
basket1.setGood(good2); // Добавляем 2-ой товар в корзину
console.log(basket1.getSumGoods()); // На какую сумму товаров в корзине
console.log(basket1.getQntyGoods()); // Количество товаров в корзине

    /*2. 2. Используя смешанное наследование:
Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке вида: 
«Студент: Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование. Обучается в ИТМО.»*/
function Human(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Human.prototype.toString = function () {
        return this.name + '. Возраст: ' + this.age + '. Пол: ' + this.gender + '. Интересы: ' + this.interests;
    }


function Student(name, age, gender, interests, institut) {
    Human.call(this, name, age, gender, interests);
    this.institut = institut;
    this.toString = function () {
        return 'Студент: ' + Student.prototype.__proto__.toString.call(this) + '. Обучается в ' + this.institut + '.';
    };
}

Student.prototype.__proto__ = Human.prototype;

var Human01 = new Human('Аннэтта', 55, 'ж', 'вязание, сериалы, кино');
console.log(Human01.toString());
var Student01 = new Student('Евгений', 23, 'м', 'фрирайд,  литрбол, плавание', 'ПГУПС');
console.log(Student01.toString());
