;(function() {
	'use strict'

// Одномерным массивом задана доска 3 на 3 
// var area = [ null, null, null, null, null, null, null, null, null ]
// Необходимо сформировать игровое поле, состоящее из квадратов для крестиков-ноликов в HTML. 
// При появлении в массиве 0-ля рисовать нолик , 1-цы крестик. 
// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
// Для вывода html поля использовать document.write(). Код генерации html поля 
// вынести в отдельную функцию в отдельный подключаемый js модуль.

var area = [null, 1, null, 0, null, null, 0, null, 1]
function  XO(i) {	
		var mark = area[i];
		if (mark == 1) {
			return 'X';
		} if (mark == 0) {
			return 'O';
		} if (mark == null) {
			return '--';  
		}  
	}

function elementIndex (i, j) {
            if (i === 0 && j ===0) return 0;
            if (i === 0 && j ===1) return 1;
            if (i === 0 && j ===2) return 2;
            if (i === 1 && j ===0) return 3;
            if (i === 1 && j ===1) return 4;
            if (i === 1 && j ===2) return 5;
            if (i === 2 && j ===0) return 6;
            if (i === 2 && j ===1) return 7;
            if (i === 2 && j ===2) return 8;
        }; 

window.TicTacToe = function() {
	var str = '<table><tbody>';
	for (var i=0; i<3;i++){
		str = str + '<tr>';
		for (var j=0; j<3; j++) {
			str = str + '<td>'+XO(i*3+j)+'</td>';
		} str = str + '</tr>';

	} str = str + '</table></tbody>';
	return str;
} 

}());
