'use script'
// 1. Создать шаблон объектов «Товар».
// Свойства товара «Имя» и «Цена».
// Создать шаблон объектов «Корзина товаров». 
// Приватные свойства объекта:
// - Массив товаров;
// - Количество товаров;
// - Сумма товаров.
// Методы объекта:
// - Добавить товар;
// - Вернуть сумму товара;
// - Вернуть количество товара.

function Good(name, price) {
	this.name = name;
	this.price = price;
}

function Basket() {
	var basket = [];
	var goodsCount;
	var total = 0;

	this.setBasket = function(obj) {
		basket.push(obj);
		goodsCount = basket.length;
		total = total + obj.price;
	}

	this.getTotal = function() {
		return 'Всего товаров на сумму: ' + total;
	}

	this.getSumm = function() {
		return 'Количество товаров: ' + goodsCount;
	}
}
var good1 = new Good('Холодильник', 15000);
var good2 = new Good('Плита', 20000);
var newBasket = new Basket();
newBasket.setBasket(good1);
newBasket.setBasket(good2);
console.log(newBasket.getTotal());
console.log(newBasket.getSumm());

// 2. Создать шаблон объектов «Человек».
// Свойства «Имя», «Возраст», «Пол», «Интересы».
// Метод преобразования к строке вида: «Человек: 
// Иван. Возраст: 25 лет. Пол: м. Интересы: 
// музыка, программирование.»
// Создать шаблон объектов «Студент».
// Свойства от наследованные от шаблона объектов 
// «Человек» и добавить «Институт».
// Переопределить метод преобразования к строке 
// вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
// Интересы: музыка, программирование. 
// Обучается в ИТМО.»

function Human(name, age, gender, hobby) {

	this.toString = function() {
		return 'Human: ' + name + ' Age: ' + age + ' Gender: ' + gender + ' Hobby: ' + hobby; 
	}
}

var man = new Human('Иван', '24 года', 'м', 'музыка, программирование');
console.log(man.toString());

function Student(name, age, gender, hobby, institut) {
	Human.call(this);
	this.institut = institut;
	this.toString = function() {
		return 'Human: ' + name + ' Age: ' + age + 
		' Gender: ' + gender + ' Hobby: ' + hobby + ' University: ' + institut; 
	}
}

var student = new Student('Иван', '24 года', 'м', 'музыка, программирование', 'обучается в ИТМО');
console.log(student.toString());

// 3. Создать шаблон объектов «Пользователь».
// Метод преобразования к строке выводит имя пользователя.
// Два фабричных метода:
// - «Создать анонимного пользователя» не получает аргументов,
//  в качества имя пользователя устанавливает «Аноним».
// - «Создать пользователя из данных» в качества аргументов 
// получает объект с именем и возрастом пользователя.   

function User(name) {
	this.toString = function() {
		return this.name;
	}
}

User.anon = function() {
	var anon = new User();
	anon.name = 'Anonim'
	return anon;
}

var objUser = {
	name: 'Вася',
	age: '31 год'
}

User.user1 = function(obj) {
	var man = new User();
	man.name = obj.name;
	man.age = obj.age;
	this.toString = function() {
		return 'Human: ' + man.name + ' Age: ' + man.age;
	}
}

var anonim = new User.anon();
var man = new User.user1(objUser);
console.log(anonim.toString())
console.log(man.toString())

