/*maxOfThree() function

Define a function maxOfThree() that takes three numbers as
arguments and returns the largest of them.*/

describe("function maxOfThree that ", function() {
    it("should exist", function(){
        expect( maxOfThree ).toBeDefined();
    });
    it("should return a number", function(){
        var result = maxOfThree(1,2,3);
        expect( typeof(result) ).toBe('number');
    });
    it("should return a number", function(){
        var result = maxOfThree();
        expect( typeof(result) ).toBe('string');
    });
    it("return max of three num 3", function(){
    var result = maxOfThree(1,2,3);
    expect( result ).toBe(3);
    });
    it("return max of three num 7", function(){
    var result = maxOfThree(1,7,3);
    expect( result ).toBe(7);
    });
    it("should return a number", function(){
        var result = maxOfThree(5,2);
        expect( result ).toBe(5);
    });
    it("should return a number", function(){
        var result = maxOfThree(10);
        expect( result ).toBe(10);
    });

});