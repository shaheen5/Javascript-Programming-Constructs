//function to check given two numbers is palindrome or not
function checkPalindrome(userInput) {
    let number = userInput;
    let reverse = 0;
    let remainder = 0;
    while ( number != 0){
        remainder = number % 10;
        reverse = (reverse*10) + remainder ;
        number = parseInt(number/10);
    }
    if( userInput == reverse)
        console.log(userInput + " is Palindrome");
    else
        console.log(userInput+" is Not Palindrome");      
}
const prompt = require ('prompt-sync')();
//get user input 1
let userInput1 = parseInt(prompt("Enter a number: "));
checkPalindrome(userInput1);
let userInput2 = parseInt(prompt("Enter a number: "));
checkPalindrome(userInput2);
