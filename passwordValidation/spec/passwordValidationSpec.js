/*passwordValidation

Problem Description

Create a function passwordValidation() that receives a string and returns true when:

the string contains at least one letter in uppercase
the string contains at least 2 numbers (digits)
the string contains at least one of these special characters: $ # % & - ! ?
the string has 10 characters or more
Otherwise the function should return true*/

describe("function passwordValidation that ", function() {
    //1
    it("should exist", function(){
        expect( passwordValidation ).toBeDefined();
    });
    //2
    it("should return a boolean", function(){
        var result = passwordValidation();
        expect( typeof(result) ).toBe('boolean');
    });
    describe("should validate for passwords of more than 10 characters", function() {
        //3
        it("psw should have 10 characters or more", function(){
            var result = passwordValidation('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //4
        it("should NOT validate for passwords of more than 10 characters", function(){
            var result = passwordValidation('abcdef');
            expect( result ).toBe(false);
        });
    });
    describe("special characters ", function() {
        //5
        it("psw should have at least one special chart", function(){
            var result = passwordValidation('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //6
        it("psw NOT validate for passwords without one special chart", function(){
            var result = passwordValidation('abcdefghijk');
            expect( result ).toBe(false);
        });
    }); 
    describe("minimum 2 numbers", function() {
        //7
        it("psw should have at least two numbers", function(){
            var result = passwordValidation('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //8
        it("psw NOT validate for passwords without two numbers", function(){
            var result = passwordValidation('$abcdefghijk');
            expect( result ).toBe(false);
        });
    });
    describe("upper case", function() {
        //9
        it("psw should have at least one letter in uppercase", function(){
            var result = passwordValidation('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //10
        it("psw NOT validate for passwords without one letter in uppercases", function(){
            var result = passwordValidation('12$abcdefghijk');
            expect( result ).toBe(false);
        });
    }); 
});