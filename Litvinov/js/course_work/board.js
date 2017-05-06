'use struct';
console.log("in side board.js");

// модель поля
function BoardModel(width, height, size){
    this.width = width;
    this.height = height;
    this.side = size;
};
BoardModel.prototype.get_coord = function(x,y){
    var x_pos = (x-1)*this.side;
    var y_pos = (y-1)*this.side;
    return {x:x_pos, y:y_pos};
};
BoardModel.prototype.is_gameboard = function(obj_value){
    var x_cell = obj_value.x;
    var y_cell = obj_value.y;
    var result = true;
    
    if((x_cell < 1)||(x_cell > (this.width-1)*this.side)){
        result = false;
        }
    if((y_cell < 1)||(y_cell> (this.height-1)*this.side)){
        result = false;
        }
    return result;
};
// отрисовка поля 
function BoardView(context, canvas, obj_board_model, obj_color){
    this._context = context;
    this._canvas = canvas;
    this.board_data = obj_board_model;
    
    this.board_color = obj_color.board_color;   
    this.grid_color = obj_color.grid_color;   
    this.border_color = obj_color.border_color; 
    this.border = obj_color.border;
    this.border_style = obj_color.border_style;
    };
BoardView.prototype.render= function(){
    this.draw_field();
    this.draw_border(this.border_color);
    this.draw_grid(this.grid_color);
    };
BoardView.prototype.draw_field = function(){
    this._canvas.style.backgroundColor= this.board_color;
};
BoardView.prototype.draw_border=function(color_in){
    this._canvas.style.border = this.border;
    this._canvas.style.borderColor = color_in;
    this._canvas.style.borderStyle = this.border_style;
    };
BoardView.prototype.draw_grid=function(color_in){
    var ctx=this._context;
    ctx.beginPath();

    var width, size, height, color;
    width = this.board_data.width;
    size = this.board_data.side;
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