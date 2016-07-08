/*Kata: Rock Paper Scissors!
Problem Description

We need a function rockPaperScissors() that can receive two
parameters with the move of each of the two players in the game
"Rock Paper Scissors".

The possible values are : "PAPER", "SCISSORS" or "ROCK"

If the function is called with only one parameter the move of the
second player should be randomly generated.*/

function rockPaperScissors(a,b){
	var playerA = a;
	var playerB = b;
	var result = '';
	var options = ['SCISSORS', 'PAPER', 'ROCK'];

	if (!a) return "you don't enter any options";

	if ( playerB === undefined ){
		playerB = options[Math.floor(Math.random() * options.length)];
	}

	if ( playerA === playerB ) {
		result = playerA + ' vs ' + playerA + ' => tie!';
	} else if ( (playerA==='SCISSOR') || (playerB==='SCISSORS') ){
		if ( (playerA==='PAPER') || (playerB==='PAPER') ) {
			result = playerA + ' vs ' + playerB + ' => SCISSORS wins!';
		} else {
			result = playerA + ' vs ' + playerB + ' => ROCK wins!';
		}
	} else if ( (playerA==='ROCK') || (playerB==='ROCK') ){
		if ( (playerA==='PAPER') || (playerB==='PAPER') ) {
			result = playerA + ' vs ' + playerB + ' => PAPER wins!';
		} else {
			result = playerA + ' vs ' + playerB + ' => ROCK wins!';
		}
	} else if ( (playerA==='PAPER') || (playerB==='PAPER') ){
		if ( (playerA==='ROCK') || (playerB==='ROCK') ) {
			result = playerA + ' vs ' + playerB + ' => PAPER wins!';
		} else {
			result = playerA + ' vs ' + playerB + ' => SCISSORS wins!';
		}
	}
	return result;
}