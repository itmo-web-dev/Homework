'use struct';
console.log("in side task00.js");
/*
 тест использования Jasmine unit test 
*/

    
function is_jasmine_works() {
    return true;
};

describe("task_00 is_jasmine_works", function(){
    it('return true', function(){
       expect(is_jasmine_works()).toEqual(true);
    });
});
    
