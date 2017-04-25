//1. Даны несколько div элементов на html. По первому нажатию на 
//каждый div он перекрашивается зеленым цветом, при повторном 
//нажатии перекрашивается обратно и так далее каждый клик 
//происходит чередование цвета. 

var div1 = document.getElementsByTagName("div");

console.log(div1);

for (i=0; i<div1.length; i++) {

div1[i].onclick = function(){

var color1 = window.getComputedStyle(this).backgroundColor;
    if (color1 === "rgb(127, 255, 212)") {
        this.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        this.style.backgroundColor = "rgb(127, 255, 212)";
    } 
}
}
