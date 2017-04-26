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
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.board_width = 25;
        this.board_height = 25;
        this.board_side = 20;
        
        this.interval = setInterval(updateGameArea, 20);
        this.board = new BoardView( this.canvas, this.board_width, this.board_height, this.board_side);
        this.board.render();
        this.current_x=1;
        this.current_y=1;
        this.keyboard_manager();
        },
        
    keyboard_manager: function(){
        document.addEventListener('keydown', function(event){
			if (event.keyCode === 37){
				//Нажатие влево
				myGameArea.current_x--;
			} else if (event.keyCode === 39) {
				//Нажатие вправо
				myGameArea.current_x++;
			} else if (event.keyCode === 40) {
                // Top
                myGameArea.current_y++;
			} else if (event.keyCode === 38) {
                // Down
                myGameArea.current_y--;
            }
            
            if (myGameArea.current_y < 1){
                myGameArea.current_y = 1;
                }
            console.log(myGameArea.current_x, myGameArea.current_y);
		});

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
    
    function BoardView(context, width, height, side){
        this.board_color = "#314151";   
        this._context = context;
        this.board_data = new BoardModel(width, height, side);
        };

    BoardView.prototype.render= function(){
        console.log(this._context);
        this._context.style.border = "1px";
        this._context.style.borderColor = "#f9f9f9";;
        this._context.style.borderBottomStyle = "solid";
        this._context.style.backgroundColor= this.board_color;
        }
     
    
    
    function Manager(obj){
        this.height = obj.height_cell;
        this.width = obj.width_cell;
        this.bg_color = obj.color;
        this.side = obj.size_cell;
        this.board = [];
        
    };
    
    function updateGameArea(){
        var begin1 = myGameArea.board.board_data.get_coord(myGameArea.current_x,myGameArea.current_y);
        // console.log(begin);
        var point = new Square({x: begin1.x,y: begin1.y,color: "yellow",side: myGameArea.board_side},
                               myGameArea.context,
                               myGameArea.canvas);
        point.clear()
        /*
        var x1 = myGameArea.current_x++;
        var y1 = myGameArea.current_y;
        if (x1> myGameArea.board_width){
            x1 = 1;
            myGameArea.current_x = 1;
            y1 = ++myGameArea.current_y;
        }
        if(y1 > myGameArea.board_height ){
            y1=1;
            myGameArea.current_y = 1;
        }
        */
        var x1 = myGameArea.current_x;
        var y1 = myGameArea.current_y;
        var begin = myGameArea.board.board_data.get_coord(x1, y1);
        // console.log(begin);
        point.move(begin.x,begin.y)
        point.render();
        
        }
   /*
    }
    
    /*
    function Point(x, y){
        this.x = x;
        this.y = y;
    };
    
    function Shape(x, y, width, height){
        // возюмем позицию x,y - цент фигуры 
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this.points = [];
        this.max_x = 0;
        this.min_x = 0;
        this.max_y = 0;
        this.min_y = 0;
    }
    
    Shape.prototype.calc_coordinat = function(){
            var half_width = this._width/2.0;
            var half_height = this._height/2.0;
            this.points[0] = new Point(this._x-half_width, this._y+half_height);
            this.points[1] = new Point(this._x+half_width, this._y+half_height);
            this.points[2] = new Point(this._x+half_width, this._y-half_height);
            this.points[3] = new Point(this._x-half_width, this._y-half_height);
            
            this.max_x = this._x+half_width;
            this.min_x = this._x-half_width;
            
            this.max_y = this._y+half_height;
            this.min_y = this._y-half_height;
            };
    
    function is_intersect(rec01, rec02){
       var output = false;
        
       var value = rec02.max_x;
       if (rec01.max_x > value && rec01.min_x< value){ output= true;}
        
       value = rec02.min_x;
       if (rec01.max_x > value && rec01.min_x< value){ output=  true;}
       
       var value = rec02.max_y;
       if (rec01.max_y > value && rec01.min_y< value){ output=  true;}
        
       value = rec02.min_y;
       if (rec01.max_y > value && rec01.min_y< value){output=  true;}
        
       return output;
   }
    
   var rec01 = new Shape(1, 1, 2, 2);
   rec01.calc_coordinat();
   console.log(rec01.points);
   console.log(rec01.max_x);
   console.log(rec01.min_y);
    
   var rec02 = new Shape(2, 2, 1, 1);
   rec02.calc_coordinat();
   console.log(rec02.points);
   console.log(rec02.max_x);
   console.log(rec02.min_y); 
    
   var check = is_intersect(rec01, rec02);
   console.log(check);
    
   var rec01 = new Shape(1, 1, 2, 2);
   var rec02 = new Shape(3, 2, 1, 1); 
   var check = is_intersect(rec01, rec02);
   console.log(check);    
    */
}());