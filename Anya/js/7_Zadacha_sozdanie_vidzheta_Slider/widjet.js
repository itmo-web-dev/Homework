;(function(){
	
	window.Slider = MySlider;
	
	function MySlider(el, objSetting){
		this.el = el;
		this.objSetting = objSetting;
		this.arrImg = objSetting.arrImg;
		this.ul = this.render();
		this.animate();
		this.currentSlide = 0;
	}	

	MySlider.prototype.render = function() {
		this.el.classList.add('container');
		var div = document.createElement('div');
		div.classList.add('image-slider-wrapper');
		var ul = document.createElement('ul');
		ul.classList.add('image_slider');
		ul.style.width = '2400px';	
		for (var i = 0; i < this.arrImg.length; i++) {
			var li = document.createElement('li');
			var img = document.createElement('img');
			img.setAttribute('src', this.arrImg[i]);
			li.appendChild(img);
			ul.appendChild(li);
		};
		div.appendChild(ul);
		this.el.appendChild(div);
		return ul;
	}

	MySlider.prototype.animate = function () {
		//this.ul.style.left = '-800px';
		var time = new Date();
		var isSleep = true;
		var that = this;
		var timer = setInterval(function() {
			if (isSleep) {
				var currentTime = new Date();
				var delta = (currentTime - time)/that.objSetting.durationSleep;
				if (delta > 1) {
					time = new Date();
					isSleep = false;
				}
			} else {
				var currentTime = new Date();
				var delta = (currentTime - time)/that.objSetting.durationMove;
				that.ul.style.left = '-' + 
					parseInt(that.currentSlide * 800 + delta * 800) + 'px';
				if (delta > 1) {
					that.currentSlide++;
					that.ul.style.left = '-' + 
					parseInt(that.currentSlide * 800) + 'px';
					clearInterval(timer);
					that.animate();
				}
			}
		}, this.objSetting.delay)
	}

}());

/*
1. Slider(el, objSetting)

render(el, appPathPng) - генерить разметку
*/

