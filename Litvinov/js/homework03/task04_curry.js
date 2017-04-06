'use struct';
console.log("in side task04.js")
/*
 Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг. 
*/


function summa(x,y)
{
    var OldX = x;
    var OldY = y;
    
    if (typeof OldY == "undefined")
    {
        return function (NewY)
        {
            return OldX + NewY;
        };
    }
    return x + y;
}
typeof (summa(5));  // function
console.log(summa(5));
console.log(summa(5)(4));
sum = summa(5);
console.log(sum)
console.log(sum(15))

function minus(x,y)
{
    var OldX = x;
    var OldY = y;
    
    if (typeof OldY == "undefined")
    {
        return function (NewY)
        {
            return NewY - OldX  ;
        };
    }
    return y + x;
}
dunc_minus = minus(10);
console.log(dunc_minus(35))

function fontsize(x,y)
{
    var OldX = x;
    var OldY = y;
    var postfix="px"
    
    if (typeof OldY == "undefined")
    {
        return function (NewY)
        {
            return NewY * OldX+postfix;
        };
    }
    return y * x + postfix;
}
var rem = fontsize(16);
console.log(rem(2))
console.log(rem(0.5))

function change_fonts(Id, rem){
    document.getElementById(Id).style.fontSize = rem;
    var text=document.getElementById(Id).innerText;
    document.getElementById(Id).innerText=text+" "+rem;
    }

change_fonts("font32", rem(2))
change_fonts("font16", rem(1.5))
change_fonts("font8", rem(1))
