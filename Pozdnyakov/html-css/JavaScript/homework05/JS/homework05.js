(function() { 
'use strict'; 

console.log('Задачки');

//Объекты: 
//
//1 Построить объект студент:
//- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
//- метод выводящий в консоль биографическую справку в виде, например: 
//«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. 
//Учится в ИТМО.
    
    var objStudent = {
        name: 'Пётр',
        lastname: 'Петров',
        age: 21,
        interests:[
            'Художественная литература',
            'Музыка',
            'Велосипед'
                    ],
        studyPlace: 'СПБГУ',
        studentInfo: function() {
    return console.log(this.name + ' ' + this.lastname + '. ' + years(this.age) + '. ' + 'Интересы: ' + this.interests + '. ' + 'Учится в ' + this.studyPlace + '.')
}
        
    };


function years() {
    for (var i = 0; i < arguments.length; i++) {
        if ((arguments[i]%10 === 0) || (arguments[i]%5 === 0) 
           || ((arguments[i]%100 >= 11) && (arguments[i]%100 <= 19))) {
            return (arguments[i] + ' лет');
        } else if ((arguments[i]%10 >= 2) && (arguments[i]%10 <= 4)) {
            return (arguments[i] + ' года');
        } else if (arguments[i]%10 === 1) {
            return (arguments[i] + ' год');
        } else {
           return (arguments[i] + ' лет'); 
        }
    }
}    
    
console.log(objStudent.studentInfo());
    
    
//Массивы, циклы, условия:
//
//2 Заданы два массива A и B необходимо их объединить 
//в один массив C так, чтобы в массиве остались уникальные 
//(неповторяющиеся) элементы. 
//Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].
    
var a = [1, 2, 5, 7, 0, 32, 111, 11];
    
var b = [1, 2, 3, 0, 9, 111, 10];
    
var c;

console.log('Массив а: ' + a);

console.log('Массив b: ' + b);
    
    
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            a.splice(i, 1);
        };
    }
}

c = a.concat(b);
console.log('Объеденённый масив с: ' + c);
    
//Функции:
//
//3 Задан массив целых чисел. Написать функцию filter. 
//Функция filter получает в качестве аргументов исходный 
//массив и функцию предикат проверяющую является ли число 
//отрицательным (предикат – функция, которая возвращает 
//истину или ложь). Функция filter используя предикат 
//позволяет сформировать и вернуть новый массив, в который 
//вошли все отрицательные элементы исходного массива.    
 

function negative(count) { //Функция предикат
    return (count < 0);
};
    
var arr1 = [1, 2, 90, -20, 2, -65, -9]     
    
function filter(predicate, arr) {
    let working = [];
    for (let item of arr) {
        if (predicate(item)) {
            working = working.concat(item);
        }
    }
    return working;
}
    
var newArr =  filter(negative, arr1);
    
var easyArr = arr1.filter(negative);  // С помощью стандартного метода filter  

console.log(newArr);    
console.log(easyArr);    
    
} ());