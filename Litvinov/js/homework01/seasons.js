'use strict';

var trace= false;

function get_season(num){
  // TODO: console.assert((typeof num != "number"), "num must be a number");
  if(trace) console.log("type: ", typeof num, num);

  var value = "nan";
  var seasons = ["winter", "spring", "summer", "autumn"];

  switch(num){
       case 1: 
       case 2: value = seasons[0]; break;
       case 3:
       case 4:
       case 5: value =seasons[1]; break;
       case 6:
       case 7:
       case 8: value =seasons[2]; break;
       case 9:
       case 10:
       case 11:value =seasons[3]; break;
       case 12:value =seasons[0]; break;
   default:
       value = "NaN";
       break;
   }

   return value;
}