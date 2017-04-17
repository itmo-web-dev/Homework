'use strict';

; (function() {
	function fromMinToMax(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	};
	function randomArr(arr) {
		var index = fromMinToMax(0, arr.length - 1);
		return arr.splice(index, 1)[0];
	}
	function colorGen() {
		return 'color: rgb('+ fromMinToMax(0, 255) + ',' + fromMinToMax(0, 255) + ',' +  fromMinToMax(0, 255) + ')';
	};

	// var s = 16;
	window.Game = function(s) {
		var arr = [];
		for (var i = 1; i <= s*s; i++)
			arr.push(i);
		var str = '<table><tbody>';
		for (var i = 0; i < s; i++) {
			str = str + '<tr>';
			for (var j = 0; j < s; j++) {
				str = str + '<td style="'+ colorGen() +'">' + randomArr(arr) + '</td>';
			} 
			str = str + '</tr>';
		}
		str = str + '</tbody></table>';
		return str;
	}

}());