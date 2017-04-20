'use struct';
console.log("in side task01.js");
/*
1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.    
*/
;(function(){
    
function Product(name, price){
    this.name = name;
    this.price= price;
    };

    
function Basket(){
    this.products=[];
    this.amount=0;
    this.sum=0;
    this.add =function(name, price){
             var p = new Product(name, price);
             this.products.push(p);
            };
    this.get_sum = function(){
            this.sum = 0;
            for(var i=0; i<this.products.length; i++){
                this.sum += this.products[i].price;
                }
            return this.sum;
            };
     this.get_amount = function(){
            this.amount = this.products.length;
            return this.amount;
            };
     this.print_products = function(){
         for(var i=0; i<this.products.length; i++){
             console.log(this.products[i].name, this.products[i].price);
         }
     }
    for(var i=0; i<arguments.length; i++){
        var name_tmp=arguments[i].name;
        var price_tmp =arguments[i].price;
        this.add(name_tmp, price_tmp);
    };
};
//---------------------------------------------------
    
var product1 = new Product("батон", 30);
var product2 = new Product("хлеб", 34);
var product3 = new Product("кефир", 10);

var basket = new Basket(product1, product2, product3);
console.log("сумма "+basket.get_sum());
console.log("количество "+basket.get_amount());
    
console.log(typeof basket);
console.log(basket instanceof Object);
console.log(basket instanceof Basket);
    
basket.add("батон", 30);
basket.add("хлеб", 34);
basket.add("кефир", 10);
console.log("сумма "+basket.get_sum());
console.log("количество "+basket.get_amount());
    
// basket.print_products();
}());