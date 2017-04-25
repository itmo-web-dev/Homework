'use strict';

// var storage = {
// 	store: [],
// 	set: function(key, value) {
// 		this.store[key] = value;
// 	},
// 	get: function(key) {
// 		if(!key) return;
// 		return this.store[key];
// 	}
// }
// storage.set('name', 'Peter');
// storage.get('name');

// /////////

// function Storage() {
// 	this.store = [];
// 	this.set = function (key, value) {
// 		this.store[key] = value;
// 	};
// 	this.get = function(key) {
// 		return this.store[key];
// 	};
// }

// var store1 = new Storage();
// store1.set('name', 'Peter');
// var store2 = new Storage();

// //////добавление новых свойст и методов

// Storage.type = 'digit';
// Storage.maxSize = 100;
// Storage.setMaxSize = function (value) {
// 	this.maxSize = value;
// };// если в этом примере не выполнить newStorage,
// //эти свойства и методы не будут частью шаблона



// //////создание объектов в конструкторах 

// function Storage(max) {
// 	this.store = [];
// 	this.set = function (key, value) {
// 		this.store[key] = value;
// 	};
// 	this.get = function (key) {
// 		return this.store[key];
// 	}
// }
// var hub = new Storage(20);
// hub.set('name', 'Peter');
// hub.maxSize;


// /////////////////////////приватные переменныевнутри объекта

// function Storage(max) {
// 	this.store = [];
// 	this.set = function (key, value) {
// 		this.store[key] = value;
// 	};
// 	this.get = function (key) {
// 		return this.store[key];
// 	};
// };
// var db = new Storage();
// db.store;
// db.set('name', 'Peter');

////////преобразование объектов toString

// function User(firstName, lastName, age) {
// 	this.toString = function() {
// 		return firstName + '' + lastName;
// 	};
// 	this.valueOf = function() {
// 		return age;
// 	};
// }
// var user = new User("ivan", "ivanov", 19);
// alert(user);
// alert("совершеннолетний юзер" + (user >= 18?"да":"нет"));


// /////////////явное указание this

// var funMin = Math.min;
// funMin.apply(null, [1, 2, 3]); // 1

//////привязка контекста
//.bind(this);









////////////////ITERATORRRRR////////

; (function() {
	window.Iterator = function(min, max) {
		this._from = min;
		this._to = max;
		this._increment = function() {
			if (this._from < this._to) {
				this._from++;
			} else if (this._to < this._from) {
				this._from--;
			} 
			return this._from;
		};		
	};
}());
		
; (function() {
	window.AnimateText = function (div, min, max) {
		Iterator.call(this, min, max);
		this._div = div;
		this.tick = function() {
			if (this._from != this._to) {
				this._increment();
				this._render();
			} 
			return this._from;
		}
		this._render = function () {
			this._div.innerHTML = 'Процесс загрузки ' + this._from + '%';
		}
	}
}());

; (function() {
	window.ShaderAnimateText = function(obj) {
		AnimateText.call(this, div, min, max);
		this.colorFrom = obj.cFrom;
		this.colorTo = obj.cTo;
		var rgbFrom = `rgb(${obj.cFrom.r}, ${obj.cFrom.g}, ${obj.cFrom.b} )`;
		var rgbTo = `rgb(${obj.cTo.r}, ${obj.cTo.g}, ${obj.cTo.b} )`;
		
		setInterval(function(){
			obj.el.style.backgroundColor = rgbFrom;
			obj.cFrom.r++;
			}, 100);
		console.log(rgbFrom);
		return rgbFrom;
	}

}());