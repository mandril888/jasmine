/*Kata: Rock Paper Scissors!
Problem Description

We need a function rockPaperScissors() that can receive two parameters
with the move of each of the two players in the game "Rock Paper
Scissors".

The possible values are : "PAPER", "SCISSORS" or "ROCK"

If the function is called with only one parameter the move of the
second player should be randomly generated.*/

describe("function rockPaperScissors that ", function() {
    it("should exist", function(){
        expect( rockPaperScissors ).toBeDefined();
    });
    it("should return a string", function(){
        var result = rockPaperScissors();
        expect( typeof(result) ).toBe('string');
    });
    it("should return tie when you enter ROCK and ROCK", function(){
        var result = rockPaperScissors('ROCK', 'ROCK');
        expect( result ).toBe('ROCK vs ROCK => tie!');
    });
    it("should return tie when you enter SCISSORS and SCISSORS", function(){
        var result = rockPaperScissors('SCISSORS', 'SCISSORS');
        expect( result ).toBe('SCISSORS vs SCISSORS => tie!');
    });
    it("should return tie when you enter PAPER and PAPER", function(){
        var result = rockPaperScissors('PAPER', 'PAPER');
        expect( result ).toBe('PAPER vs PAPER => tie!');
    });
    it("should return SCISSORS when you enter PAPER and SCISSORS", function(){
        var result = rockPaperScissors('PAPER', 'SCISSORS');
        expect( result ).toBe('PAPER vs SCISSORS => SCISSORS wins!');
    });
    it("should return SCISSORS when you enter SCISSORS and PAPER", function(){
        var result = rockPaperScissors('SCISSORS', 'PAPER');
        expect( result ).toBe('SCISSORS vs PAPER => SCISSORS wins!');
    });
    it("should return PAPER when you enter ROCK and PAPER", function(){
        var result = rockPaperScissors('ROCK', 'PAPER');
        expect( result ).toBe('ROCK vs PAPER => PAPER wins!');
    });
    it("should return PAPER when you enter PAPER and ROCK", function(){
        var result = rockPaperScissors('PAPER', 'ROCK');
        expect( result ).toBe('PAPER vs ROCK => PAPER wins!');
    });
    it("should return ROCK when you enter SCISSORS and ROCK", function(){
        var result = rockPaperScissors('SCISSORS', 'ROCK');
        expect( result ).toBe('SCISSORS vs ROCK => ROCK wins!');
    });
    it("should return ROCK when you enter ROCK and SCISSORS", function(){
        var result = rockPaperScissors('ROCK', 'SCISSORS');
        expect( result ).toBe('ROCK vs SCISSORS => ROCK wins!');
    });
    it("should return PAPER, SCISSORS or ROCK when you enter only PAPER", function(){
        var result = rockPaperScissors('PAPER');
        var piecesResult = result.split(" ");
        var bIsProperGenerated = (piecesResult[2] == "PAPER" || piecesResult[2] == "ROCK" || piecesResult[2] == "SCISSORS");

        expect( bIsProperGenerated ).toBe(true);
    }); 
});