/*console.log('Массивы') // для хранения коллекций данных
// можно хранить любые данные. числа. строки итд

var arr = [];

var arr2 = [1, 2, 6,
			'user1',
			'user4',
			null,
			[4, 8, 12],
			true];

var pictures = ['forest', 'sky', 'ocean'];

var forest = pictures[0];
console.log(forest);
 
pictures[1] = 'river';

pictures[3] = 'winter';

console.log(pictures);

var picturesLength = pictures.length;
console.log(picturesLength);


// методы массивов

var a = pictures.pop(); // работают с концом массива
console.log(a);
console.log(pictures);

pictures.push('spring');// работают с концом массива
console.log(pictures);

var b = pictures.shift();// работают с началом массива удаляет
console.log(b);
console.log(pictures);

pictures.unshift('flowers');// работают с началом массива добавляет
console.log(pictures);

// метод .split() метод строки

var str = 'Very, long, string';
var arr = str.split(','); // (',')  это аргумент
console.log(arr);

pictures = ['forest', 'sky', 'ocean'];
var str = pictures.join(', ');
console.log(str);


// метод .reverse()

console.log(pictures);

pictures = pictures.reverse();
console.log(pictures);

// метод splice() может удалять-вставлять-заменять

pictures.splice(1, 2, 'newElement'); // 1 с какого элемента удалять. 2 - сколько элементов удалять
console.log(pictures);

// метод .slice(нач, кон)
var newArr = pictures.slice(1, 3);
console.log(newArr);

// .indexOf()
pictures = ['forest', 'sky', 'ocean', 'forest'];

var b = pictures.indexOf('river');
console.log(b);

// .lastIndexOf()

var c = pictures.lastIndexOf('forest');
console.log(c);

*/


// pictures = ['forest', 'sky', 'ocean', 'forest'];
	
// for (var i = 0; i < pictures.length; i++) {
// 	console.log('Элемент массива №', i, pictures[i]);
// }

// pictures.length = 2;
// console.log(pictures); // длинна массива =  индекс последнего элемента + 1

// // многомерные массивы

// var matrix = [
// 	[1, 2, 3],
// 	[6, 8, 10],
// 	[13, 0, 2]
// ]

