;(function(){
	window.AnimateText = MyAnimateText;
	
	function MyAnimateText(el,from,to){
		Iterator.call(this,from,to);
		this._el = el;
		
		this.rander = function(){
			this._el.innerHTML = "Процесс загрузки: " + this._from + "%";
		};
		
		this.tick = function(){
			if(this._from !== this._to) {
				this._increment();
				this.rander();
			}
			return this._from;
		}		
	}	
}());