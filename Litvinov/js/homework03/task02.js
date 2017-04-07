'use struct';
console.log("in side task02.js")
/*
 Написать функцию подсчета суммы от n до m
*/
var trace = false;

function count_number(n, m){
    var i = 0, value, rez;
    var distance = Math.abs(n-m);
    if(n > m){
        i=m;
        value=m;
        distance = distance+m;
    }else{
        i=n;
        value=n;
        distance = distance+n;
    }

    rez = value;
    for(; i < (distance); i++){
        rez += ++value;
        if(trace) console.log(" rez "+rez+" value "+value);
    }
    return rez;
}

function count_number_ui(){
   try{
       var number = d_ocument.forms["form1"].number.value;
       var enter_num = parseInt(number);
       if(isNaN(enter_num)) throw "---дней";
       document.getElementById("span1").innerText = verbal_day(enter_num);
   }
   catch(err) {
       document.getElementById("span1").innerText = err;
   }
}

function test_count_number(){
    var data_in, rez;
    
    rez = count_number(2,5);
    console.assert( 14 == rez, "error input: ", data_in);
    
    rez = count_number(10, 13);
    console.assert( 46 == rez, "error input: ", data_in);
    
    rez = count_number(13, 10);
    console.assert( 46 == rez, "error input: ", data_in);
    
    //console.log("rez: "+rez)        
    console.log("test - verbal_day(num) -> OK")
}

test_count_number();
// verbal_day_ui()