'use struct';
/*
реализация глупой сортировки и пузырьковой сортировки в сравнении со стандартной sort
алгоритм сортировки взят: https://habrahabr.ru/post/204600/
проведено первичное тестирование на корректность алгоритма 
и сранение на время работы
на массиве из 100 случайных значений в диапозоне от (1, 1000) с повторением операции 1000 раз
stupid_sort:    
avg: 0.27684499999999995
total: 276.84499999999997 
bubble_sort:    
avg: 0.025390000000000214
total: 25.390000000000214
array_sort:    
avg: 0.01389499999999947
total: 13.89499999999947
*/

var trace=false;

/* Глупая сортировка (англ. Stupid sort) –
Сортировка производится от начала массива.
Текущий элемент сравнивается со следующим,
ЕСЛИ следующий меньше, 
ТО эти элементы меняются местами 
  и возвращаемся в начало массива.

Сортировка закончена, когда будет пройден весь массив до конца,
и не будет сделано ни одной перестановки элементов. */
function stupid_sort(data_in){
    var cursor = 0, i=0;
    
    while(i < (data_in.length-1))
        {
           cursor = data_in[i];
           if(cursor > data_in[i+1]){
               data_in[i] = data_in[i+1];
               data_in[i+1] = cursor;
               i = 0
               continue;
           }
           if(trace) 
               console.log(cursor+ " "+data_in[i]+" -> "+data_in[i+1]+"\n "+data_in); 
           i++;
        }
    
    
    return data_in;
}


/*
проходим весь массив сравнивая соседние элементы и если один больше другого то меняем его местами 
последний элемент не рассматриваем - условие уменьшается на 1

*/
trace = false;
function bubble_sort(data_in){
    var cursor = 0, i=0;
    var array_count = data_in.length-1
    while(array_count)
        {
           cursor = data_in[i];
           if(cursor > data_in[i+1]){
               data_in[i] = data_in[i+1];
               data_in[i+1] = cursor;
               }
           if(trace) 
               console.log(cursor+ " "+data_in[i]+" -> "+data_in[i+1]+"\n "+data_in); 
           i++;
            
           if(i>= array_count){
               array_count--;  
               i=0
           }
        }
   return data_in;
}


function test_stupid_sort(){
    var data_in = [2,6, 0,10,9,5,1,7,8,4,3]; 
    var sort_array = stupid_sort(data_in);
    var correct_rez = [0,1,2,3,4,5,6,7,8,9,10];
    if(trace)
        console.log("sort_array: "+sort_array+"\n"+correct_rez);
    console.assert( correct_rez[4] == sort_array[4], "error input: ", data_in);
  }
function test_bubble_sort(){
    var data_in = [2,6, 0,10,9,5,1,7,8,4,3]; 
    var sort_array = bubble_sort(data_in);
    var correct_rez = [0,1,2,3,4,5,6,7,8,9,10];
    if(trace)
        console.log("sort_array: "+sort_array+"\n"+correct_rez);
    console.assert( correct_rez[4] == sort_array[4], "error input: ", data_in);
  }


function performance_stupid_sort(){
    var timeit = new TimeIt();

    var foo = function() {
     data_in = get_random_array(1, 1000, 100);   
     stupid_sort(data_in);
    };

var result = timeit.howLong(1000, foo);
console.log("stupid_sort:    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
}

function performance_bubble_sort(){
    var timeit = new TimeIt();

    var foo = function() {
     data_in = get_random_array(1, 1000, 100);   
     bubble_sort(data_in);
    };

var result = timeit.howLong(1000, foo);
console.log("bubble_sort:    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
}

function performance_array_sort(){
    var timeit = new TimeIt();

    var foo = function() {
        var d = get_random_array(1, 1000, 100);   
        d.sort(function(a,b){return a-b});
        /*
        посылает 2 числа, варианта возврата отрицательное-ноль-положительное
        если отрицательное -> значит b>a
        положительное a>b
        если (40, 100) => 40-100=-60 отрицателное число и 40 ниже 100 -> [40,100]
        если уловие b-a
             100-40=60 положительное -> значит 40 выше 100 и получаем сортировку по убыванию->[100,40]
        */
    };

var result = timeit.howLong(1000, foo);
console.log("array_sort:    ");
console.log("avg: " + result.avg);
console.log("total: " + result.total);
}

function main(){
    // test_stupid_sort();
    performance_stupid_sort();
    //test_bubble_sort();
    performance_bubble_sort();
    performance_array_sort();
    }

main();