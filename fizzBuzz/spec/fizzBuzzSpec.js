/*Kata: FizzBuzz

Write a program that prints the numbers from 1 to 100. But
for multiples of three print "Fizz" instead of the number and
for the multiples of five print "Buzz". For numbers which
are multiples of both three and five print "FizzBuzz?".

Stage 2 - new requirements

A number is fizz if it is divisible by 3 or if it has a 3 in it
A number is buzz if it is divisible by 5 or if it has a 5 in it*/

describe("function fizzBuzz that ", function() {
   it("should exist", function(){
        expect( fizzBuzz ).toBeDefined();
    });
   it("should return an array", function(){
        var result = fizzBuzz();
        expect( typeof(result) ).toBe('object');
    });
   it("should return 1 in the first position of the array", function(){
        var result = fizzBuzz();
        expect( result[0] ).toBe(1);
    });
   it("should return an array 100 elements", function(){
        var result = fizzBuzz();
        expect( result.length ).toBe(100);
    });
   it("should return Fizz in the third position of the array", function(){
        var result = fizzBuzz();
        expect( result[2] ).toBe('Fizz');
    });
   it("should return Buzz in the fifth position of the array", function(){
        var result = fizzBuzz();
        expect( result[4] ).toBe('Buzz');
    });
   it("should return FizzBuzz in the 30th position of the array", function(){
        var result = fizzBuzz();
        expect( result[29] ).toBe('FizzBuzz');
    });
   it("should return FizzBuzz in the 100th position of the array", function(){
        var result = fizzBuzz();
        expect( result[99] ).toBe('Buzz');
    });
   it("should return Fizz if a number contains the number 3 or is divisibe by 3", function(){
        var result = fizzBuzz();
        expect( result[12] ).toBe('Fizz');
    });

});