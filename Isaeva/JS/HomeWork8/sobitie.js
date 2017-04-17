//1. Даны несколько div элементов на html. По первому нажатию на 
//каждый div он перекрашивается зеленым цветом, при повторном 
//нажатии перекрашивается обратно и так далее каждый клик 
//происходит чередование цвета. 


var div1 = document.getElementById("one");

div1.onclick = function(){

var color1 = window.getComputedStyle(div1).backgroundColor;
    if (color1 === "rgb(127, 255, 212)") {
        div1.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        div1.style.backgroundColor = "rgb(127, 255, 212)";
    } 
}


var div2 = document.getElementById("two");

div2.onclick = function(){

var color1 = window.getComputedStyle(div2).backgroundColor;
    if (color1 === "rgb(127, 255, 212)") {
        div2.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        div2.style.backgroundColor = "rgb(127, 255, 212)";
    } 
}


var div3 = document.getElementById("three");

div3.onclick = function(){

var color1 = window.getComputedStyle(div3).backgroundColor;
    if (color1 === "rgb(127, 255, 212)") {
        div3.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        div3.style.backgroundColor = "rgb(127, 255, 212)";
    } 
}