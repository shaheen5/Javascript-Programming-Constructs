/*Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form */

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter value of n : "));
let sum = 0;
console.log("Harmonic number is of form :-");
for ( let i=1 ; i<=num; i++ ){
    process.stdout.write("1/"+i);
    if ( i < num){
        process.stdout.write(" + ");
    }
    sum += 1/i;
}
console.log("\nSum of "+num+"th Harmonic Series = "+sum.toFixed(4));