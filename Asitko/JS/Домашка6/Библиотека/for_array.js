;(function() {

	window.forArray = {
		Min: function(arr) {
			var min = arr[0];
			for (var i=1; i < arr.length; i++) {
				if (arr[i] < min)
					min = arr[i];
			} return min;
			
		},

		Max: function(arr) {
			var max = arr[0];
			for (var i=1; i < arr.length; i++) {
				if (arr[i] > max)
					max = arr[i];
			} return max;
		},

		Average: function(arr) {
			var summ = 0;
			for (var i=0; i < arr.length; i++) {
				summ += arr[i];
			} return summ/arr.length;
		},

		Clone: function(arr) {
			var newArr = [];
			for (var key in arr)
				{newArr[key] = arr[key];
				}
				return newArr
			} 
		}

	}());


