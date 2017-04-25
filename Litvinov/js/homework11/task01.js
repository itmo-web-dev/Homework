'use struct';
console.log("in side task01.js");
/*
1. Даны два прямоугольника в виде объектов. 
Написать функцию, которая проверяет 
пересекаются ли два прямоугольника.

1. получить координаты всех верхин 
2. получить максимальное и минимальное значение вершин
3. если значения в диапозоне и по X и по Y значит есть пересечение 

*/
;(function(){
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
       var value = rec02.max_x;
       var output = false;
       if (rec01.max_x > value && rec01.min_x< value){ output= true;}
       value = rec02.min_y;
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
    
}());