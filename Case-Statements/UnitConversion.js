/*Write a program that takes User Inputs and does Unit Conversion of different Length units
1. Feet to Inch    3. Inch to Feet
2. Feet to Meter   4. Meter to Feet*/

const prompt = require('prompt-sync')();
console.log("1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");
let choice = parseInt(prompt("Enter Your Choice : "));
let lengthInFeet;
let lengthInMetres;
let lengthInInches;
switch (choice){
    case 1 : lengthInFeet = prompt("Enter length in feets : ");
             lengthInInches = lengthInFeet * 12;
             console.log(lengthInFeet +" feet" + " = "+lengthInInches +" inches");
             break;
    case 2 : lengthInFeet = prompt("Enter length in feets : ");
             lengthInMetres = (lengthInFeet * 0.3048).toFixed(2);
             console.log(lengthInFeet+" feet = "+lengthInMetres+" metres");
             break;
    case 3 : lengthInInches = prompt("Enter length in inches : ");
             lengthInFeet = (lengthInInches/12).toFixed(2);
             console.log(lengthInInches+" inches = "+lengthInFeet+" feet");
             break;
    case 4 : lengthInMetres = prompt("Enter length in metres : ");
             lengthInFeet = (lengthInMetres*3.281).toFixed(2);
             console.log(lengthInMetres + " metres = "+ lengthInFeet + " feets");
             break;
    default : console.log("Invalid Input");
}