/*Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element.*/

//generate 10 random 3 digit numbers
let numberArray = new Array();
for  ( let index=0 ; index<10; index++ ){
    numberArray[index] =  Math.floor(Math.random()*900 + 1);
}
console.log("10 Random 3 Digit Numbers are :-");
console.log(numberArray);
//creating a lambda function to compare two values
const numberSorter = (a, b) => a - b;
//customizing sort function to sort integers by passing the lambda function as a parameter
numberArray.sort(numberSorter);
console.log("Second Largest Element in array : "+numberArray[numberArray.length-2]);
console.log("Second Smallest Element in array : "+numberArray[1]);