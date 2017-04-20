;(function(){
	
	window.Slider = MySlider;
	
	function MySlider(el, objSetting){
		this.el=el;
        this.obj_setting = objSetting;// объект настроек
        this.arr_img= objSetting.arrImg;
        this.current_slide = 0;
        console.log(objSetting);
        //console.log(this.arr_img[0]);
        this.ul = this.render();
        
	}	
    
    MySlider.prototype.render= function(){
        var div= document.createElement("div");
        div.classList.add('image-slider-wrapper');
        // div.classList.add('container');
        var ul= document.createElement('ul');
        ul.classList.add('image_slider');
        ul.style.width='2400px';
        var li, img;
        console.log(this.arr_img);
        for(var i=0; i<this.arr_img.length; i++){
            li=document.createElement('li');
            img=document.createElement('img');
            img.setAttribute('src', this.arr_img[i]);
            li.appendChild(img);
            ul.appendChild(li);
        };
        div.appendChild(ul);
        this.el.appendChild(div);
        return ul;// будет менять 
    };
    
    MySlider.prototype.animation = function(){
        this.ul.style.left = "-800px;"
        var time = new Date();
        var is_sleep = true;
        var that = this;
        var timer = setInterval(function(){
            if(is_sleep){
                var current_time=new Date();
                var delta=(current_time-time)/that.obj_setting.durationSleep;
                if(delta>1){
                    time = new Date();
                    is_sleep = false;
                }
            
            }else{
                var current_time = new Time();
                var delta= (current_time-time)/that.obj_setting.durationMove;
                that.ul.style.left='-'+parseInt(that.current_slide*800+delta*800)+"px";
                if(delta > 1) {
                    that.current_slide++;
                    that.ul.style.left='-'+parseInt(that.current_slide*800)+'px';
                    clearInterval(timer);
                    };
                };
        }, this.obj_setting.delay)
            
        };
}());