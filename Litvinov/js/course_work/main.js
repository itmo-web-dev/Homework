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
        // myGamePiece = new component(30, 30, "red", 10, 120);
        //myGamePiece.gravity = 0.05;
        //myScore = new component("30px", "Consolas", "black", 280, 40, "text");
        myGameArea.start();
    }
    
    var myGameArea = {
    
    canvas : document.createElement("canvas"),
        
    init_variables : function(){
        this.count = 25;
        this.canvas.width = 20*this.count;
        this.canvas.height = 20*this.count;
        this.board_width = 25;
        this.board_height = 25;
        this.board_side = 20;
        this.interval = 200;
        this.current_x=2;
        this.current_y=2;
        this.move_x = 1;
        this.move_y = 0;
    },
    start : function() {
        this.init_variables();

        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.canvas.style.marginLeft = "215px";
        this.canvas.style.marginTop = "150px";
        
        this.timer = new Timer(updateGameArea, this.interval);
        this.timer.start();
        
        this.board_model = new BoardModel(this.board_width, this.board_height, this.board_side);
        this.board = new BoardView(this.context, this.canvas, this.board_model);
        this.snake = new Snake({x:5, y: 5,color: "yellow",side: this.board_side},
                               this.context,
                               this.canvas);
        this.board.render();
        this.keyboard_manager();
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
                myGameArea.timer.toggle();
                }
            
            // проверяю направление движение змейки если нажимается кнопка обратная движению
            // движение продолжается в том же направлении
            if(xp == (-1)*myGameArea.move_x)
                myGameArea.move_x = xp;
            if(yp == (-1)*myGameArea.move_y)
                myGameArea.move_y = yp;
		  });
        },
    vector_moveing:  function(){
        var x_pos, y_pos;
        x_pos = myGameArea.current_x;
        y_pos = myGameArea.current_y;
        
        myGameArea.current_y += myGameArea.move_y;
        myGameArea.current_x += myGameArea.move_x;

        if(!myGameArea.board_model.is_gameboard({x: myGameArea.current_x, y: myGameArea.current_y})){
             myGameArea.current_y = y_pos;
             myGameArea.current_x = x_pos;
             }
        console.log(myGameArea.current_x, myGameArea.current_y);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
             
    function updateGameArea(){
        var begin1 = myGameArea.board.board_data.get_coord(myGameArea.current_x,myGameArea.current_y);
        /*
        var point = new Square({x: begin1.x,y: begin1.y,color: "yellow",side: myGameArea.board_side},
                               myGameArea.context,
                               myGameArea.canvas);
        point.clear()
        */
        myGameArea.snake.move(begin1.x,begin1.y);
        myGameArea.snake.clear();
        
        myGameArea.board.render();
        
        myGameArea.vector_moveing();
        
        var x1 = myGameArea.current_x;
        var y1 = myGameArea.current_y;
        
        var begin = myGameArea.board.board_data.get_coord(x1, y1);
            // console.log(begin);
        if(y1==3){
            myGameArea.snake.add_item(begin.x,begin.y);
        }
        //point.move(begin.x,begin.y)
        // point.render();
        myGameArea.snake.move(begin.x,begin.y);
        myGameArea.snake.render();
        }
