/*Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5 */

const prompt = require('prompt-sync')();
let userInput = parseInt(prompt("Enter value of n : "));

let factorial=1
for ( let i = userInput ; i>=1 ; i-- ) {
    factorial = factorial * i;
}
console.log(userInput+"! = "+factorial);