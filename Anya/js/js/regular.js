// (function ()){

'use strict';

// var str = prompt('введите слово', '');

// var vowel = ['а', 'я', 'о', 'ё', 'у', 'ю', 'и', 'э', 'ы', 'е'];
// var count = 0; 
// for (var i = 0; i < str.length; i++) {
// 	for (var j = 0; j < vowel.length; j++) {
// 		if(str[i]=== vowel[j]) {
// 			count++;
// 		};
// 	};
// };

// console.log(count);
// }());


/// регулярные выражения. валидация

// var regexp = new RegularExpression('', 'i g m');
// regexp = /*шаблон*/ igm;

// var str = "Я люблю JavaScript";
// var regExp = /Ja/;
// str.search(regExp);

// j --- ищет все варианты


// var str = "Ой-ой-ой";
// var regExp = /ой/ig;
// str.match(regExp);
// console.log(str.match(regExp));


// var str = "Ой.\n-ой.\n-ой.\n";
// var regExp = /ой/igm;
// str.match(regExp); 
// console.log(str.match(regExp));


// /о/i.test(str);


// var str = "Привет мир";
// "Привет мир"
// str.split('');
// console.log(str.split(''));

// var str = "Саша + Маша = Паша + Даша";
// regExp = /.аша/g;
// /.аша/g
// str.match(regExp);
// console.log(str.match(regExp));

// var str = "Саша + Маша = Паша + Даша";
// str.match(/[МПД]аша/ig);

// var str = "Саша + Маша = Паша + Даша";
// str.match(/[^0-9]/ig);

// var str = "Саша + Маша = Паша + Даша";
// str.match(/[^0-9 D-G]/ig);

// var str = "Саша + Маша = Паша + Даша";
// str.match(/[а-я А-Я 0-9_]/ig);

// var str = "Саша + Маша = Паша + Даша";
// str.match(/\w/ig);



// \b --- границы слов. последняя и первая буквы
// \w [^0-9]
// \s пробельный символ включая табы
// /^/ начало строки
// \d цифра
// \D не цифра
// d+ сколько символов идет, столько и заберет до пробела
//[a-z]* сколько угодно символов

// var str = "My name is Anna";
// str.match(/\b\w/g);
// console.log(str.match(/\b\w/g));

// var str = "My name is Anna";
// str.match(/\b\w/g);
// console.log(str.match(/\b\w\w\w\w/g));

// var str = "My name is Anna";
// str.match(/(My|name|is) /g);
// console.log(str.match(/(My|name|is) /g));

// var str = "My name \nis Anna";
// str.match(/^./igm);
// console.log(str.match(/^./igm));

// var str = "My name \nis Anna";
// str.match(/.$/igm);
// console.log(str.match(/.$/igm));

// var str = "15000 money"
// str.match(/[\d]/g);
// console.log(str.match(/[\d]/g));

// var str = "15000 рублей"
// str.match(/[\W]/g);
// console.log(str.match(/[\W]/g));

// var str = "15000 money"
// str.match(/[\d]/g);
// console.log(str.match(/\d{1,5}/g));

// var str = "15000 money"
// str.match(/[\d]/g);
// console.log(str.match(/\d{2}/g));

// var str = "15000 money"
// str.match(/[\d]/g);
// console.log(str.match(/\d{2,3}/g));

// var str = "Привет. Приветик"
// str.match(/[а-яА-Я{6}и?к?]/g);
// console.log(str.match(/[а-яА-Я{6}и?к?]/g));

// var str = "100 10 1"
// str.match(/\d0*/g);
// console.log(str.match(/\d0*/g));

// var str = "100 10 1"
// str.match(/\d0?/g);
// console.log(str.match(/\d0?/g));

// var str = "100 10 1"
// str.match(/\d00?/g);
// console.log(str.match(/\d00?/g));

// var str = "100 10 1"
// str.match(/\b\d0?\b/g);
// console.log(str.match(/\b\d0?\b/g));

// var str = "18 +";
// str.match(/\d\+/g);
// console.log(str.match(/\d\+/g));

var reg = prompt('введите номер формата х (ххх) ххх-хх-хх', '');
var result = /\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}/ig.test(reg);
console.log(result);

