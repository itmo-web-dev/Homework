'use strict';

function tableCreate() {
    var row = 10;
    var col = 10;
    var table = document.getElementById("myTable");
    table.style.width = "400px";
    table.style.height = "400px";
    table.setAttribute('border', '1');
    
    var tbdy = document.createElement('tbody');
    var tr, td;
    var pos=1, array=[];
    for (var i = 0; i < row; i++) {
        tr = document.createElement('tr');
        for (var j = 0; j < col; j++) {
            td = document.createElement('td');
            //td.innerText=10;
            tr.appendChild(td);
            array[pos]=td;
            pos++;
            }
        tbdy.appendChild(tr);
    }
    table.appendChild(tbdy);
    return array;
   }


var arr = [];
var diapozon_random = (function(min_in, max_in){
    // var arr = [];
    init_arr=(function(){
        for(var i=1; i<(max_in+1); i++){
            arr[i] = false;
        }
    });
    
    random=(function(min, max) {
          // Math.ceil -возвращает наименьшее число, большее или равное аргументу
          min = Math.ceil(min);
          // Math.floor-возвращает наибольшее целое меньше или равное аргументу
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        })
    
    is_arrayfull=(function(array){
        for(var i=1; i<array.length;i++){
            if(array[i] == false)
                return false;
        }
        return true;
    });
    
    //init_arr();
    // console.log(arr);
    var count=0, temp_random;
    while(true){
        count++;
        // console.log("count: "+count);
        temp_random = random(min_in, max_in);
        //console.log(min_in +" "+max_in);
        // console.log(temp_random);
        // console.log(arr[temp_random]);
        if (arr[temp_random] != true){
            arr[temp_random] = true;
            return temp_random;
            }
        /*
        if(is_arrayfull(arr))
            init_arr();
        */            
        if(count > 500000)
            return "NaN";
                     
    }
});
// console.log(diapozon_random(1, 100));

function render(){
    var filed=[], rnd_field=[];
    // иницифлизируем массив случайных чисел и массив указателей на ячейки поля
    for(var i=1; i < 101; i++){
        filed[i] = 0;
        rnd_field[i] = 0;
    }
    // create empty field
    filed = tableCreate();
    var value;
    for(var i=1; i<101;i++){
        // console.log("i: "+ i);
        value =diapozon_random(1, 101);
        if(rnd_field[value] != 0)
            console.log("error: "+ value);

        rnd_field[value]=value
        for(var k=1; k<101; k++){
            filed[k].innerText=rnd_field[k];
        }
    }
    
}

//render();
