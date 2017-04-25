;(function(){
	//Массив для хранения div-ов
		var previusDivId = "red";
		
		function changeLights() {
			//Текущий горящий семофор
			var currentDivOn = 
				document.querySelectorAll('#conteiner > div.on')[0];
			//Переменная для хранения следующего зажигаемого семофора
			var nextLightsDivId;
			switch (previusDivId + ':' + currentDivOn.id){
				case 'red:yellow':
					nextLightsDivId = "green";
					break;
				case 'green:yellow':
					nextLightsDivId = "red";
					break;
				case 'yellow:red':
				case 'yellow:green':
					nextLightsDivId = "yellow";
			}
			currentDivOn.classList.remove('on');
			previusDivId = currentDivOn.id;
			nextLightsDiv = document.getElementById(nextLightsDivId);
			nextLightsDiv.classList.add('on');
		}
		
		setInterval(changeLights, 2000);	
}());