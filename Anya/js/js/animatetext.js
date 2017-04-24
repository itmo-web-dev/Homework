'use strict';

; (function() {
	window.AnimateText = function (div, min, max) {
		Iterator.call(this, min, max);
		this.div = div;
		this.tick = function() {
			if (this._from != this._to) {
				this._increment();
				this._render();
			} 
			return this._from;
		}
		this._render = function () {
			this.div.innerHTML = 'Процесс загрузки ' + this._from + '%';
		}
	}
}());
