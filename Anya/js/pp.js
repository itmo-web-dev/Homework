'use strict';

////////////-----МОДУЛИ-----///////////


// ;(function() {
// 	windiw.myUtils = {
// 		cloneFirstLevel: function(obj){
// 			var newObj = {};
// 			for(var key in user1)
// 			{
// 				newObj[key] = obj[key];
// 			}
// 			return newObj;
// 		}
// 	};
// }());


// var myUtils = (function() {
// 	return {
// 		cloneFirstLevel: function(obj) {
// 			var newObj = {};
// 			for(var key in user1)
// 			{
// 				newObj[key] = obj[key]
// 			}
// 			return newObj;
// 		}
// 	};
// }());



var line1 = {
	x: [0, 20, 30, 50],
	y: [0, 20, 30, 60],
	type: 'scatter'
};

var line2 = {
	x: [20, 40, 30, 50],
	y: [60, 10, 40, 30],
	type: 'scatter'
};

var line3 = {
	x: [0, 30, 60, 20],
	y: [30, 20, 10, 0],
	type: 'scatter'
};

var data = [line1, line2, line3];
Plotly.newPlot('placeholder', data);