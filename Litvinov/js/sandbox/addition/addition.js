'use struct';
/*
сравнить производительность операций сборки строк
*/

var trace=false;

/*
+
arr.join()
`${v}`
*/
function get_array(){
   return ['ssdfdfgs','ssdfgdfgs','ssdfgdfgs',
           'ssdfgdfgdfgs','ssdfgdfgdfgs','ssdfgdfgdfgs',
          'ssdfggs','ssdfggs','ssgdfgs'];  
}

function simple_add(arr){
    var result = ""
    for(var j=0; j< 1000; j++){
        for(var i=0;i<arr.length;i++){
            result += arr[i];
        }
    }
    return result;
}

function simple_add2(arr){
    var result = ""
    for(var j=0; j< 1000; j++){
        for(var i=0;i<arr.length;i++){
            result = result + arr[i];
        }
     }
    return result;
}

function array_join(arr){
    var result = '';
    for(var j=0; j< 1000; j++){
        result= arr.join();
    }
    return result
}

function template(arr){
    var result="";
    for(var j=0; j< 1000; j++){
        result = `${arr[0]} ${arr[1]} ${arr[2]}   ${arr[3]} ${arr[4]} ${arr[5]}    ${arr[6]} ${arr[7]} ${arr[8]}`;
    }
    return result;
}

var cycle = 10000;
function performance_simple_add(){
    var timeit = new TimeIt();

    var foo = function() {
     data_in = get_array();   
     simple_add(data_in);
    };

var result = timeit.howLong(cycle, foo);
console.log("simple_add result += arr[i]; :    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
console.log("\n ");
};

function performance_simple_add2(){
    var timeit = new TimeIt();

    var foo = function() {
     data_in = get_array();   
     simple_add2(data_in);
    };

var result = timeit.howLong(cycle, foo);
console.log("simple_add2 result = result + arr[i]; :    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
console.log("\n ");
};

function performance_array_join(){
    var timeit = new TimeIt();

    var foo = function() {
     data_in = get_array();   
     simple_add(data_in);
    };

var result = timeit.howLong(cycle, foo);
console.log("array_join arr.join(); :    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
console.log("\n ");
};

function performance_template(){
    var timeit = new TimeIt();

    var foo = function() {
     data_in = get_array();   
     template(data_in);
    };

var result = timeit.howLong(cycle, foo);
console.log("template `${arr[0]} ${arr[1]} ${arr[2]}' :    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
console.log("\n ");
};


function main(){
    performance_simple_add();
    performance_simple_add2();
    performance_array_join();
    performance_template();
    }

main();