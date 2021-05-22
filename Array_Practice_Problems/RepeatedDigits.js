/* Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array*/

const prompt = require('prompt-sync')();
console.log("Enter number between [0-100]");
//declare array
let repeatedDigitsArray = [];
//get user input
let num = 1;
while  (true){
	let num = parseInt(prompt("Enter number : "));
	if ( num == 0 ) continue;			//if number entered is zero continue dont add in array
	let unit = num%10;					//extract unit digit number
	let tens = parseInt(num/10);		//extract tens place number
	if ( unit == tens)					
		repeatedDigitsArray.push(num);	//if digits are same add all numbers having repeated digits into array
	if(num < 0 || num >= 100) break;
}
if(repeatedDigitsArray.length == 0){	//check if array is empty
	console.log("Sorry!!No element found.")
}
else {
	console.log("Elements found :-\n"+repeatedDigitsArray);
}