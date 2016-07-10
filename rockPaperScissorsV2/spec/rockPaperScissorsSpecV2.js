/*Kata: Rock Paper Scissors!
Problem Description

We need a function rockPaperScissors() that can receive two parameters
with the move of each of the two players in the game "Rock Paper
Scissors".

The possible values are : "PAPER", "SCISSORS" or "ROCK"

If the function is called with only one parameter the move of the
second player should be randomly generated.*/

describe("function game.rockPaperScissors that ", function() {
    it("should exist", function(){
        expect( game.rockPaperScissors ).toBeDefined();
    });
    it("should return a string", function(){
        var result = game.rockPaperScissors();
        expect( typeof(result) ).toBe('string');
    });
    it("should return tie when you enter ROCK and ROCK", function(){
        var result = game.rockPaperScissors('ROCK', 'ROCK');
        expect( result ).toBe('ROCK vs ROCK => tie!');
    });
    it("should return tie when you enter SCISSORS and SCISSORS", function(){
        var result = game.rockPaperScissors('SCISSORS', 'SCISSORS');
        expect( result ).toBe('SCISSORS vs SCISSORS => tie!');
    });
    it("should return tie when you enter PAPER and PAPER", function(){
        var result = game.rockPaperScissors('PAPER', 'PAPER');
        expect( result ).toBe('PAPER vs PAPER => tie!');
    });
    it("should return SCISSORS when you enter PAPER and SCISSORS", function(){
        var result = game.rockPaperScissors('PAPER', 'SCISSORS');
        expect( result ).toBe('PAPER vs SCISSORS => SCISSORS wins!');
    });
    it("should return SCISSORS when you enter SCISSORS and PAPER", function(){
        var result = game.rockPaperScissors('SCISSORS', 'PAPER');
        expect( result ).toBe('SCISSORS vs PAPER => SCISSORS wins!');
    });
    it("should return PAPER when you enter ROCK and PAPER", function(){
        var result = game.rockPaperScissors('ROCK', 'PAPER');
        expect( result ).toBe('ROCK vs PAPER => PAPER wins!');
    });
    it("should return PAPER when you enter PAPER and ROCK", function(){
        var result = game.rockPaperScissors('PAPER', 'ROCK');
        expect( result ).toBe('PAPER vs ROCK => PAPER wins!');
    });
    it("should return ROCK when you enter SCISSORS and ROCK", function(){
        var result = game.rockPaperScissors('SCISSORS', 'ROCK');
        expect( result ).toBe('SCISSORS vs ROCK => ROCK wins!');
    });
    it("should return ROCK when you enter ROCK and SCISSORS", function(){
        var result = game.rockPaperScissors('ROCK', 'SCISSORS');
        expect( result ).toBe('ROCK vs SCISSORS => ROCK wins!');
    });
    it("should return PAPER, SCISSORS or ROCK when you enter only PAPER", function(){
        var result = game.rockPaperScissors('PAPER');
        var piecesResult = result.split(" ");
        var bIsProperGenerated = (piecesResult[2] == "PAPER" || piecesResult[2] == "ROCK" || piecesResult[2] == "SCISSORS");

        expect( bIsProperGenerated ).toBe(true);
    }); 
});
describe("function game.winner that ", function() {
    it("should exist", function(){
        expect( game.winner ).toBeDefined();
    });
    it("should return a string", function(){
        var result = game.winner();
        expect( typeof(result) ).toBe('string');
    });
});