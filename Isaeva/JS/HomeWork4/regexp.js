//Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 

//var str = prompt("Введите любое число")
//
//var res = str.match(/\d/ig);
//var summ = 0;
//for (var i=0; i<res.length; i++){
//   var a = parseInt(res[i]);
//    summ = summ + a;
//}
//    console.log(summ)

//Дана строка S и символ C. Удвоить каждое вхождение символ C в строку S.
//var str = prompt("Введите строку")
//var res = str.split("с")
//var strokaout = res.join("cc")
//var res = str.split("С")
//var strokaout = res.join("СС")
//document.write(strokaout)

//Проверить что введенный пароль удовлетворяет следующим условиям сложности:
//	- длинна от 9 символов;
//	- содержит обязательно английские буквы верхнего и нижнего регистра;
//	- содержит более двух цифр;
//	- содержит обязательно один из неалфавитных символов (например, !, $, #, %).
 
var str = prompt("Задайте пароль")

var res1 = /.{9,}/.test(str)
if (res1 === true) {
    
    var res2 = /[a-z]/.test(str)
    if (res2 === true) {
        
        var res3 = /[A-Z]/.test(str)
        if (res3 === true) {
            
            var res4 = /\d{2,}/.test(str)
            if (res4 === true) {
                
                var res5 = /\W/.test(str)
                if (res5 === true) {document.write("Пароль соответствует требованиям")}
                else {document.write("Пароль не соответствует требованиям")}
                
            } else {document.write("Пароль не соответствует требованиям")}
            
        } else {document.write("Пароль не соответствует требованиям")}
        
    } else {document.write("Пароль не соответствует требованиям")}

} else {document.write("Пароль не соответствует требованиям")}
    
