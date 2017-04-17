'use strict';

// var str = '111113';

// var summ = 0; 
// for (var i = 0; i < str.length; i++) {
// 	summ = summ + parseInt(str[i]);
// };

// console.log(summ);
////////////////////////////////////
// var s = "Homework";
// var c = 'o';

// var str = s;
// var target = c; 

// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;


//   str = str.substr(0, foundPos) + target + str.substr(foundPos);
//   pos = foundPos + 2; 
// };

// console.log(str);
///////////////////////////////////

var reg = prompt('Веедите пароль', '');
var result = /.{8,}/igm.test(reg) 
			&& /.*[A-Z].*/igm.test(reg)
			&& /.*[a-z].*/igm.test(reg)
			&& /.*\d.*\d.*\d.*/igm.test(reg)
			&& /.*[!%$#].*/igm.test(reg);
console.log(result);

