'use struct';
console.log("in side task02.js");
/*
2 Заданы два массива A и B необходимо их объединить 
в один массив C так, чтобы в массиве остались уникальные 
(неповторяющиеся) элементы. 
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].
*/
(function(){
var trace = false;// true - for view debug log in console    

function combite_array(A, B){
    var result = [];
    if(A==null && B==null){
        return result;
    }

    var j, i=A.length;
    for(j=0; j<B.length;){
       A[i++]=B[j++];
    }  
    
    /*
    function custom_sort(a,b){
        if (typeof(a)!=typeof(b)){
            return 1;
        }
        return a-b;
    };
    */
    // A.sort(function(a,b){return a-b});
    A.sort(function(a,b){ 
        if (typeof(a)!=typeof(b)){
            return 1;}
        return a-b;});
    
    if(trace) console.log(A);
    
    for(var i=0, k=0; i<A.length ; i++){
        if(result[result.length-1] != A[i]){
           result[k++] = A[i];
        }
    }
    if(trace) console.log(`результат: ${result}`);
    return result;
}
    
// release    
if (!trace){
    var A=[1, 2, 5, 10, 8, 4];
    var B=[2, 3, 4, 9, 8, 5]; 
    console.log(`Дано: \n${A} \n${B}`);
    console.log(combite_array(A, B));
}
    
    

describe("task_02 combine_array", function(){
    var res_correct, msg;
    var A=[1, 2, 5, 10, 8, 4];
    var B=[2, 3, 4, 9, 8, 5]; 
    res_correct=[ 1, 2, 3, 4, 5, 8, 9, 10 ];
    msg =`объединение массивов ${A} и ${B} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(combite_array(A,B)).toEqual(res_correct);
    });
});    

describe("task_02 combine_array", function(){
    var res_correct, msg;
    var A=[];
    var B=[]; 
    res_correct=[];
    msg =`объединение массивов ${A} и ${B} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(combite_array(A,B)).toEqual(res_correct);
    });
});    

describe("task_02 combine_array", function(){
    var res_correct, msg;
    var A=[1, 2, 5, "test", 8, 4];
    var B=[2, "test", 4, "g", 8, 5]; 
    res_correct=[ 1,2,4,5,8,"test", "g"];
    msg =`объединение массивов ${A} и ${B} результат: {1}`.replace('{1}',res_correct);
    it(msg, function(){
       expect(combite_array(A,B)).toEqual(res_correct);
    });
}); 

    
})();
