'use struct';
console.log("in side timer.js");

function Timer(func, delay){
    this._timer_id = 1;
    this._paused = false;
    this._delay = delay;
    this._timer_function = func;
};
Timer.prototype.start = function(){
    this._timer_id = setInterval(this._timer_function, this._delay);
    this._paused = false;
};
Timer.prototype.stop = function(){
    clearInterval(this._timer_id);
    this._paused = true;
};
Timer.prototype.toggle = function(){
    if(this._paused){
        this.start();
    }else{
        this.stop();
    }
};
Timer.prototype.toString = function(){
   console.log("this._paused: "         +this._paused + "\n",
               "this._delay: "          +this._delay + "\n",
               "this._timer_id: "       +this._timer_id + "\n",
               "this._timer_function: " + this._timer_function) + "\n";
};


