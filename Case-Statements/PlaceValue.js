//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter Number : ")); // read input from user
switch (number) {
    case 1 :  console.log("ONE");
              break;
    case 10 :  console.log("TEN");
              break;
    case 100 : console.log("HUNDRED");
              break;
    case 1000 : console.log("THOUSAND");
              break;
    default : console.log("INVALID INPUT");
}