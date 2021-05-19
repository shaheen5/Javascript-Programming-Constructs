/*Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached. */

const prompt = require('prompt-sync')();
// take input from the user
const userInput= parseInt(prompt("Think of a number between 1 to 100 : "));
//declare variables
let first=0;
let last=100;
answer=parseInt((first+last)/2);

while ( first < last ) {
	console.log("Is your number = "+answer);
    console.log("1.Enter 'c' if my guess is correct");
    console.log("2.Enter 'h' to indicate if the guess is too high");
    console.log("3.Enter 'l' to indicate if guess is too low");
    let checkAnswer = prompt("Enter your choice :- ");
    if (checkAnswer === "h"){
        last = answer;
        answer = parseInt((first+last)/2);
    }
    else if (checkAnswer == "l"){
        first = answer;
        answer = parseInt((first+last)/2);
    }
    else if ( (checkAnswer === "c") && (userInput === answer)) {
        console.log("Hurray! Your Number Was :- "+answer);
        return;
    }
    else{
        console.log("I do not understand your command!");
    }
}