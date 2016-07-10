/*passwordValidationV2

Problem Description

Create a function passwordValidationV2() that receives a string and returns true when:

the string contains at least one letter in uppercase
the string contains at least 2 numbers (digits)
the string contains at least one of these special characters: $ # % & - ! ?
the string has 10 characters or more
Otherwise the function should return true

Stage 2 - config variable

Modify the previous function to use a variable called config being this one an object with the rules
to apply in the validation.

This object should have the following structure:

config = {
    size : 10,
    uppercase : 1,
    numbers : 2,
    special = "$#%&-!?"
}
Modify the function to read the "rules" from this object,

After this modification the behaviour should be same (so the tests should pass the same)

Stage 3 - config parameter

Modify the previous function to receive a second (optional) parameter that will overwrite the config
variable if is passed to the function.

With this change we should be able to use our function with different rules specified in this (extra) 
parameter and also have a default behaviour if is not passed.*/

describe("function passwordValidationV2 that ", function() {
    //1
    it("should exist", function(){
        expect( passwordValidationV2 ).toBeDefined();
    });
    //2
    it("should return a boolean", function(){
        var result = passwordValidationV2();
        expect( typeof(result) ).toBe('boolean');
    });
    describe("should validate for passwords of more than 10 characters", function() {
        //3
        it("psw should have 10 characters or more", function(){
            var result = passwordValidationV2('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //4
        it("should NOT validate for passwords of more than 10 characters", function(){
            var result = passwordValidationV2('abcdef');
            expect( result ).toBe(false);
        });
    });
    describe("special characters ", function() {
        //5
        it("psw should have at least one special chart", function(){
            var result = passwordValidationV2('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //6
        it("psw NOT validate for passwords without one special chart", function(){
            var result = passwordValidationV2('abcdefghijk');
            expect( result ).toBe(false);
        });
    }); 
    describe("minimum 2 numbers", function() {
        //7
        it("psw should have at least two numbers", function(){
            var result = passwordValidationV2('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //8
        it("psw NOT validate for passwords without two numbers", function(){
            var result = passwordValidationV2('$abcdefghijk');
            expect( result ).toBe(false);
        });
    });
    describe("upper case", function() {
        //9
        it("psw should have at least one letter in uppercase", function(){
            var result = passwordValidationV2('U12$abcdefghijk');
            expect( result ).toBe(true);
        });
        //10
        it("psw NOT validate for passwords without one letter in uppercases", function(){
            var result = passwordValidationV2('12$abcdefghijk');
            expect( result ).toBe(false);
        });
    });
});
describe("pass an object as a second parameter to change the requirements", function() {
    describe("it's required 3 numbers", function() {
        //11
        it("then psw NOT validate for passwords without 3 numbers", function(){
            var result = passwordValidationV2('U12$abcdefghijk', {size:10, uppercase:1, numbers:3, special:"$#%&-!?"});
            expect( result ).toBe(false);
        });
        it("then psw should have at least 3 numbers", function(){
            var result = passwordValidationV2('U123$abcdefghijk', {size:10, uppercase:1, numbers:3, special:"$#%&-!?"});
            expect( result ).toBe(true);
        });
    });
    describe("it's required 3 uppercase letters", function() {
        //12
        it("then psw NOT validate for passwords without 3 uppercase letters", function(){
            var result = passwordValidationV2('U12$abcdefghijk', {size:10, uppercase:3, numbers:2, special:"$#%&-!?"});
            expect( result ).toBe(false);
        });
        it("then psw should have at least 3 uppercase letters", function(){
            var result = passwordValidationV2('UPC12$abcdefghijk', {size:10, uppercase:3, numbers:2, special:"$#%&-!?"});
            expect( result ).toBe(true);
        });
    });
    describe("psw only requires a size of 5", function() {
        //13
        it("then psw NOT validate for passwords without size equal to 5", function(){
            var result = passwordValidationV2('UP1$', {size:5, uppercase:2, numbers:1, special:"$#%&-!?"});
            expect( result ).toBe(false);
        });
        it("then psw validate for passwords with size equal or bigger than 5", function(){
            var result = passwordValidationV2('AB1$abcdefghijk', {size:5, uppercase:2, numbers:1, special:"$#%&-!?"});
            expect( result ).toBe(true);
        });
    });
    describe("psw not requiers uppercase", function() {
        //14
        it("then psw pass without uppercase", function(){
            var result = passwordValidationV2('123$abcdefghijk', {size:5, numbers:1, special:"$#%&-!?"});
            expect( result ).toBe(true);
        });
    });
    describe("psw not requiers numbers", function() {
        //15
        it("then psw pass without numbers", function(){
            var result = passwordValidationV2('AB$ab', {size:5, uppercase:2, special:"$#%&-!?"});
            expect( result ).toBe(true);
        });
    });
    describe("psw not requiers special", function() {
        //16
        it("then psw pass without special", function(){
            var result = passwordValidationV2('AB1abcdefghijk', {size:5, uppercase:2, numbers:1});
            expect( result ).toBe(true);
        });
    });
    describe("psw not requiers special", function() {
        //16
        it("then psw pass without special", function(){
            var result = passwordValidationV2('AB1abcdefghijk', {size:5, uppercase:2, numbers:1});
            expect( result ).toBe(true);
        });
    });
    describe("psw not requiers size", function() {
        //16
        it("then psw pass without size", function(){
            var result = passwordValidationV2('AB1#', {uppercase:2, numbers:1, special:"$#%&-!?"});
            expect( result ).toBe(true);
        });
    });
});