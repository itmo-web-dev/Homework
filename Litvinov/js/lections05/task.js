"use strict";
console.log("lection 5");

var obj = {
    name: "carrot",
    color: "orange", 
    someparam: {
      task1: 2,
      task2: 3
    }
}
console.log(obj);
console.log(obj["name"]);
console.log(obj["someparam"]["task1"]);

for(var i in obj){
    console.log("-- "+i);
    console.log(obj[i]);
}

var a=[5,6,7,8,9];
a.name = "carrot";
console.log(a.length);

var a=[(function(){return 10*4})(), 5];
// (a,b)=>{return a+b}
//var a=[((4,50)=>{return a+b}), 5];
// TODO: короткая запись функции
console.log(a);

var admin={
    login: "root",
    password: "111",
    }
console.log(admin["login"]);
console.log(admin["type"]);

console.log(Math.abs(-1));
console.log(Math.round(1.4));
console.log(Math.round(1.6));
console.log(Math.random());

var min=10, max=50;
var cmd = Math.floor(Math.random()+(max-min+1))+min;
console.log(cmd);

Math.min(1,2,3);
var arr = [1, 2, 4, 4]
console.log(Math.max(...arr))

console.log(Date());
var t = Date(2017,4,8)
console.log(t);
console.log(Date(1));