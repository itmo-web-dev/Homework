'use strict';
console.log('in side - mark.js');
/* TODO: сделать объект в который можно добавлять пару число значение и 
  возвращается значение соответствующее правке
*/


function get_mark_as_text(num){
    var number_names = ['one', 'two', 'three', 'four', 'five'];
    var name="NaN";
    
    switch(num){
        case 1: name = number_names[0]; break;
        case 2: name = number_names[1]; break;
        case 3: name = number_names[2]; break;
        case 4: name = number_names[3]; break;
        case 5: name = number_names[4]; break;
    default:
        name = "NaN";
        break;
    }
    
    return name;
}

/*
function get_code_as_text(data_in):
     var ideoma = {
         key: 1,
         name: 'one'
        }
     var 
 */