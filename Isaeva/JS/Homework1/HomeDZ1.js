"use script"
var one, two, three;

one = parseInt(prompt("Введите первое число"));
two = parseInt(prompt("Введите второе число"));
three = parseInt(prompt("Введите третье число"));

if ((one<two)&&(one<three)) {
    document.write("наименьшее число: ", one)
    } else if ((two<one)&&(two<three)) {
        document.write("наименьшее число: ", two)
    } else {document.write("наименьшее число: ", three)}