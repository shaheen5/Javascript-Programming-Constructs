/* Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.*/

//find second largest number in array
function secondLargestNumberInArray(numberArray) {
    firstLargestNumber = Math.max(...numberArray) // firstLargestNumber
     index = numberArray.indexOf(firstLargestNumber) // the index of firstLargestNumber
     numberArray.splice(index, 1) // Delete first largest number
     secondLargestNumber = Math.max(...numberArray) // firstlargestNumber got removed, lets find next largest No.
     console.log("Second Largest Number : "+secondLargestNumber);

}
//find second smallest number in array
function secondSmallestNumberInArray(numberArray) {
    firstSmallestNumber = Math.min(...numberArray) // first smallest Number
     index = numberArray.indexOf(firstSmallestNumber) // the index of first smallest Number
     numberArray.splice(index, 1) // Delete first smallest number
     secondSmallestNumber = Math.min(...numberArray) // firstSmallestNumber got removed, lets find next smallest No.
     console.log("Second Smallest Number : "+secondSmallestNumber);

}
//generate 10 random 3 digit numbers
let numberArray = new Array();
for  ( let index=0 ; index<10; index++ ){
    numberArray[index] =  Math.floor(Math.random()*900 + 1);
}
console.log("10 Random 3 Digit Numbers are :-");
console.log(numberArray);
secondLargestNumberInArray(numberArray);
secondSmallestNumberInArray(numberArray);