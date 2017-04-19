'use struct';
console.log("in side task01.js");
/*
1. Создать функцию которая выводит время в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами. 
*/

function divParam(name, color, tag){
    var obj = new Object();
    obj.name = name;
    obj.color = color;
    obj.data_tag = tag;
    return obj;
}


var button=document.getElementsByClassName('d1');
for(var i=0; i<button.length;i++){
    button[i].onclick = function(event){
            var div_version = this.getAttribute('data-color-div');
            var div_index = this.className.split(" ").splice(-1,1);
            var div_color = this.style.backgroundColor;
            if(div_color == "green"){
                this.style.backgroundColor = "";
            }else{
                this.style.backgroundColor = "green";
            }
		}
}

