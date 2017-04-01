'use struct';
/*
1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
В решении использовать только математические и логические операторы. Результат в консоль.
Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!

в прямоугольном треугольнике сумма квадратов катетов равна кадрату гипатинузы 
a*a+b*b=c*c
3*3+4*4=5*5
даны точки A(x1, y1) B(x2, y2) C(x3,y3)
AB = sqrt(pow(x2-x1,2)+pow(y2-y1,2))
BC = sqrt(pow(x3-x2,2)+pow(y3-y2,2))
CA = sqrt(pow(x1-x3,2)+pow(y1-y3,2))
*/

function is_right_triangle(AB, BC, CA){
   if (((AB*AB+BC*BC)===CA*CA)||((AB*AB+CA*CA)===BC*BC)||((BC*BC+CA*CA)===AB*AB)){
       return true;
   }
   else{
       return false;
   } 
}

function is_triangle(AB,BC,CA){
    if((AB+BC<=CA)||(AB+CA<=BC)||(CA+BC<=AB)){
        return true;
    }else{
        return false;
    }
}
 
function check_triangle(data_in){
    var A,B,C,AB,BC,CA;
    A = {'x': data_in[0][0],'y': data_in[0][1]};
    B = {'x': data_in[1][0],'y': data_in[1][1]};
    C = {'x': data_in[2][0],'y': data_in[2][1]};
    
    AB = Math.sqrt(Math.pow(B.x-A.x,2)+Math.pow(B.y-A.y,2));
    BC = Math.sqrt(Math.pow(C.x-B.x,2)+Math.pow(C.y-B.y,2));
    CA = Math.sqrt(Math.pow(A.x-C.x,2)+Math.pow(A.y-C.y,2));
    
    if(is_triangle(AB, BC, CA)){
        return "введенные координаты не треугольник "+ [A, B, C, AB, BC, CA];
    }
    
    if(is_right_triangle(AB, BC, CA)){
        return "прямоугольный треугольник" + [A, B, C, AB, BC, CA];
        }
    else{
        return "не прямоугольный треугольник" + [A, B, C, AB, BC, CA];
    }
}

function main(){
    var data =[
        [0, 0],
        [3, 0],
        [3, 4]];
    var value = check_triangle(data);
    console.log(value);
    
    var data =[
        [0, 0],
        [4, 0],
        [3, 4]];
    var value = check_triangle(data);
    console.log(value);
    
    var data =[
        [0, 0],
        [3, 0],
        [2, 0]];
    var value = check_triangle(data);
    console.log(value);
}

main();