'use struct';
console.log("in side task01.js");
/*
1. Используя прототипы:
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
- Вернуть количество товара.    
*/
;(function(){
    
// TODO:  переменные можно объявить в prototype ... но при функции 
//        без параметров func() -> если func(a, b) передать параметры пока не удалось 
function Product(name, price){
     this.name= name;
     this.price = price;
    };
Product.prototype = {
    constructor: Product,
    };

//----------
function Basket(){
    this.products=[];
    this.amount=0;
    this.sum=0;
    var that = this;
    
    var name_tmp, price_tmp, p;
    for(var i=0; i< arguments.length; i++){
        name_tmp=arguments[i].name;
        price_tmp =arguments[i].price;
        p = new Product(name_tmp, price_tmp);
        this.products.push(p);
        };
};
// TODO: проблема с сделать private переменные у Basket ...
Basket.prototype = {
    constructor: Basket,
    add: function(name, price){
             var p = new Product(name, price);
             this.products.push(p);
            },
    get_sum: function(){
            this.sum = 0;
            for(var i=0; i< this.products.length; i++){
                this.sum += this.products[i].price;
                }
            return this.sum;
            },
     get_amount: function(){
            this.amount = this.products.length;
            return this.amount;
            },
     print_products: function(){
         for(var i=0; i<this.products.length; i++){
             console.log(this.products[i].name, this.products[i].price);
         }
      }
}
//---------------------------------------------------
    
var product1 = new Product("батон", 30);
var product2 = new Product("хлеб", 34);
var product3 = new Product("кефир", 10);

var basket = new Basket(product1, product2, product3);
console.log(basket);
var basketValue;
for(var propName in basket) {
    //basketValue = basket[propName];
    //console.log(propName, basketValue);
    console.log("basket: public methods  " + propName)
}
    
console.log("сумма "+basket.get_sum());
console.log("количество "+basket.get_amount());
    
console.log(typeof basket);
console.log(basket instanceof Object);
console.log(basket instanceof Basket);
    
basket.add("батон", 30);
basket.add("хлеб", 34);
basket.add("кефир", 10);
//console.log("сумма "+basket.get_sum());
//console.log("количество "+basket.get_amount());
    
// basket.print_products();
}());