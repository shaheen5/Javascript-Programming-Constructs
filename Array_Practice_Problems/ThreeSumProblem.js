//Write a Program to show Sum of three Integer adds to ZERO

function findTriplet(arr,number) {
    distinctCount=0;
    for (let i=0;i<(number-2);i++ ){
	    for (let j=i+1;j<(number-1);j++ ){
		    for (let k=j+1;k<number;k++ ) {
			    if (( arr[i]+arr[j]+arr[k] ) == 0 ){
                    distinctCount++;
                    console.log(arr[i]+" + "+arr[j]+" + "+arr[k]+" = 0");
                }
            }
        }
    }
    console.log("Total distinct triplets:- "+distinctCount);
}

const prompt = require('prompt-sync')();
//get user input
let number = parseInt(prompt("Enter a positive number : "));
//dclare array
let numbersArray = new Array();
for(let j=1 ; j<= number ;j++){
    let num = parseInt(prompt("Enter array elements : "));
    numbersArray.push(num);
}
//call function
findTriplet(numbersArray,number);







