'use struct';
/*
3. Задан числовой массив: [2,3,7,13,5,0,20]. Найти (мин, макс) значение в массиве, найти среднее, удалить первый и последний элемент
*/
function prn(str){
    console.log(str);
}

/* min max среднее удолить первый и последний элемент массива */
var trace=false;

function max(data_in){
    var max = data_in[0];
    var pos = 0;
    for (var i=0; i<data_in.length;i++){
        if(max < data_in[i])
            max=data_in[i];
            pos = i;
    }    
    var ret = new Object();
    ret.max = max;
    ret.index = pos;
    return ret;
}

function min(data_in){
    var min = data_in[0];
    var pos = 0;
    for (var i=0; i<data_in.length;i++){
        if(min > data_in[i])
            min=data_in[i];
            pos = i;
    }    
    var ret = new Object();
    ret.min = min;
    ret.index = pos;
    return ret;
}

function average(data_in){
    var data=0;
    var pos = 0;
    for (var i=0; i<data_in.length;i++){
        data = data+ data_in[i];
        }
    if(trace) prn(data);
    if(trace) prn(data_in.length);
     
    average = data/data_in.length;
    return average.toFixed(3);  
}

function main(){
    var array = [2, 3, 7, 13, 5, 0, 20];
    prn(array);
    prn(max(array));
    prn(min(array));
    prn(average(array));

    var remove_element = array;
    prn(array);
    remove_element.pop();
    prn(remove_element);
    remove_element.shift();
    prn(remove_element);
    }

main();