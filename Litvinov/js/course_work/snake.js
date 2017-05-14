'use struct';
console.log("in side snake.js");

function Square(obj, context_in, canvas){
        this.fill_color=obj.color;
        this.x = obj.x;
        this.y = obj.y;
        this.canvas = canvas;
        this.number = 1;
        this.side = obj.side;
        this._context = context_in;
        }
    Square.prototype.render = function(){
        this.render_rect();
        this.render_text();
        }
    Square.prototype.render_rect = function(){
        this._context.beginPath();
        this._context.rect(this.x, this.y, this.side, this.side);
        this._context.fillStyle = this.fill_color;
        this._context.fill();
        }
    Square.prototype.render_text = function(){
        this._context.font = '18px Arial';
        this._context.textAlign = 'center';
        this._context. textBaseline = 'middle';
        this._context.fillStyle = "#d1c547";         this._context.fillText(this.number.toString(), this.x+this.side/2, this.y+this.side/2); // text and position
    }
    Square.prototype.move = function(x,y){
        this.x = x;
        this.y = y;
        }
    Square.prototype.clear = function(){
        this._context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    Square.prototype.set_number = function(num){
        this.number  = num;
        }
///  --------------------------------    
    function Snake(context_in, canvas, obj){
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
        for(var i=0;i<this.array_item.length;i++){
            this.array_item[i].render();
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
            this.array_item[i].set_number(i);
            }
        };
    Snake.prototype.add_item = function(x,y){
        var begin_point = new Square({x: x, y: y, color: this._color , side: this._side},
                               this._context,
                               this._canvas);
        this.array_item.unshift(begin_point);
        };
    Snake.prototype.get_element_pos = function(){
        var output = [];
        for(var i=0; i<this.array_item.length; i++){
            output.push({x:this.array_item[i].x, 
                         y:this.array_item[i].y});
        } 
        return output;
    };
    
function Bonus(context_in, canvas, board_model_obj, bonus_init_obj){
    this._context = context_in;
    this._canvas = canvas;
    this.side = board_model_obj.side;
    this.fill_color = bonus_init_obj.color;
    this.height = board_model_obj.height;
    this.width = board_model_obj.width;
    this.min_value = bonus_init_obj.min_init_value;
    console.log(this.side, this.fill_color, this.height, this.width, this.min_value);
    
    this._xp = Math_sd.getRandomInt(this.min_value, this.side);
    this._yp = Math_sd.getRandomInt(this.min_value, this.side);
    console.log(this._xp, this._yp)
    this._x = this._xp * this.side;
    this._y = this._yp * this.side;
    }; 
Bonus.prototype.render = function(){
        this._context.beginPath();
        this._context.rect(this._x, this._y, this.side, this.side);
        this._context.fillStyle = this.fill_color;
        this._context.fill();
        };
Bonus.prototype.clear_on_board = function(){
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
        };
Bonus.prototype.is_bonus =  function(x_in, y_in){
        var result = false;
        if ((this._x == x_in)&&(this._y==y_in)){
            result  = true;
            }
        return result;
};
Bonus.prototype.generate_new_bonus = function(arr){
    var check_bonus_in_snake=true;
    while(check_bonus_in_snake)
        {
        this._xp = Math_sd.getRandomInt(1, this.width);
        this._yp = Math_sd.getRandomInt(1, this.height);
        // проверка генерации бонуса на клетки занятые змеей 
        check_bonus_in_snake = false;
        for(var i=0; i< arr.length; i++){
                if((arr[i].x==this._xp*this.side)&&
                          (arr[i].y==this._yp*this.side)){
                    check_bonus_in_snake = true;
                    console.log("error: bonus in snake bod-> reculculate position ");
                    break;
                    }
                }
         }
    this._x = this._xp * this.side;
    this._y = this._yp * this.side;
};
Bonus.prototype.toString = function(){
    var result = 'Bonus: this._x ' + this._x +' this._y ' +this._y;
    return result;
};
