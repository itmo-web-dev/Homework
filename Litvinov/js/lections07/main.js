"use strict";

var node = document.createElement("li");
var textnode = document.createTextNode("NewWater");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
// --------------
var ul = document.getElementsByTagName('ul')[0];
var text = ul.innerHTML;
ul.innerHTML=text + '<li>1</li>';
//-------------
var li = document.createElement('LI')
li.appendChild(document.createTextNode('element'));
ul.appendChild(li);

var li2 = document.getElementById("myList");
console.log(li2);
var node_li = document.createElement("li");
node_li.appendChild(document.createTextNode('taram_pam_pam'));
ul.appendChild(node_li);
console.log(ul);



function lst_elements(){
    var list = document.getElementById('for_list'),
        items = list.childNodes;

    for (var i = 0, length = items.length; i < length; i++)
    {
        if (items[i].nodeType != 1) {
           continue;
        }
        items[i].innerHTML = "<a>text</a>"; 
    }
}

function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water Create");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
/*
setTimeout(function(){alert('text1');}, 5000);
  функция  и задержка в милисекундах 
setInterval(func, 4000);
  цикл перерисовки графики 
от 4000 мс т.к. может быть высокая загрузка 
// setTimeout(function(){alert('text1');}, 5000);
function alertOut(){
    console.log('number');
}
console.log("---- begin -----");
// setInterval(alertOut, 1000);

появляется банер его можно отключить в консоле и он удоляется 

setTimeout(function(){
alertOut(1) 
})
*/

var red_light = document.getElementById("red");
red_light.className= "round zero";
var red_light = document.getElementById("yellow");
red_light.className= "round zero";

var con = 1;
function svetofor(){
    // var light1 = [0,1,0];
    // var light = Math_sd.shifted(light1,1,"left");
    // console.log(light);
    con++;
    if(con > 10000) {  con=1; }

    // for(var i=0;i<light.length; i++){
        var red_light = document.getElementById("red");
        red_light.className= "round zero";
        var red_light = document.getElementById("yellow");
        red_light.className= "round zero";
        var red_light = document.getElementById("green");
        red_light.className= "round zero";
        if(con%4 == 1){
            var red_light = document.getElementById("red");
            red_light.className= "round red";
        }
        if(con%4 == 2){
            var red_light = document.getElementById("yellow");
            red_light.className= "round yellow";
        }
        if(con%4 == 3){
            var red_light = document.getElementById("green");
            red_light.className= "round green";
        }
        if(con%4== 0){
            var red_light = document.getElementById("yellow");
            red_light.className= "round yellow";
        }
    //}
}
///
/*
время в html
  obiect
    print(id){
     var 
     this доступ 
     ....
    }
*/
setInterval(svetofor, 1000);
/* 
red
yellow
green
yello
*/







