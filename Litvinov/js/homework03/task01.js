'use struct';
console.log("in side task01.js")
/*
 Напишите функцию (), которая в зависимости от переданных в нее целочисленных аргументов "количество дней", будет выводить слово "день" в нужно форме ("если передали - 1, то 1 день", "если передали - 3, то 3 дня" и т.д). 
*/
/*
1 день прошел
2 дня  прошло 
3 дня  
4 дня 
5 дней 
6 дней   
7 дней
8 дней
10 дней
100 дней */

function verbal_day(num){
    var past = ["прошло", "прошел"];
    var now = "сегодня";
    var future = ["день", "дня","дней"];
    
    var day_name=future[0];
    switch(Math.abs(num)){
        case 1: day_name = future[0];
                break;
        case 2:
        case 3:
        case 4: day_name = future[1];
                break;
        default:
                day_name = future[2];
                break;
    }
    // числительные оканчивающиеся на 1(21 день, 31 день )
    var n = num.toString();
    if (n[n.length-1] == "1")
        day_name = future[0];
    
    if (num == 0){
        return now;
    }else if (num == -1){
        return past[1]+" 1 "+day_name;
    }else if (num < -1){
        return past[0]+" "+Math.abs(num)+" "+ day_name;
    }else{
        return num+" "+day_name;
    }
}

function verbal_day_ui(){
   try{
       var number = document.forms["form1"].number.value;
       var enter_num = parseInt(number);
       if(isNaN(enter_num)) throw "---дней";
       document.getElementById("span1").innerText = verbal_day(enter_num);
   }
   catch(err) {
       document.getElementById("span1").innerText = err;
   }
}

function test_verbal_day(){
    var data_in, rez;
    
    data_in = 2; rez = verbal_day(data_in);
    console.assert( "2 дня" == rez, "error input: ", data_in);
    
    data_in = 5;  rez = verbal_day(data_in);
    console.assert( "5 дней" == rez, "error input: ", data_in);
    
    data_in = 10;  rez = verbal_day(data_in);
    console.assert( "10 дней" == rez, "error input: ", data_in);
    
    data_in = 0;  rez = verbal_day(data_in);
    console.assert( "сегодня" == rez, "error input: ", data_in);
    
    data_in = -1;  rez = verbal_day(data_in);
    console.assert("прошел 1 день" == rez, "error input: ", data_in);
    
    data_in = -2;  rez = verbal_day(data_in);
    console.assert( "прошло 2 дня" == rez, "error input: ", data_in);
    
    data_in = -10;  rez = verbal_day(data_in);
    console.assert( "прошло 10 дней" == rez, "error input: ", data_in);
    
    console.log("test - verbal_day(num) -> OK")
}

test_verbal_day()
verbal_day_ui()