'use struct';
console.log("in side task02.js");
/*
2. Написать симулятор боя. Значения текущей 
атаки и защиты 2-х противников задаются 
случайными значениями из выбранного диапазона. 
Полученный урон = Текущая Атака противника - Ваша текущая защита.
Здоровье у юнитов задано в коде.
Необходимо после каждого шага битвы
(обмена ударами) выводить информацию о бойцах. 
При окончании битвы вывести статистическую 
информацию и имя победителя.
*/
;(function(){
   function Fighter(name, armor, health){
       this._name = name;
       this._armor = armor;
       this._health  = health ;
   };
   Fighter.prototype.attack = function(min, max){
       return getRandomInt(min, max);
   }
   Fighter.prototype.protect = function(attack){
       var value =  attack - this._armor;
       if(value >0){ 
          this._health -=  value; 
       };
   }
   Fighter.prototype.get_info = function(){
       cmd = "palayer: "+this._name+" "+this._armor+" "+this._health
       return cmd;
   }
   Fighter.prototype.is_out = function(){
       return this._health < 0;
   }

   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }


   
    var player1 = new Fighter('player01',10, 200);
    var player2 = new Fighter('player02', 10, 200);
    var game_end = false;
    var round = 0;
    
   function fight(){
       console.log('round: '+ round++);
       
       player1.protect(player2.attack(15, 25));
       if (player1.is_out()){
           console.log("Win: " + player2._name);
           game_end = true;
       }
       player2.protect(player1.attack(15, 25));
       if (player2.is_out()){
           console.log("Win: " + player1._name);
           game_end = true;
       }
       
       if(game_end){
            clearTimeout(game_time);
       }
       
       console.log(player1.get_info());
       console.log(player2.get_info());
   }
   var game_time = setInterval(fight,500);
}());