'use strict'

function time(){
    var clock, h, m, s;
    clock = new Date();
    h = clock.getHours();
    m = clock.getMinutes();
    s = clock.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock-wrapp')
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('clock-wrapp').style.border = '2px solid green';
    document.getElementById('clock-wrapp').style.width = '100px';
    document.getElementById('clock-wrapp').style.margin = 'auto';
    document.getElementById('clock-wrapp').style.textAlign = 'center';
    document.getElementById('hour').style.color = 'red';
    document.getElementById('min').style.color = 'blue';
    document.getElementById('sec').style.color = 'brown';
    setTimeout(function(){time()}, 1000);
}

function checkTime(i) {
 if (i<10) {i = "0" + i}; // добавим ноль впереди для чисел, которые меньше 10
 return i;
}

time();