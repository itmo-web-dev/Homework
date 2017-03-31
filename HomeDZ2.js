"use script"
var number

number = prompt("Введите число от -999 до 999");

if ((parseInt(number)>0)&&(number.length===1)) {
    document.write("положительное однозначное число")
} else if ((parseInt(number)>0)&&(number.length===2)) {
    document.write("положительное двузначное число")
} else if ((parseInt(number)>0)&&(number.length===3)) {
    document.write("положительное трехзначное число")
} else if ((parseInt(number)<0)&&(number.length===2)) {
    document.write("отрицательное однозначное число")
} else if ((parseInt(number)<0)&&(number.length===3)) {
    document.write("отрицательное двузначное число")
} else if ((parseInt(number)<0)&&(number.length===4)) {
    document.write("отрицательное трехзначное число")
} else if (parseInt(number)===0) {
    document.write("нулевое число")
} else {document.write("вне диапазона")}


