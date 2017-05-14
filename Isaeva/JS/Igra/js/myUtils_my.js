	var div0 = document.getElementsByClassName('start') 
	console.log(div0)
	
	
	div0[0].onclick = function(){ 
	this.parentNode.removeChild(this); //Udaljaem div knopki "Start"
		
	var timer = document.createElement("p"); //sozdaem timer
	timer.className = "my_timer offset-8";
	document.body.appendChild(timer);
	timer.innerHTML = "00:20"
	
	function youWin() {//табличка на случай победы
		$("p").remove();
		$("div").remove();
		var getbody = document.getElementsByTagName('body');
		var divWin = document.createElement('div');
		divWin.className = 'win offset-4';
		getbody[0].appendChild(divWin);


		var winImg = document.createElement('img');
		winImg.src = 'img/youwin.png';
		divWin.appendChild(winImg);
	}
		
	function reboot(){  // перезагрузка страницы
	window.location.reload();
		}
		
	function youLoose() {//табличка на случай проигрыша
		$("p").remove();
		$("div").remove();
		var getbody = document.getElementsByTagName('body'); //

		var divFail = document.createElement('div');
		divFail.className = 'fail offset-4';
		getbody[0].appendChild(divFail);

		var textFail = document.createElement('p');
		textFail.innerHTML = 'Вы проиграли :(. Попробуйте снова.'
		divFail.appendChild(textFail);
	}
		
	function runAway() {
		var getbody = document.getElementsByTagName('body'); //табличка по истечении времени


		var divFail = document.createElement('div');
		divFail.className = 'fail offset-4';
		getbody[0].appendChild(divFail);

		var textFail = document.createElement('p');
		textFail.innerHTML = 'Время вышло:(. Попробуйте снова.'
		divFail.appendChild(textFail);
	}
		
	function startTimer() { //funksija timer

			var my_timer = document.getElementsByClassName("my_timer");
			var time = my_timer[0].innerHTML;
			var arr = time.split(":");
			var m = arr[0];
			var s = arr[1];
			if (s==0) {
				$("div").remove();
				runAway();
				setTimeout(reboot, 3000);
				return
			} else {
				s--;
			}
			if (s<10) {s = "0"+s}
		var r = document.getElementsByClassName("my_timer")
			r[0].innerHTML = m + ":" + s;

		}
		setInterval(startTimer, 1000);
		
	var gamePlace = [];//sozdaem igrovoe pole
	var size; //Razmer polja
	var container; //Osnovnoj html dokument
    
    //Funkcija generacija chisla v zadannom intervale
	function getRandomNumberInInterval(min, max){
	return Math.round(Math.random()*(max - min) + min);
	}
	
	function createGemDivHTML(pos, num){
	return "<div data-index=\"" + pos +
			"\" style=\"background-image:url(img/"+ num + 
			".png);width: 100px; height:100px;\"></div>";
	}
	
	
	var n = 6; //napolnjaev igrovoe pole sharikami
	size = n;
	container = document.getElementById('gameplace');
	container.style = "display: flex; float: left; width: 66.66666667%;	flex-direction: row;" +
				"flex-wrap: wrap; width: "+ (100*n) +"px; height: "+ (100*n) +"px;"; 
	//Sozdaem DIV jelementy figur
	var html = "";
	for(var i=0; i < n*n; i++){
			var randomNumber = getRandomNumberInInterval(1,3);
			html = html + createGemDivHTML(i, randomNumber);
			gamePlace.push(randomNumber);
			}						
	container.innerHTML = html;
			
		
	var div4 = document.getElementsByTagName('div');//Elements s tag div
	console.log(div4)

					
			for (i=1; i<div4.length; i++) {
			var b = 0; //v dannie peremennie skladivaev chislo lopnuvshih sharikov
			var y = 0;
			var r = 0;
								
			div4[i].onclick = function(){ // na div dobavlaem onclick

			var a = window.getComputedStyle(this).backgroundImage //v peremennuyu 'a' zapisyvaem kartinku, po kotoroj nazhali
			console.log(a)
			

			if (a.indexOf(1)>0) { //schitaem skolko raz nazhali na kazhdujy kartinku
			b = b+1;
			} else {if (a.indexOf(2)>0) {
			y = y+1
			} else {
			r = r+1
					}
					}
			console.log(b);
			console.log(y);
			console.log(r);
				
			$(this).fadeTo("fast", 0.25)
					
			if (b>5 || y>5 || r>5) {

			youLoose();
			setTimeout(reboot, 5000);
					   
			} else {if (b===5 & y===5 & r===5){

			youWin();
			setTimeout(reboot, 5000);
			
			}
		}
		}		
		}
		}
		

		

	
