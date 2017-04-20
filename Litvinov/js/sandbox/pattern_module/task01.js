'use struct';
console.log("in side task01.js");
/* простая версия с возможностью добраться до couner 
var module={
    counter: 0,
    incrementCounter: function(){
        return ++this.counter;
    },
    resetCounter: function(){
        return this.counter = 0;
    }
};*/

var module=(function(){
    var counter= 0,
        module = {};
    module.incrementCounter= function(){
        return ++counter;
        };
        
    module.resetCounter = function(){
        return counter = 0;
        };
    
    module.getCounter = function(){
        return counter;
        };
    return module;
})();