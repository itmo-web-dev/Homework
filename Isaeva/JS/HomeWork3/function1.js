"use strict"

//сумма от n до m
//function summa (n, m) {
//    if (n === m) return m;
//    return n + summa(n+1, m);
//}
//console.log(summa(2, 5))


////Написать функцию factorial(n), которая возвращает факториал числа n, использовать рекурсию!
//
//function factorial(n) {
//   if (n===1) return n;
//    return n * factorial(n-1);
//}
//console.log(factorial(9))


////Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг. 
//
//var a = parseInt(prompt("введите число"));
//var b = parseInt(prompt("введите шаг"));
//function vichislenie(a,b) {
//    return function shagcarry(b) {
//        var c = a-b;
//        console.log(c)
//    }
//}
//vichislenie(a)(b);


//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

var arr = [];
function random() {
var chislo = (Math.round(Math.random()*100));
if (check!=false) {
    alert (chislo)}
    else return 


function check (){
var i=arr.length;
if (arr.indexOf(chislo)>=0) {
    return false
    }else{
    arr[i]=chislo}
    console.log(arr)
}
console.log(check())

        }
random()








