/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached*/
const prompt = require('prompt-sync')();
// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let i=0 ;
let power=1;
console.log("INDEX \t POWER");
while ( i <= number) {
    console.log(i+"\t"+power);
    if(power >= 256) break;
    power = power * 2 ;
    i++;
}