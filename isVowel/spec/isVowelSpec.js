// Write a function 'isVowel' that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

describe("function isVowel that ", function() {
    it("should exist", function(){
        expect( isVowel ).toBeDefined();
    });
    it("should return a boolean value", function(){
    	var result = isVowel();
        expect( typeof(result) ).toBe('boolean');
    });
    it("should return true when called isVowel('a')", function(){
    var result = isVowel('a');
    expect( result ).toBe(true);
    });
    it("should return true when called isVowel('e')", function(){
    var result = isVowel('e');
    expect( result ).toBe(true);
    });
    it("should return true when called isVowel('i')", function(){
    var result = isVowel('i');
    expect( result ).toBe(true);
    });
    it("should return true when called isVowel('o')", function(){
    var result = isVowel('o');
    expect( result ).toBe(true);
    });
    it("should return true when called isVowel('u')", function(){
    var result = isVowel('u');
    expect( result ).toBe(true);
    });
    it("should return FLASE when called isVowel('z')", function(){
    var result = isVowel('z');
    expect( result ).toBe(false);
    });

});