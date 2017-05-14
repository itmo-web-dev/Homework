'use string';

/*
//Primer Prototipy
		function Storage() {
			this.store = [];
		}
		
		Storage.prototype.set = function(key, value) {
			this.store[key] = value;
		};
		
		Storage.prototype.get = function(key){
			if(!key) return;
			return this.store[key];
		};
		
		storage = new Storage();		
		storage.set("Privetstvie", "Privet mir");
		alert(storage.get("Privetstvie"));

//Primer Dobavlenie novyh metodov k uzhe sozdannym obektam

		function Storage() {
			this.store = [];
		}
		
		var storage = new Storage();
		
		Storage.prototype.set = function(key, value) {
			this.store[key] = value;
		};
		
		Storage.prototype.get = function(key){
			if(!key) return;
			return this.store[key];
		};		
				
		storage.set("Privetstvie", "Privet mir");
		alert(storage.get("Privetstvie"));

//Primer Sravnenie (privatnyh svojstv net, oni nachinajutsja s _)
		function Storage() {
			this._store = [];
		}
		
		Storage.prototype.set = function(key, value) {
			this.store[key] = value;
		};
		
		Storage.prototype.get = function(key){
			if(!key) return;
			return this.store[key];
		};
		
		storage = new Storage();		
		storage.set("Privetstvie", "Privet mir");
		alert(storage.get("Privetstvie"));

//Primer Nasledovanie v prototipnom stile
		function Shape(centerX, centerY){
			this.centerX = centerX;
			this.centerY = centerY;
		}
		
		Shape.prototype.toString = function(){
			return "Koordinaty centra " + this.centerX + ":" + this.centerY;
		}
		
		var shape = new Shape(10, 10);
		console.log("Jekzempljar Shape " + shape);

		function Circle(centerX, centerY, radius){
			this.centerX = centerX;
			this.centerY = centerY;
			this.radius = radius;
			this.toString = function(){
				return (Circle.prototype.__proto__.toString.call(this)) + " Radius " + this.radius;
			}
		} 
		
		Circle.prototype.__proto__ = Shape.prototype;
		
		var circle = new Circle(20, 20, 10);
		console.log("Jekzempljar Circle " + circle);

//Primer Smeshennogo naslezhovanija
		function Shape(centerX, centerY){
			this.centerX = centerX;
			this.centerY = centerY;
		}
		
		Shape.prototype.toString = function(){
			return "Koordinaty centra " + this.centerX + ":" + this.centerY;
		}
		
		var shape = new Shape(10, 10);
		console.log("Jekzempljar Shape " + shape);

		function Circle(centerX, centerY, radius){
			Shape.call(this, centerX, centerY);
			this.radius = radius;
		}

		Circle.prototype.toString = function(){
			return "Koordinaty centra " + this.centerX + ":" + this.centerY + " Radius " + this.radius;
		}
		
		Circle.prototype.__proto__ = Shape.prototype;
		
		var circle = new Circle(20, 20, 10);
		console.log("Jekzempljar Circle " + circle);
*/


// var a = 100;
// console.dir(a);

// a.b = 1000;
// console.dir(a.b);

// var a = [];

// var str = "";
// str.__proto__

// var a = function() {}
// a.__proto__

// var a = new Number();
// var b = new function();
// var v = new Array();
// Array.prototype.clone = function(){alert(this)};
// var a = [];