/*Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. 
Учится в ИТМО.*/
var student = {
	name: 'Soso',
	surname: 'Pavliashvillie',
	age: 34,
	hobbies: ['alcohol', 'sex', 'rock&roll music'],
	studPlace: 'Streets of Getto'
};
var hobbArr = student.hobbies.join(', ');
console.log('Personal data of agent: //' + student.name + ' ' + student.surname + '\n' + 
	'Age: //' + student.age + ' years old \n' + 'Spec in: //' + hobbArr + '\n' + 
	'Studied at: //' + student.studPlace);
/*Заданы два массива A и B необходимо их объединить 
в один массив C так, чтобы в массиве остались уникальные 
(неповторяющиеся) элементы. 
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].*/
var A = [1, 34, 2, 'OLOLO', 73];
var B = [98, 1, '34', 121];
var C = A.concat(B);
var res = sortir(C);
console.log(res);
function sortir(arr)
{
	var workObj = {};
	for(var i = 0; i < arr.length; i++)
	{
		var string = arr[i];
		workObj[string] = true
	}
	return Object.keys(workObj);
};
/*Задан массив целых чисел. Написать функцию filter. 
Функция filter получает в качестве аргументов исходный 
массив и функцию предикат проверяющую является ли число 
отрицательным (предикат – функция, которая возвращает 
истину или ложь). Функция filter используя предикат 
позволяет сформировать и вернуть новый массив, в который 
вошли все отрицательные элементы исходного массива.*/
var massive = [2, 3, 54, 2, -2, -53];
var result = filter(massive, predikat);
console.log(result);
function predikat(value){return (value < 0)};
function filter(array, predikat)
{
	var inProg = [];
	for(var num of array)
	{
		if (predikat(num)) inProg = inProg.concat(num);
	}
	return inProg;
};