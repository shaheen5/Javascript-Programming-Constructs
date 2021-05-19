/* Extend the program to take a range of number as input and output the Prime
Numbers in that range.*/

const prompt = require('prompt-sync')();
console.log("Enter two positive numbers for range");
let number1 = parseInt(prompt("Enter number1 : "));
let number2 = parseInt(prompt("Enter number2 : "));
console.log("Prime number between "+number1+" and "+number2+ " including both are :-");

for (let i=number1; i<=number2 ; i++ ){           //loop from num1 to num2
    let flag = 0;                                 // set flag to 0
    if ( (i == 0) && (i == 1) )                   //ignore 1 and 0 
        continue;
    for ( let j = 2 ; j <= i/2 ; j++ ){           //check number is prime
        if ( (i%j)==0 ){
            flag = 1;
            break;
        }
    }
    if( flag == 0){
        console.log(i);
    }
}                  