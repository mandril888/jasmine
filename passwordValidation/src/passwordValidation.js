/*passwordValidation

Problem Description

Create a function passwordValidation() that receives a string and returns true when:

the string contains at least one letter in uppercase
the string contains at least 2 numbers (digits)
the string contains at least one of these special characters: $ # % & - ! ?
the string has 10 characters or more
Otherwise the function should return true*/

function passwordValidation( password ) {
	var bMore10Chars, specialCharacters,  bContainsSpecialChars, bContains2Digits, bContainsUpperCase;

	if (!password) return false;
	
	bMore10Chars = password.length >= 10;

	specialCharacters = '$#%&-!?';
	bContainsSpecialChars = false;
	for (var i=0; i<password.length; i++) {
		if (specialCharacters.indexOf(password[i]) != -1 )
			bContainsSpecialChars = true;
	}

	var count = 0;
	bContains2Digits = false;
	for (var i = 0; i < password.length; i++) {
		if( (password.charCodeAt(i) >= 48) && (password.charCodeAt(i) <= 57) ) {
			count += 1;
			if (count === 2){
				bContains2Digits = true;
			}
		}	
	}

	bContainsUpperCase = false;
	for (var i = 0; i < password.length; i++) {
		if( (password.charCodeAt(i) >= 65) && (password.charCodeAt(i) <= 90) ) {
				bContainsUpperCase = true;
		}	
	}


	if ( bMore10Chars && bContainsSpecialChars && bContains2Digits && bContainsUpperCase) {
		return true;
	} else {
		return false;
	}

}