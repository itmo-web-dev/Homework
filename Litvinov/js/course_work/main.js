'use struct';
console.log("in side task01.js");
/*
Поэтому просьба в субботнее занятие продемонстрировать игру 
Сделать игру на Javascript 
   "змейка"
требования HTML5 
- отрисовать поле 
- сделать мэнаджер нажатий для обработки ввода с клавиатуры
- модель змейки - сдвижка точек в массиве 
  move - смещение всех чисел массива на 1 в право 
  add - опция при съеденной точке удлиннение массива 
  render - на каждом шаге временного интервала проходим по точкам и заполняем толе квадратиками 
  vector_move - направление перемещения 

- изначально дается 4 звена 
- есть 4 жизни
  после каждой новой жизни змейка появляется в середине доски горизонтально вектор направления вправо!
- поле изменяемо примерно 20х20 клеток 

- просчитываем пересечения 
  - следующей точкой массива 
    - не должна быть стена 
    - не должена быть сама змейка 
- если мы достигаем длинны в 14 звеньев то переход на новый уровень и победа 
- результаты храняться в куки в течении 1 месяца 
  - таблица результатов это список имя ник и значение 
- при начале игры пользователю предлагается ввести в поле свой ник 

- за каждую съеденную монетку или яблоко начисляется бонус и выводиться в поле SCORE

Вопросы:
 как подгрузить в js - другой js файл чтобы не разрабатывать все в одном модуле 
возможно через html по очареди как с тасками 
*/
    var myGamePiece;
    var myObstacles = [];
    var myScore;

    window.startGame =function() {
        myGameArea.start();
    }
    window.playGame =function() {
        myGameArea.play();
    }
    window.pausedGame =function() {
        myGameArea.paused();
    }
    
    var myGameArea = {
    
    create_canvas : function(){
          var _field =document.getElementsByClassName('game_board')[0];
          var _canvas =  document.createElement("canvas");
          _canvas.className = "game_canvas";
          _field.appendChild(_canvas);
          return _canvas;
         },
    /*
    create_splash_screen: function(){
          var _field =document.getElementsByClassName('game_board')[0];
          var wrapper = document.createElement("DIV");
          wrapper.className = "wrapper";
          wrapper.onclick = function(){ playGame(); };
          wrapper.style.width = "800px";
          wrapper.style.height = "600px";
        
          var a = document.createElement("A");
          a.className = "wrapper__start_button";
          a.innerHTML  += "START GAME";
          var p = document.createElement("P");
          p.className = "wrapper__comment";
          p.innerHTML  += "Click for the start </br></br> use keyboard arrow <-,->";
          
          _field.appendChild(wrapper);
          wrapper.appendChild(a);
          wrapper.appendChild(p);
          return wrapper;    
         },
        */
    init_variables : function(){
        this.board_width = 28;
        this.board_height = 21;
        this.board_side = 22;
        this.interval = 182;
        this.current_x=2;
        this.current_y=2;
        this.move_x = 1;
        this.move_y = 0;
        this.points = 0;
        this.game_over = false;
        this.board_skin = { board_color:"#314151",
                            grid_color: "#3c4151",
                            border_color: "#1c2131",
                            border: "5px",
                            border_style: "solid"
                            };
        this.bonus_init = { color: "red",
                            min_init_value: 6
                          };
        this.canvas.width = this.board_width*this.board_side;
        this.canvas.height = this.board_height*this.board_side;
        },
    start : function() {
        this.canvas = this.create_canvas();
        this.context = this.canvas.getContext("2d");
        this.start_screen = new SplashScreen("START GAME",
                                  "Click for the start </br></br> use keyboard arrow <-,->",
                                   function(){ playGame(); });
        
        this.start_screen.create();
        this.start_screen.show();
        
        this.pause_screen = new SplashScreen("PAUSE GAME",
                                  "press space for continue");
        
        this.pause_screen.create();
        this.pause_screen.hide();
        
        this.game_over_screen = new SplashScreen("GAME OVER",
                                  "refresh browser and play again");
        
        this.game_over_screen.create();
        this.game_over_screen.hide();
        
        
        this.init_variables();
                
        this.timer = new Timer(updateGameArea, this.interval);
        
        this.keyboard_manager();
        
        this.board_model = new BoardModel(this.board_width, this.board_height, this.board_side);
        this.board = new BoardView(this.context, this.canvas, this.board_model, this.board_skin);
        this.snake = new Snake(this.context,
                               this.canvas,
                               {x:5, y: 5,color: "yellow",side: this.board_side});
        this.bonus = new Bonus(this.context,
                               this.canvas,
                               this.board_model,
                               this.bonus_init);
        this.audio = new Howl({
                              src: ['effects/Sound7127[Wav_Library_Net].mp3'],
                              autoplay: true,
                              loop: true,
                              volume: 0.10,
                              onend: function() {
                                console.log('end music intro!');
                              }
                            });
        this.timer.start();
        this.audio.stop();
        this.board.render();
        },
    play : function(){
        myGameArea.start_screen.hide();
        myGameArea.game_over_screen.hide();
        myGameArea.timer.start();
        this.audio.play();  
    },
    paused : function(){
        myGameArea.timer.stop();
        this.audio.stop();  
    },
    keyboard_manager: function(){
        document.addEventListener('keydown', function(event){
            var xp, yp;
            // сохраняю исходное значение направления движения 
            xp = myGameArea.move_x; 
            yp = myGameArea.move_y; 
            // начальные значения прирощения движения при каждом ходе обнуляется 
            myGameArea.move_x = 0;
            myGameArea.move_y = 0;
            
			if (event.keyCode === 37){
				// Left
                myGameArea.move_x  = -1;
			} else if (event.keyCode === 39) {
				// Right
                 myGameArea.move_x  = 1;
			} else if (event.keyCode === 40) {
                // Top
                myGameArea.move_y  = 1;
			} else if (event.keyCode === 38) {
                // Down
                myGameArea.move_y  = -1;
            }else if (event.keyCode === 32) {
                if(!myGameArea.game_over){
                    myGameArea.timer.toggle();
                    if(myGameArea.timer._paused ){
                          myGameArea.pause_screen.show();
                          myGameArea.audio.stop();
                        }else{
                          myGameArea.pause_screen.hide();
                          myGameArea.audio.play();  
                        }
                    myGameArea.move_x = xp;
                    myGameArea.move_y = yp;
                    }

                    // проверяю направление движение змейки если нажимается кнопка обратная движению
                    // движение продолжается в том же направлении
                    if(xp == (-1)*myGameArea.move_x)
                        myGameArea.move_x = xp;
                    if(yp == (-1)*myGameArea.move_y)
                        myGameArea.move_y = yp;
                 }
		  });
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
             
    function updateGameArea(){
        // новый шаг
        myGameArea.current_y += myGameArea.move_y;
        myGameArea.current_x += myGameArea.move_x;
        var step = myGameArea.board_model.get_coord(myGameArea.current_x,
                                                          myGameArea.current_y);
        myGameArea.snake.clear();
        myGameArea.board.render();
        myGameArea.bonus.render();

        myGameArea.snake.move(step.x,step.y);
        myGameArea.snake.render();
        
        var snake_tail = myGameArea.snake.get_element_pos();
        if(myGameArea.bonus.is_bonus(step.x, step.y)){
            myGameArea.points++;
            myGameArea.bonus.generate_new_bonus(snake_tail);
            myGameArea.snake.add_item(step.x,step.y);
        }
        
        // проверка пересечения стен
        if(!myGameArea.board_model.is_gameboard(snake_tail[0])){
                console.log("game over: out of border");
                myGameArea.game_over = true;
                myGameArea.timer.game_over();  
                }
        // проверка само пересечения 
        if( snake_tail.length > 3){
            for(var i=3; i<snake_tail.length; i++){
                if((snake_tail[0].x==snake_tail[i].x)&&(snake_tail[0].y==snake_tail[i].y)){
                    console.log("game over: self intersection");
                    myGameArea.game_over = true;
                    myGameArea.timer.game_over();  
                    break;
                    } 
               }
            }
        if(myGameArea.game_over){
            myGameArea.game_over_screen.show();
            myGameArea.audio.stop();
            }
        
}
     


