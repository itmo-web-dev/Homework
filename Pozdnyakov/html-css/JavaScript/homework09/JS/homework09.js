(function () {
    'use strict';

    console.log('Задачки');

    /*1. Создать шаблон объектов «Товар».
    Свойства товара «Имя» и «Цена».
    Создать шаблон объектов «Корзина товаров». 
    Приватные свойства объекта:
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

    function basket() {
        this.arrayOfGoods = [];
        this.qntyGoods = 0;
        this.sumnGoods = 0;
        this.setGood = function (objGood) {
            this.arrayOfGoods.push(objGood);
            this.qntyGoods = this.qntyGoods + 1;
            this.sumnGoods = this.sumnGoods + objGood.price;
        };
        this.getSumGoods = function () {
            return 'Товаров в корзине на сумму: ' + this.sumnGoods;
        };
        this.getQntyGoods = function () {
            return 'Количество товаров в корзине: ' + this.qntyGoods;
        };
    }

    var good1 = new Good('product1', 500); // Первый товар
    var good2 = new Good('product2', 2000); // Второй товар 
    var basket1 = new basket(); //Корзина
    basket1.setGood(good1); // Добавляем 1-ый товар в корзину
    console.log(basket1.getSumGoods()); // На какую сумму товаров в корзине
    console.log(basket1.getQntyGoods()); // Количество товаров в корзине
    basket1.setGood(good2); // Добавляем 2-ой товар в корзину
    console.log(basket1.getSumGoods()); // На какую сумму товаров в корзине
    console.log(basket1.getQntyGoods()); // Количество товаров в корзине

    /*2. Создать шаблон объектов «Человек».
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
    Обучается в ИТМО.»   */
    
    //Функция для корректного склонения год/года/лет и т.п.
function years() {
    for (var i = 0; i < arguments.length; i++) {
        if ((arguments[i]%10 === 0) || (arguments[i]%5 === 0) 
           || ((arguments[i]%100 >= 11) && (arguments[i]%100 <= 19))) {
            return (arguments[i] + ' лет');
        } else if ((arguments[i]%10 >= 2) && (arguments[i]%10 <= 4)) {
            return (arguments[i] + ' года');
        } else if (arguments[i]%10 === 1) {
            return (arguments[i] + ' год');
        } else {
           return (arguments[i] + ' лет'); 
        }
    }
} 
    function Human(name, age, sex, interests) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.interests = interests;
        this.toString = function () {
            return this.name + '. Возраст: ' + years(this.age) + '. Пол: ' + this.sex + '. Интересы: ' + this.interests;
        };
    }
    
    function Student(name, age, sex, interests, institut) {
        Human.call(this, name, age, sex, interests);
        this.institut = institut;
        this.toString = function () {
            return 'Студент: ' + this.name + '. Возраст: ' + years(this.age) + '. Пол: ' + this.sex + '. Интересы: ' + this.interests + '. Обучается в ' + this.institut + '.';
        };
    }

    var Human01 = new Human('Варвара', 21, 'ж', 'велосипед, кино');
    console.log(Human01.toString());
    var Student01 = new Student('Евгений', 23, 'м', 'сноуборд, черчение', 'ПГУПС');
    console.log(Student01.toString());
    
/*    3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя. */
    
   var objSimpleUser = {
        name: 'Пётр',
        age: 21
   }
    
    function User() {
        this.toString = function() {
            return this.name;
        }
    }
    
    User.anonim = function(){
        var user = new User();
        user.name = "Аноним";
        return user;
    }
    
    User.fromObj = function(data){
        var user = new User();
        user.name = data.name;
        return user;
    }
    
    var anonim = new User.anonim();
    var user01 = new User.fromObj(objSimpleUser);
    console.log(anonim.toString());
    console.log(user01.toString());
    
}());