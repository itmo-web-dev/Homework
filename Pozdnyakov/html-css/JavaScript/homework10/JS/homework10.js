(function () {
    'use strict';

    console.log('Задачки');

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

    //Функция для корректного склонения год/года/лет и т.п.
    function years() {
        for (var i = 0; i < arguments.length; i++) {
            if ((arguments[i] % 10 === 0) || (arguments[i] % 5 === 0) ||
                ((arguments[i] % 100 >= 11) && (arguments[i] % 100 <= 19))) {
                return (arguments[i] + ' лет');
            } else if ((arguments[i] % 10 >= 2) && (arguments[i] % 10 <= 4)) {
                return (arguments[i] + ' года');
            } else if (arguments[i] % 10 === 1) {
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
    }
    
    Human.prototype.toString = function () {
            return this.name + '. Возраст: ' + years(this.age) + '. Пол: ' + this.sex + '. Интересы: ' + this.interests;
        }
    

    function Student(name, age, sex, interests, institut) {
        Human.call(this, name, age, sex, interests);
        this.institut = institut;
        this.toString = function () {
            return 'Студент: ' + Student.prototype.__proto__.toString.call(this) + '. Обучается в ' + this.institut + '.';
        };
    }
    
    Student.prototype.__proto__ = Human.prototype;

    var Human01 = new Human('Варвара', 21, 'ж', 'велосипед, кино');
    console.log(Human01.toString());
    var Student01 = new Student('Евгений', 23, 'м', 'сноуборд, черчение', 'ПГУПС');
    console.log(Student01.toString());

/*3. Задача повышенной сложности:
Дана таблица. Несколько столбцов и строк. У каждого 
столбца есть заголовок (например, №, ФИО, возраст). 
По нажатию на заголовок столбца осуществлять сортировку 
строк таблицы по значениям этого столбца. По возможности 
использовать объектно-ориентированное программирование.*/ 
   
//Решенеие позаимствовано из интернета. В коде разобрался.
    var grid = document.getElementById('grid');

    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      // Если TH -- сортируем
      sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    };

    function sortGrid(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }

      // сортировать
      rowsArray.sort(compare);

      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);

    }    

}());