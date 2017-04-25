;(function(){
	window.SpaceInviders = function(el){
		el.style.width = '1000px';
		el.style.height = '1000px';
		el.style.backgroundColor = 'black';
		//Создаем менеджера игры
				
		this.manager = new Manager({
			el:el,
			enemy:{
				countEnemy:6,
				x:100, y:100, h:128,
				speed:5
			},
			player:{
				x:100, y:900
			}
		});
		this.manager.start();		
	}
	
	function Manager(obj){
		this.arrEnemy = [];
		this.arrBullet = [];
		this.speed = obj.enemy.speed;
		for(var i = 0; i<obj.enemy.countEnemy; i++){
			this.arrEnemy.push(
				new Shape(obj.el, obj.enemy.x + obj.enemy.h*i, obj.enemy.y,
					'img/enemy1.png'));
		}
		
		this.player = new Shape(obj.el, obj.player.x, obj.player.y,
						'img/playerGun.png');
		this.playerDx = 0;
		
		var that = this;
		//Вашаем слушателей движения влево и вправо
		document.addEventListener('keydown', function(event){
			if (event.keyCode === 37){
				//Нажатие влево
				that.playerDx-=5;
			} else if (event.keyCode === 39) {
				//Нажатие вправо
				that.playerDx+=5;
			} else if (event.keyCode === 32) {
				//Выстрел
				that.arrBullet.push(
					new Shape(obj.el, that.player._x + 20, that.player._y,
						'img/bullet.png'));
			}
		});
		
		this.move = function(){
			//Выбираем направление движения всех противников
			var dX = random()*this.speed;
			var dY = random()*this.speed;
			//Передвигаем врагов
			for(var i = 0; i<this.arrEnemy.length; i++){
				this.arrEnemy[i].move(dX, dY);
			}
			
			//Перерисовываем пушку
			this.player.move(this.playerDx,0);
			this.playerDx = 0;
			
			//Передвигаем снаряд
			for(var i = 0; i<this.arrBullet.length; i++){
				this.arrBullet[i].move(0, -5);
			}
		}.bind(this);
		
		function random(){
			return Math.round(Math.random()*2 - 1);
		}
		
		this.start = function(){
			setInterval(this.move,100);
		}
	}
	
	function Shape(el, x, y, pathToImg){
		//Создаем нового врага
		this.imgEl = document.createElement('img');
		this.imgEl.setAttribute('src', pathToImg);
		this.imgEl.style.position = 'absolute';
		this._y = y;
		this._x = x;
		this.setPosition(x,y);
		el.appendChild(this.imgEl);
	}	
	//Функция обновляет положение 
	Shape.prototype.setPosition = function(x,y) {
		this.imgEl.style.top = y + 'px';
		this.imgEl.style.left = x + 'px';
	}
	
	//Функция перемещения фигуры на заданный шаг
	Shape.prototype.move = function(dX, dY){
		this._x += dX;
		this._y += dY;
		this.setPosition(this._x, this._y);				
	}	
}());