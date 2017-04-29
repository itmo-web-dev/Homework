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
;(function(){
    
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
    start : function() {
        this.count = 25;
        this.canvas.width = 20*this.count;
        this.canvas.height = 20*this.count;
        this.canvas.style.marginLeft = "215px";
        this.canvas.style.marginTop = "150px";
        
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.board_width = 25;
        this.board_height = 25;
        this.board_side = 20;
        
        this.interval = setInterval(updateGameArea, 200);
        this.board = new BoardView( this.context, this.canvas, this.board_width, this.board_height, this.board_side);
        this.snake = new Snake({x:5,y: 5,color: "yellow",side: this.board_side}, this.context, this.canvas);
        this.board.render();
        this.current_x=2;
        this.current_y=2;
        this.move_vector = [0,1,0,0];
        this.keyboard_manager();
        },
    keyboard_manager: function(){
        document.addEventListener('keydown', function(event){
            var x_pos, y_pos;
            x_pos = myGameArea.current_x;
            y_pos = myGameArea.current_y;
            
			if (event.keyCode === 37){
				// Left
                myGameArea.move_vector = [0,0,0,1];
			} else if (event.keyCode === 39) {
				// Right
                 myGameArea.move_vector = [0,1,0,0];
			} else if (event.keyCode === 40) {
                // Top
                myGameArea.move_vector = [1,0,0,0];
			} else if (event.keyCode === 38) {
                // Down
                myGameArea.move_vector = [0,0,1,0];
            }
            
            if(!myGameArea.board.board_data.is_gameboard({x: myGameArea.current_x, y: myGameArea.current_y})){
                myGameArea.current_y = y_pos;
                myGameArea.current_x = x_pos;
                }
             console.log(myGameArea.current_x, myGameArea.current_y);
		  });
        },
    vector_moveing:  function(){
        var x_pos, y_pos;
        x_pos = myGameArea.current_x;
        y_pos = myGameArea.current_y;
        
        myGameArea.current_y += myGameArea.move_vector[0];
        myGameArea.current_x += myGameArea.move_vector[1];
        myGameArea.current_y -= myGameArea.move_vector[2];
        myGameArea.current_x -= myGameArea.move_vector[3];

        if(!myGameArea.board.board_data.is_gameboard({x: myGameArea.current_x, y: myGameArea.current_y})){
             myGameArea.current_y = y_pos;
             myGameArea.current_x = x_pos;
             }
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    function Square(obj, context_in, canvas){
        this.fill_color=obj.color;
        this.x = obj.x;
        this.y = obj.y;
        this.canvas = canvas;
        this.side = obj.side;
        this._context = context_in;
        }
    Square.prototype.render = function(){
        this._context.beginPath();
        this._context.rect(this.x, this.y, this.side, this.side);
        this._context.fillStyle = this.fill_color;
        this._context.fill();
        }
    Square.prototype.move = function(x,y){
        this.x = x;
        this.y = y;
        }
    Square.prototype.clear = function(){
        this._context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    
    function Snake(obj, context_in, canvas){
        this.array_item = [];
        this._color = obj.color;
        this._context = context_in;
        this._canvas = canvas;
        this._side = obj.side;
        this._x = obj.x;
        this._y = obj.y;
        
        var point = new Square({x: obj.x, y: obj.y, color: obj.color, side: obj.side},
                               context_in,
                               canvas);
        console.log(point);
        this.array_item.unshift(point);
        
        }
    Snake.prototype.clear=function(){
        for(var i=0;i<this.array_item.length;i++){
            this.array_item[i].clear();
            }
        }
    Snake.prototype.render=function(){
        //this.array_item[0].render();
        for(var i=0;i<this.array_item.length;i++){
            this.array_item[i].render();
            //console.log(i);
            }
        }
    Snake.prototype.move=function(x,y){
        var begin_point = new Square({x: x, y: y, color: this._color , side: this._side},
                               this._context,
                               this._canvas);
        this.array_item.unshift(begin_point);
        this.array_item.pop();
        
        for(var i=0;i<this.array_item.length;i++){
            this.array_item[i].move(this.array_item[i].x, this.array_item[i].y);
            }
        //console.log(this.array_item[0]);
        }
    Snake.prototype.add_item = function(x,y){
        var begin_point = new Square({x: x, y: y, color: this._color , side: this._side},
                               this._context,
                               this._canvas);
        this.array_item.unshift(begin_point);
        /*
        for(var i=0;i<this.array_item.length;i++){
            this.array_item[i].move(this.array_item[i].x, this.array_item[i].y);
            }
        */
        }
    // модель поля
    function BoardModel(width, height, size){
        this.width = width;
        this.height = height;
        this.size = size;
        this.map = [];
        for(var i=0; i<this.height*this.width;i++){
            this.map[i]=0;
            }
        };
    BoardModel.prototype.get_value = function(x,y){
        // преобразовывает координаты в номер элемента массива 
        if( y> 0){
            var value = (y-1)*this.width + x;
        }else{
            value = 0; 
        }
        return this.map[value];
    };
    BoardModel.prototype.get_coord = function(x,y){
        var x_pos = (x-1)*this.size;
        var y_pos = (y-1)*this.size;
        return {x:x_pos, y:y_pos};
    };
    BoardModel.prototype.is_gameboard = function(obj_value){
        var x_cell = obj_value.x;
        var y_cell = obj_value.y;
        var result = true;
        
        if((x_cell< 1)||(x_cell> this.width)){
            result = false;
            }
        if((y_cell< 1)||(y_cell> this.height)){
            result = false;
            }
        
        return result;
    };
    // отрисовка поля 
    function BoardView(context, canvas, width, height, side){
        this.board_color = "#314151";   
        this._context = context;
        this._canvas = canvas;
        this.board_data = new BoardModel(width, height, side);
        };
    BoardView.prototype.render= function(){
        this.draw_border("#1c2131");
        this.draw_grid("#3c4151");
        };
    BoardView.prototype.draw_border=function(color_in){
        canvas = this._canvas;
        canvas.style.border = "5px";
        canvas.style.borderColor = color_in;
        canvas.style.borderStyle = "solid";
        canvas.style.backgroundColor= this.board_color;
        };
    BoardView.prototype.draw_grid=function(color_in){
        var ctx=this._context;
        ctx.beginPath();
    
        var width, size, height, color;
        width = this.board_data.width;
        size = this.board_data.size;
        height = this.board_data.height;
        color = color_in;
        
        var top, down;
        for(var i=0; i<this.board_data.width; i++){
            top = {x:(width-i)*size, y:0};
            down = {x:(width-i)*size, y:height*size};
            ctx.moveTo(top.x, top.y);
            ctx.lineTo(down.x, down.y);
            ctx.strokeStyle = color;
            ctx.stroke();
            }
        var left, right;
        for(var i=0; i<this.board_data.height; i++){
            left = {x:0, y:(height-i)*size};
            right = {x:width*size, y:(height-i)*size};
            ctx.moveTo(left.x, left.y);
            ctx.lineTo(right.x, right.y);
            ctx.strokeStyle = color;
            ctx.stroke();
            }
    };  
     
    function updateGameArea(){
        var begin1 = myGameArea.board.board_data.get_coord(myGameArea.current_x,myGameArea.current_y);
        /*
        var point = new Square({x: begin1.x,y: begin1.y,color: "yellow",side: myGameArea.board_side},
                               myGameArea.context,
                               myGameArea.canvas);
        point.clear()
        */
        myGameArea.snake.move(begin1.x,begin1.y);
        //console.log(myGameArea.snake);
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
}());