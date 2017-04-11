'use strict';

var a, b, c;
a = parseInt (prompt('Введите первое число'));
b = parseInt (prompt('Введите второе число'));
c = parseInt (prompt('Введите третье число'));

if ((a < b) && (a < c)) {
    alert ('Наименьшее число: ' + a);
} else if ((b < a) && (b < c)){
    alert ('Наименьшее число: ' + b);
} else if ((c < a) && (c < b)) {
    alert ('Наименьшее число: ' + c);
}
   