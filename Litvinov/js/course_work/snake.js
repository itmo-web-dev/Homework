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
        this._context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    Square.prototype.set_number = function(num){
        this.number  = num;
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
            this.array_item[i].set_number(i);
            }
        //console.log(this.array_item[0]);
        }
    Snake.prototype.add_item = function(x,y){
        var begin_point = new Square({x: x, y: y, color: this._color , side: this._side},
                               this._context,
                               this._canvas);
        this.array_item.unshift(begin_point);
        }
    
function Bonus(context_in){
    this._xp = 10;
    this._yp = 10;
    this.side = 20;
    this._x = this._xp * this.side;
    this._y = this._yp * this.side;
    this.fill_color = "red";
    this._context = context_in;
} 
Bonus.prototype.render = function(){
        this.render_rect();
        console.log("render bonus")
        }
Bonus.prototype.render_rect = function(){
        this._context.beginPath();
        this._context.rect(this._x, this._x, this.side, this.side);
        this._context.fillStyle = this.fill_color;
        this._context.fill();
    console.log("render bonus",this._x, this._x, this.side, this.side, this.fill_color );
        }
Bonus.prototype.clear = function(){
        this._context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }