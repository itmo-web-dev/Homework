'use struct';
console.log("in side task01.js");
/*
1 Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 ? x ? 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.
*/

(function (){
    
function func(x){
    if(x >= 1){
        y = 5.0/x;
    }else{
        y=x*x - 4*x;
    }
    return y;
};

// паттерн фабрика для создания объекта
function generate_data(min, max, delta, type, func){
    if (min > max)
        throw "wrong position min and max";
    var data_line = new Object;
    data_line.x = [];
    data_line.y = [];
    data_line.type = type;
    data_line.line = { color: 'rgb(55, 128, 191)', width: 5};
    
    for(var x=min, j=0; x<max; x+=delta,j++){
        data_line.x[j] = x;
        data_line.y[j] = func(x);
        };
    
    return data_line;
};

try{
    var trace1 =  generate_data(-5, 5, 0.01, 'scatter', func); // "scatter"
}catch(err){
    alert("error: "+err);
};
// console.log(trace1);
Plotly.newPlot('graph_func', [trace1]);   
})();
    
    
