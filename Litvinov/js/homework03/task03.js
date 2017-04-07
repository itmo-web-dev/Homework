'use struct';
console.log("in side task03.js")
/*
 Написать функцию подсчета суммы от n до m
*/
var trace = false;

function factorial(n){
    if (n < 0){
        return "NaN";
    }
    if (n == 0){
        return 1;
    }
    return n*factorial(n-1);
}

function test_factorial(){
    var data_in, rez;
    
    rez = factorial(3);
    console.assert( 6 == rez, "error input: ", rez);
    
    rez = factorial(5);
    console.assert( 120 == rez, "error input: ", rez);
    
    rez = factorial(0);
    console.assert( 1 == rez, "error input: ", rez);
    
    rez = factorial(-1);
    console.assert( "NaN" == rez, "error input: ", rez);
   
    // console.log("rez: "+rez)        
    console.log("test - factorial(num) -> OK")
}

test_factorial();
// verbal_day_ui()