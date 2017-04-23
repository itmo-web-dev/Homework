;(function(){
	
	window.Iterator = MyIterator;
	
	function MyIterator(from, to){
		this._from = from;
		this._to = to;
		
		this._increment = function(){
			if(this._from < this._to) {
				this._from ++;
			} else if (this._from > this._to) {
				this._from --;
			}
			return this._from;	
		}		
	}
	
}());