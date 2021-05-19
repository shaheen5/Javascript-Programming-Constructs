//Read a Number and Display the week day (Sunday, Monday,...)

const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter Number [1-7] : ")); // read input from user
switch (number) {
    case 1 :  console.log("MONDAY");
              break;
    case 2 :  console.log("TUESDAY");
              break;
    case 3 : console.log("WEDNEDAY");
              break;
    case 4 : console.log("THURSDAY");
              break;
    case 5 : console.log("FRIDAY");
             break;
    case 6 : console.log("SATURDAY");
             break;
    case 7 : console.log("SUNDAY");
             break;
    default : console.log("INVALID INPUT");
}