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

var basket={
    products: [],
    amount: 0,
    sum: 0,
    add: function(name, price){
             var p = new Product(name, price);
             this.products.push(p);
            },
    get_sum: function(){
            for(var i=0; i<this.products.length; i++){
                this.sum += this.products[i].price;
                }
            return this.sum;
            },
     get_amount: function(){
            this.amount = this.products.length;
            return this.amount;
            }
};

basket.add("батон", 30);
basket.add("хлеб", 34);
basket.add("кефир", 10);
console.log("сумма "+basket.get_sum());
console.log("количество "+basket.get_amount());

}());