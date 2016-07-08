/*Kata: Drink About
Problem Description

Kids drink toddy. Teens drink coke. Young adults drink beer.
Adults drink whisky. Make a function that receive age, and
return what they drink.

Rules:

Children under 14 old. Teens under 18 old. Young under 21 old.
Adults have 21 or more.*/

describe("function drinkAbout that ", function() {
    it("should exist", function(){
        expect( drinkAbout ).toBeDefined();
    });
    it("should return an string", function(){
        var result = drinkAbout();
        expect( typeof(result) ).toBe('string');
    });
    it("should return toddy if age is 7", function(){
        var result = drinkAbout(7);
        expect( result ).toBe('toddy');
    });
    it("should return toddy if age is under 14", function(){
        var result = drinkAbout(7);
        expect( result ).toBe('toddy');
    });
    it("should return coke if age is between 14 and 18, including 14", function(){
        var result = drinkAbout(17);
        expect( result ).toBe('coke');
    });
    it("should return beer if age is between 18 and 21, including 18", function(){
        var result = drinkAbout(19);
        expect( result ).toBe('beer');
    });
    it("should return whisky if age is equal than 21 or bigger", function(){
        var result = drinkAbout(22);
        expect( result ).toBe('whisky');
    });

});