/*Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n.*/

const prompt = require('prompt-sync')();
let userInput = parseInt(prompt("Enter value of n : "));
console.log("\nINDEX \tPOWER\n");

let power = 1;
for ( let i=0 ; i<= userInput ; i++ ) {
    console.log(i+"\t"+power);
    power = power *2 ;
}