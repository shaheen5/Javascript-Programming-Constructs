/*Write a program to compute Factors of a number N using prime factorization method.*/

const prompt = require('prompt-sync')();
//take user input 
let userInput = parseInt(prompt("Enter value of n : "));
console.log("Prime Factors of "+userInput+" are :-");
for (let i = 1 ; i <= userInput ; i++) {
    if((userInput%i)==0){
        process.stdout.write(i+"\t");
    }
}