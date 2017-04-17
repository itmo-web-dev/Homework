// comment

// console.log('Урок 1')

// var name; // объявление переменной
// name = "Ivan"  // присваивание переменной значения

// var userName;
// userName = name;

// console.log(userName);

var num = 2; // числовой тип данных

var str = "string" // строка

var boo = true; // false тип boolean

var arr = [1, 2, 3]; // тип данных объект

var nl = null; // ничего

var und = undefined; // значение переменной не присвоено

console.log(typeof(boo) ) // узнать тип переменных

// логические операторы
// && - u
// || - uлu 
// ! - ne

// if (условие) {
// 	код
// } else {
// 	код
// }

// if (условие) {
// 	код
// } else if (условие){
// 	код
// }

// var a, b;
// a = 3;
// b = "string";
// var boo = true;

// if (typeof(b) === 'string') {
// 	console.log(a + b)
// } else {
// 	console.log(b)
// }

// if ((a != b) || (boo)) {
// 	console.log(a + b)
// } else {
// 	console.log(b)
// }

// var answer;
// answer = prompt('Введите число');
// console.log(answer);

// answer = parseInt(answer); // делаем тип "число""

// 	// parseFloat("24.76") приведение к дробному числу

// console.log(typeof(answer));

// // или так

// // var answer = prompt('Введите число');
// // console.log(answer);

// var numb = 67;

// numb.toString(); // переводит число в строчку




// запрос логина
// если пользователь вводит "admin" -> запрос пароля: (123)
// если иначе, выводит в консоль "неверный логин"

/*var login, pwd;

login = prompt("Enter login");

if (login === 'admin') {
	pwd = prompt('Enter password')
	if (pwd === '123') {
		document.write('Welcome')
	} else {
		// console.log('Try again')
		document.write('Try again')
	}

} else {
	// console.log('Bad login')
	// document.write('Bad login')
	alert('Try again')
}
*/
// тернальный оператор

// (условие) ? (если тру), то поялвляется код1, (если фалсе), то код2

// var login, pwd;

// login = prompt("Enter login");

// (login === 'admin') ? document.write('OK')
// 					: alert('Bad login')



// var n = 9;
// n = n + 1 // n += 1

// //

// var i = 1;
// i++; // i = i + 1

// var j = 7;
// j--; // j = j -1;

// // префиксная форма
// var i = 1;
// var a = ++i;

// console.log(a); // 2

// //постфиксная форма

// var j = 1;
// var b = j++;

// console.log(1); // 1

// // цикл с предусловием while

// // while(условие) {
// // 	код (тело цикла);
// // }

// var pictures = 5;
// while (pictures) {
// 	pictures--;
// 	console.log(pictures);
// }

// цикл с постусловием while

// do {
// 	код (тело цикла)
// } while (условие)

// var users = 7;
// do {
// 	console.log(users);
// 	users--;
// } while (users)

// // break 

// var users = 7;
// do {
// 	console.log(users);
// 	if (users === 3) break;
// 	users--;
// } while (users)

// break 
// задать кол-во тарелок и кол-во моющего ср-ва. 
// ср-во расходуется из расчета 0,5 на одну тарелку

// в цикле выводить сколько моющ ср-ва осталось, 
// когда мой ср-во или тарелки закончатся,
// выйти из цикла

// в конце вывести, сколько осталось
// тарелок или ср-ва

// var tarelki = 30;
// var fairy = 30;

// while (tarelki || fairy) {
// 	tarelki--;
// 	fairy = fairy - 0.5;
// 	if (tarelki <= 0 || fairy <= 0) break;
// 	console.log('fairy = ' + fairy);
// }

// console.log('fairy = ' + fairy, 
// 			'tarelki = ' + tarelki);


// for 
// for (начало; условие; шаг) {
// 	код (тело цикла)
// }

/*var summ = 0;
for (var i = 0; i < 5; i++) {
	summ = summ + i;
	console.log(summ);  // 0, 1, 3
}

console.log(summ);
*/

/*
создать таблицу соответствие между весом в фунтах
и весом в кг для значений от 1 до 10з

1 фунт = 453 грамма 
*/

/*
var funt = 1;
var kg;
for (funt; funt < 11; funt++) {
	kg = funt * 0.453
	console.log(funt + 'фунт = ' + 
		kg.toFixed(3) + 'кг');
}
*/

// continue 

for (var i = 0; i < 10; i++) {
	if (i%2 === 0) continue;
	console.log(i);
}