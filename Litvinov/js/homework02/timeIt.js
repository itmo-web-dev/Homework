'use strict';

/*
функция прогоняет исследуемую функцию n число раз получая среднее время выполнения */

function TimeIt() {
    var self = this;

    function howLong(iterations, testFunction) {
        var results = [];
        var total = 0;
        for (var i = 0; i < iterations; i++) {
            var start = performance.now();
            testFunction();
            var end = performance.now();
            var duration = end - start;
            results.push(duration);
            total += duration;
        }
        var result = {
                results : results,
                total : total,
                avg : total / results.length
        }
        return result;
    }
    self.howLong = howLong;
}
/*
функции взяты с сайта:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
TODO: протестировать их на функциональность 
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom() {
  return Math.random();
}

function get_random_array(min, max, count){
    var arr = [];
    for(var i=0; i<count; i++){
        arr[i]=getRandomInt(min, max);
    }
    return arr;
}