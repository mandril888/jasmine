/*Kata: Rock Paper Scissors!
Problem Description

We need a function rockPaperScissors() that can receive two
parameters with the move of each of the two players in the game
"Rock Paper Scissors".

The possible values are : "PAPER", "SCISSORS" or "ROCK"

If the function is called with only one parameter the move of the
second player should be randomly generated.*/


var game = {
  player1: 0,
  player2: 0,
  rockPaperScissors : function(a,b) {
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
			playerA === 'SCISSOR' ? this.player1++ : this.player2++;
		} else {
			result = playerA + ' vs ' + playerB + ' => ROCK wins!';
			playerA === 'ROCK' ? this.player1++ : this.player2++;
		}
	} else if ( (playerA==='ROCK') || (playerB==='ROCK') ){
		if ( (playerA==='PAPER') || (playerB==='PAPER') ) {
			result = playerA + ' vs ' + playerB + ' => PAPER wins!';
			playerA === 'PAPER' ? this.player1++ : this.player2++;
		} else {
			result = playerA + ' vs ' + playerB + ' => ROCK wins!';
			playerA === 'ROCK' ? this.player1++ : this.player2++;
		}
	} else if ( (playerA==='PAPER') || (playerB==='PAPER') ){
		if ( (playerA==='ROCK') || (playerB==='ROCK') ) {
			result = playerA + ' vs ' + playerB + ' => PAPER wins!';
			playerA === 'PAPER' ? this.player1++ : this.player2++;
		} else {
			result = playerA + ' vs ' + playerB + ' => SCISSORS wins!';
			playerA === 'SCISSOR' ? this.player1++ : this.player2++;
		}
	}

	return result;
 },

winner : function(){
	if(this.player1 > this.player2){
	 return 'Player 1 is winning';
	} else if ( this.player1 < this.player2 ){
		return 'Player 2 is winning';
	} else {
		return 'They are tie';
	}
}

}
