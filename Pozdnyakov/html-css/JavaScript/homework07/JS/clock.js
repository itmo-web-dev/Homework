(function () {
    'use strict';

    console.log('Задачки');
    /*1. Создать функцию которая выводит время в html и обновляет значения каждую секунду. 
    Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.*/
    
    
    var time;
    var hours;
    var minutes;
    var seconds;
    var span;
    var tagP;

    function myClock() {
        tagP = document.getElementsByTagName('body');
        //if (span.length != 0) {
        //    tagP[0].removeChild(span[0])
        //    tagP[0].removeChild(span[0])
        //    tagP[0].removeChild(span[0])
        //};    
        //for (var i=0; i < 3; i++) {  
        //span =  document.createElement('span'); 
        //tagP[0].appendChild(span);
        //};  
        //span = document.getElementsByTagName('span');
        time = new Date();
        hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
        //span[0].setAttribute("style", "color: red;");
        document.getElementById('red').innerHTML = hours;
        //span[1].setAttribute("style", "color: yellow;");
        document.getElementById('green').innerHTML = minutes;
        //span[2].setAttribute("style", "color: green;"); 
        document.getElementById('yellow').innerHTML = seconds;
    }
    var timer = setInterval(function () {
        myClock();
    }, 1000);

}());