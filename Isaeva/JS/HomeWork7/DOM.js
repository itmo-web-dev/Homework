//1. Создать функцию которая выводит время в html и обновляет значения каждую секунду. 
//Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.
//


var hours = document.createElement("div");
hours.className = "hours col-0"
document.body.appendChild(hours)

var minutes = document.createElement("div");
minutes.className = "minutes col-0"
document.body.appendChild(minutes)

var seconds = document.createElement("div");
seconds.className = "seconds col-0"
document.body.appendChild(seconds)

function actualtime(){
    hours.innerHTML = (new Date).getHours()+":"
    minutes.innerHTML = (new Date).getMinutes()+":"
    seconds.innerHTML = (new Date).getSeconds()
}
setInterval(actualtime,1000)