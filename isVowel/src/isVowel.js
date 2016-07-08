/*function isVowel( character){
	if (character === 'a' || character === 'e' || character === 'i' || character === 'o' ||character === 'u'){
	return true;
	} else {
		return false;
	}
}


OTRA FORMA*/

function isVowel( character ){
	if ('aeiou'.indexOf(character) != -1){
	return true;
	} else {
		return false;
	}
}