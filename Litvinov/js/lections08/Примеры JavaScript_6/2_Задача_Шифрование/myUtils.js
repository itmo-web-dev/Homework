;(function(){
	window.myUtils = {
		//Формируем функцию для шифрования
		encryption:function (text, key){
			var secretText = ""; //Переменная для хранения защифрованного текста
			//Код сивола ключа
			var keyCode = key.charCodeAt(0);
			
			var i = 0; //Счётчик для перебоа сиволов текста
			
			while(i<text.length) {
				//Получаем код символа обычного текст
				var code = text.charCodeAt(i);
				//Шифруем код с использованием ключа
				code = code ^ keyCode;
				secretText = secretText + String.fromCharCode(code);
				i++;
			}

			return secretText;
		}		
	};	
}());