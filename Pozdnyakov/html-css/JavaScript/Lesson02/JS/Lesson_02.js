'use strict'; 

console.log('Циклы');

//var n = 9;
//n = n + 1// n += 1

//

// var i = 1;
// i++; // i = i + 1

// var j = 7;
// j--; // j = j - 1

// Префиксная форма
// var i = 1;
// var a = ++i;
//console.log(a); //2

//Постфиксная форма
// var j = 1;
// var b = j++;
// console.log(b); //1

// цикл с предусловием while
// while(условие) {
//    код (тело цикла)
//}

//var pictures = 5;
//while (pictures) {
//    pictures--;
//    console.log(pictures);
//}

////цикл с постусловием while
//do {
//    код (тело цикла)
//} while (условие)

//var users = 7;
//do {
//    console.log(users);
//      if (users === 3) brak;    
//    users--;
//} while (users);

// break 

//задать количество тарелок и количество моющего средства
//Средство расходуется из расчёта 0.5 на одну тарелку

//в цикле выводить сколько моющего средства осталось
//когда моющее средство или тарелки закончится выйти из цикла

//В конце вывести, сколько осталось тарелок или средства

//var tarelki = 20;
//var fairy = 30;
//
//while (tarelki || fairy) {
//    tarelki--;
//    fairy = fairy - 0.5;
//    if (tarelki <= 0 || fairy <= 0) break;
//    console.log('ОСталось fairy', fairy);
//}
//
//console.log('fairy = ' + fairy + ' tarelki = ' + tarelki);

    
//    for (начало; условие; шаг) {
//        код (тело цикла)
//    }

//var sumn = 0;
//for (var i = 0; i < 5; i++) {
//    sumn = sumn + i;
//    console.log(sumn);
//}
//
//console.log(sumn);

//создать таблицу соответствие между весом в фунтах и весом в киллограммах для значений от 1 до 10
//
//1 фунт = 453 грамма

//var funt = 1;
//var kg;
//
//for (funt; funt < 11; funt++) {
//    kg = funt * 0.453
//    console.log(funt + 'фунт = ' + kg.toFixed(3) + 'кг');
//}


//continue

//for (var i = 0; i < 10; i++) {
//    if (i%2 === 0) continue;
//    console.log(i);
//}
