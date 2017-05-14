"use strict";

;(function(){
    window.Math_sd = {
       clone_array: function(array_in){
           var result_array = [];
           for(var key in array_in){
               result_array[key]=array_in[key];
           }
           return result_array;
       },
       min: function(array_in){
             for(var i=1, min=array_in[0];  i<array_in.length; i++){
                if (min > array_in[i])
                    min = array_in[i];
                }
              return min;
            },
        max: function(array_in){
             for(var i=1, max=array_in[0]; i<array_in.length; i++){
                if (max < array_in[i])
                    max = array_in[i];
                }
              return max;
            },
        average: function(array_in){
             for(var i=0, sum=0; i<array_in.length;i++){
                  sum += array_in[i];
                }
              return sum/array_in.length;
            },
        shifted: function(array_in, count, side){
            var array_length= array_in.length;
            var base_array = array_in.slice();
            
            for(var i=0; i< count ; i++){
                var temp=0;
                if ((side!="left")&&(side!="right")){ break;}
                if (side === "left"){
                    temp = base_array.pop();
                    base_array.unshift(temp);
                    }
                if (side === "right"){
                    temp = base_array.shift();
                    base_array.push(temp);
                    }
              } // end for
            
            return base_array;
        },
        getRandomInt: function(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min;
        }
    };
}());