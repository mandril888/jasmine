/*Kata: Drink About
Problem Description

/*Kids drink toddy. Teens drink coke. Young adults drink beer. Adults drink whisky. Make a function that receive age, and return what they drink.

Rules:

Children under 14 old. Teens under 18 old. Young under 21 old. Adults have 21 or more.*/

function drinkAbout( age ){
	if (age<14){
		return 'toddy';
	} else if ( (age>=14) && (age<18) ){
		return 'coke';
	} else if ( (age>=18) && (age<21) ){
		return 'beer';
	} else if ( age>=21){
		return 'whisky';
	} else {
		return 'Has de entrar una edad';
	}
}
