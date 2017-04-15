'use struct';
console.log("in side task01.js");
/*
1. Создать функцию которая выводит время в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами. 
*/


function output_time(){
    var time, regexp, hour, time_code;
    time = new Date();
    regexp = /\d+:\d+:\d+/ig;
    hour= regexp.exec(time);
    time_code = hour[0].split(":")
    
    document.getElementById("hour").innerHTML = time_code[0];
    document.getElementById("hour").style.color = '#052C6E';
    document.getElementById("min").innerHTML = time_code[1];
    document.getElementById("min").style.color = '#052C6E';
    document.getElementById("min").style.opacity = 0.85;
    document.getElementById("sec").innerHTML = time_code[2];
    document.getElementById("sec").style.opacity = 0.65;
    document.getElementById("sec").style.color  = '#052C6E';
    };

 