describe("task_03 Math_sd.min", function(){
    var res_correct, msg;
    var value_in = [3,6,7,8];
    res_correct=3;
    msg = "минимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
       expect(Math_sd.min(value_in)).toEqual(res_correct);
    });
 });      
 describe("task_03 Math_sd.min", function(){
    var res_correct, msg;   
    var value_in = [-10, 6,7,8];
    res_correct= -10;
    msg = "минимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.min(value_in)).toEqual(res_correct);
    });
});    

describe("task_03 Math_sd.max", function(){
    var res_correct, msg;
    var value_in = [3,6,7,8];
    res_correct=8;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
       expect(Math_sd.max(value_in)).toEqual(res_correct);
    });
 });    
describe("task_03 Math_sd.max", function(){
    var res_correct, msg;    
    var value_in = [-10, 6,7,8];
    res_correct= 8;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.max(value_in)).toEqual(res_correct);
    });
});

describe("task_03 Math_sd.average", function(){
    var res_correct, msg;    
    var value_in = [-10, 6,7,8];
    res_correct= 2.75;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.average(value_in)).toEqual(res_correct);
    });
});    

describe("task_03 Math_sd.average", function(){
    var res_correct, msg;    
    var value_in = [10, 6,7,8];
    res_correct= 7.75;
    msg = "максимальное значение из {0}: {1}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        expect(Math_sd.average(value_in)).toEqual(res_correct);
    });
});

describe("task_03 Math_sd.shifted", function(){
    var res_correct, msg;    
    var value_in = [1,2,3,4,5,6,7,8,9,10], side = "left", count=3;
    res_correct= [ 8, 9, 10, 1, 2, 3, 4, 5, 6, 7 ];
    msg = "сдвиг ввлево {0} на {2}: \n {1}".replace('{1}',res_correct).replace('{0}',value_in).replace('{2}',count).replace('{4}',side);
    it(msg, function(){
        expect(Math_sd.shifted(value_in, 3, side)).toEqual(res_correct);
    });
});

describe("task_03 Math_sd.shifted", function(){
    var res_correct, msg;    
    var value_in = [1,2,3,4,5,6,7,8,9,10], side = "right", count=3;
    res_correct= [ 4, 5, 6, 7, 8, 9, 10, 1, 2, 3 ];
    msg = "сдвиг {4} {0} на {2}: \n {1}".replace('{1}',res_correct).replace('{0}',value_in).replace('{2}',count).replace('{4}',side);
    it(msg, function(){
        expect(Math_sd.shifted(value_in, 3, side)).toEqual(res_correct);
    });
});

describe("task_03 Math_sd.shifted", function(){
    var res_correct, msg;    
    var value_in = [1,2,3,4,5,6,7,8,9,10], side = "right", count=3;
    res_correct= [ 4, 5, 6, 7, 8, 9, 10, 1, 2, 3 ];
    msg = "обратимость {0}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        var tmp = Math_sd.shifted(value_in, 3, "left");
        var result =  Math_sd.shifted(tmp, 3, "right"); 
        expect(result).toEqual(value_in);
    });
});

describe("task_03 Math_sd.shifted", function(){
    var res_correct, msg;    
    var value_in = [1,2,3,4,5,6,7,8,9,10], side = "right", count=3;
    res_correct= [1,2,3,4,5,6,7,8,9,10];
    msg = "не изменяемость исходного массива {0}".replace('{1}',res_correct).replace('{0}',value_in);
    it(msg, function(){
        var tmp = Math_sd.shifted(value_in, 3, "left");
        expect(value_in).toEqual(res_correct);
    });
});