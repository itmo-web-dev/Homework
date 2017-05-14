'use strict';

// var person;
// var human = {
//    name:'Vano',
//    age:25,
//    sex:'male',
//    interests: ['music', 'programming']
// }
// human.work = function () {
//    document.write(this.name+' is working.<br />');
//    var a=true;
//    return a;
// }
// human.travel = function () {
//    document.write(this.name+' is traveling.<br />');
//    person=true;
// }
// human.think = function () {
//    if (person==true)
//       document.write(this.name+' think, that he is a dog.<br />');
//    else 
//      document.write(this.name+' sometimes he feels like a butterfly.<br />');
// }
// human.about= function () {
//   document.write('Obgect name is <b>'+this.name+'</b>, his sex <b>'+this.sex+'</b> and he is <b>'+this.age+'</b> years old.');
// }
// human.work();
// human.think();
// human.travel();
// human.think();
// human.about();


//////////////////////////////// ЗАДАЧА № 2
var vaynti = {
	name: 'Veniamin',
	age: 35,
	sex: 'male',
	interests:['music', 'programming']
}

function Bounty(name, age, sex, interests) {
	this._name = name;
	this._age = age;
	this._sex = sex;
	this._interests = interests;
	this.toString = function () {
           return this._name + '. Возраст: ' + this._age + '. Пол: ' + this._sex + '. Интересы: ' + this._interests;
        };
};
// Bounty.isBounty = function(obj, name, age, sex, interests) {
// 	if(!Bounty.prototype.isPrototypeOf(obj)) {
// 		return false;
// 	}
// 	return name ? obj.name === name : true;


function Student(name, age, sex, interests, university) {
	Bounty.call(this, name, age, sex, interests);
	this.university = university;
	this.toString = function(){
    return 'Student: ' + this.name + '. Age: ' + this.age + '. Sex: ' + this.sex + '. Interests: ' + this.interests + '. Studies in ' + this.university + '.';
    };
};
// Object.setPrototypeOf(Student.prototype, Bounty.prototype);
// Student.prototype.name = function() {
// 	console.log(this.name + 'something');
// };
// Student.prototype.age = function () {
// 	console.log('something' + this.age + ' is' + this.sex);
// };
// Student.isStudent = function(obj) {
// 	return Bounty.isBounty(obj, 'student');
// };

var Leo = new Bounty('Leo', 22, 'male', 'cinema, music');
console.log(Leo.toString());

var Kot = new Student('Kot', 4, 'male', 'eat, sleep');
console.log(Kot.toString());




//////////////////////////////////ЗАДАЧА № 3

var milkyWay = {
	name: 'Panteleymon',
	age: 69
}

function User() {
	this.toString = function() {
		return this.name;
	}
}
User.anonim = function() {
	var user = new User();
	user.name = 'Anonim';
	return user;
}

User.createUser = function(name, age) {
	var user = new User();
	user.name = name;
	user.age = age;
	return user;
}

var anonim = new User.anonim();
var user1 = new User.createUser(milkyWay);

console.log(anonim.toString());
console.log(user1.toString());


