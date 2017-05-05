'use struct';
console.log("in side board.js");

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
        
        if((x_cell < 1)||(x_cell > (this.width-1)*this.size)){
            result = false;
            }
        if((y_cell < 1)||(y_cell> (this.height-1)*this.size)){
            result = false;
            }
        return result;
    };
    BoardModel.prototype.clear = function(){
        for(var i=0; i<this.map.length;i++){
            this.map[i]=0;
            }
    };
    BoardModel.prototype.add_data = function(x,y){};

    // отрисовка поля 
    function BoardView(context, canvas, obj_board_model){
        this.board_color = "#314151";   
        this._context = context;
        this._canvas = canvas;
        this.board_data = obj_board_model;
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