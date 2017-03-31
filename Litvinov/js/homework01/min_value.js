'use strict';
/* функция возвращает минимальное значение из переданного массива */

var cmd= "inside min value";
console.log(cmd);

function minimum(data_in){
    var i, current_value, min_value;
    if (data_in.length == 0) return "zero_length";
    
    min_value = data_in[0];
    for (i=0; i<data_in.length; i++){
        current_value = data_in[i];
        
        if (typeof current_value != "number")
            return "wrong_value";
        
        if (min_value > current_value){
                min_value = current_value;
            }
    }
    
    return min_value;
    }

