(function () {
    'use strict';
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
        var arrayOfGoods = [];
        var qntyGoods = 0;
        var sumnGoods = 0;
        this.setGood = function (objGood) {
            arrayOfGoods.push(objGood);
            qntyGoods = qntyGoods + 1;
            sumnGoods = sumnGoods + objGood.price;
        };
        this.getSumGoods = function () {
            return 'Товаров в корзине на сумму: ' + sumnGoods;
        };
        this.getQntyGoods = function () {
            return 'Количество товаров в корзине: ' + qntyGoods;
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
    function Human(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.toString = function () {
            return this.name + '. Возраст: ' + this.age + '. Пол: ' + this.gender + '. Интересы: ' + this.interests;
        };
    }    
    function Student(name, age, gender, interests, institut) {
        Human.call(this, name, age, gender, interests);
        this.institut = institut;
        this.toString = function () {
            return 'Студент: ' + this.name + '. Возраст: ' + this.age + '. Пол: ' + this.gender + '. Интересы: ' + this.interests + '. Обучается в ' + this.institut + '.';
        };
    }
    var Human1 = new Human('Аннэтта', 55, 'ж', 'вязание, сериалы, кино');
    console.log(Human01.toString());
    var Student1 = new Student('Григорий', 21, 'м', 'маунтбайк, литрбол, плавание', 'ПГУПС');
    console.log(Student01.toString());
    
/*    3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя. */
    
   var defaultUser = {
        name: 'Коля',
        age: 25
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
    
    User.output = function(data){
        var user = new User();
        user.name = data.name;
        return user;
    }
    
    var anonim = new User.anonim();
    var user01 = new User.output(defaultUser);
    console.log(anonim.toString());
    console.log(user01.toString());
    
}());