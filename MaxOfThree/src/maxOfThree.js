/*maxOfThree() function

Define a function maxOfThree() that takes three numbers as
arguments and returns the largest of them.*/

function maxOfThree(a,b,c){
	
	if(arguments.length >= 3){
		if(a>b && a>c){
			return a;
		} else if (b>a && b>c){
			return b;
		} else {
			return c;
		}
	} else if (arguments.length === 2){
		if(a>b){
			return a;
		} else {
			return b;
		}
	} else if (arguments.length === 1){
		return a;
	} else {
		return 'Introduce three numbers please';
	}
}