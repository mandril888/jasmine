/*Kata: FizzBuzz

Write a program that prints the numbers from 1 to 100. But
for multiples of three print "Fizz" instead of the number and
for the multiples of five print "Buzz". For numbers which
are multiples of both three and five print "FizzBuzz?".

Stage 2 - new requirements

A number is fizz if it is divisible by 3 or if it has a 3 in it
A number is buzz if it is divisible by 5 or if it has a 5 in it*/

function fizzBuzz(){
	var numbers = [];
	for (var i = 1; i < 101; i++) {
		var toString = i.toString();
		if ( (i%3 === 0) && (i%5 === 0) ) {
			numbers.push('FizzBuzz');
		} else if ( (i%3 === 0) || (toString.indexOf('3') !== -1) ){
			numbers.push('Fizz');
		} else if (i%5 === 0){
			numbers.push('Buzz');
		} else {
		numbers.push(i);
		}
	}
	return numbers;
}