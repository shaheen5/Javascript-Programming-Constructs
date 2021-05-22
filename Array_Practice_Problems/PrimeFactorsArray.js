/*Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.*/

//function to print all prime factors of given number
function primeFactor(number) {
	{
		console.log("The prime factors of " + number + " are: ");
		for(let pos = 2; pos < number; pos++) {
			for( ; number% pos == 0 ; number /= pos)
				PrimeFactorsArray.push(pos);
		 }
		 if(number > 2)
			PrimeFactorsArray.push(number);
		console.log(PrimeFactorsArray);
	}
}
//main
const prompt = require('prompt-sync')();
//get user input
let number = parseInt(prompt("Enter a positive number : "));
//dclare array
let PrimeFactorsArray = new Array();
//call function
primeFactor(number);