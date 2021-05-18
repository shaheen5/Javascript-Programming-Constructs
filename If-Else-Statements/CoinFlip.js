//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

const HEAD = 1;

let flipCoin = Math.floor(Math.random * 2) + 1;
if ( flipCoin == HEAD)
    console.log("HEADS !!!");
else
    console.log("TAILS !!!");