"use strict";

console.log("main");


var button=document.getElementById("button_id");
button.onclick=function(event){
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(this.id);
    console.log(event.clientX);
    console.log(event.clientY);
    
        
}