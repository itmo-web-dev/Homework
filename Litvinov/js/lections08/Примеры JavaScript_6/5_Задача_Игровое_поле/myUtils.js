;(function(){
	//Функция генерации числа игрового поля
	function getRandomNumber(arr){
		var randomIndex = getRandomNamberInInterval(0, arr.length - 1);
		return arr.splice(randomIndex, 1)[0];
	}

	//Функция генерация числа в заданном интервале
	function getRandomNamberInInterval(min, max){
		return Math.round(Math.random()*(max - min) + min);
	}
	
	//Функция генерации стиля
	function getRandomStyle(){
		return 'font-size:' + getRandomNamberInInterval(15, 35) + ';color:' + getRandomColor() + ';';
	} 
	
	//Функция генерации цвета текста
	function getRandomColor(){
		return 'rgb('+ getRandomNamberInInterval(0,255) + ',' + getRandomNamberInInterval(0,255) + ','
			+ getRandomNamberInInterval(0,255) +')';
	}
	
	window.myUtils = {
		//Функция создания игрового поля
		createGamePlace:function(n){
			//Формируем массив чисел для наполнения таблицы чисел
			var arrNumbers = [];
			for(var i = 1; i <= n*n; i++){
				arrNumbers.push(i);
			}
			//Создаем игровое поле (i-тая строка, j-столбец)
			var html = '';
			for(var i = 0; i < n; i++){
				var newTr = "<table><tbody><tr>";
				for(var j = 0; j < n; j++){
					newTr += "<td style=\"" + getRandomStyle() + "\">" + getRandomNumber(arrNumbers) + "</td>";		
				}
				newTr += "</tr></tbody></table>";
				html += newTr;
			}
			
			return html;
		}		
	};	
}());