function SplashScreen(main, comment, func){
    this.main_text = main;
    this.comment = comment;
    this.func = func;
    //this.root_div = root_div;
    this.root_div = document.getElementsByClassName('game_board')[0];
    this.el = "";
    
};
SplashScreen.prototype.create = function(){
    var wrapper = document.createElement("DIV");
    wrapper.className = "wrapper";
    //wrapper.onclick = function(){ playGame(); };
    wrapper.onclick = this.func;
    wrapper.style.width = "800px";
    wrapper.style.height = "600px";
  
    var a = document.createElement("A");
    a.className = "wrapper__start_button";
    a.innerHTML  += this.main_text;
    var p = document.createElement("P");
    p.className = "wrapper__comment";
    p.innerHTML  += this.comment;
    
    this.root_div.appendChild(wrapper);
    wrapper.appendChild(a);
    wrapper.appendChild(p);
    this.el = wrapper;    
}

SplashScreen.prototype.hide = function(){
    this.el.style.display = "None";
}
SplashScreen.prototype.show = function(){
    this.el.style.display = "inline-block";
}