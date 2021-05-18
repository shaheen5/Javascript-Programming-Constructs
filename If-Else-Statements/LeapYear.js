//A program that takes a year as input and outputs the Year is a Leap Year or not  a Leap Year.
// A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless  divisible by 400. 

const prompt = require("prompt-sync")();
let year = prompt("Enter Year : "); //take user input
let count=0;
let temp=year;
while ( temp != 0 )  {   //counting number of digits in input
        temp=parseInt(temp/10);
        count += 1;
}

if ( count != 4 ) {            //check input is 4 digit number
   console.log("Invalid Input ! Enter 4 digit Year Value")
}

if ( (year%4 ) == 0 ) {      //check conditions for leap year
        if (( ( year%100 ) != 0 )|| ( ( year%400 ) == 0 ))
            console.log(year +" is a Leap Year !");
        else
            console.log(year + " is Not a Leap Year");
}
else{
        console.log(year + " is Not a Leap Year");
}