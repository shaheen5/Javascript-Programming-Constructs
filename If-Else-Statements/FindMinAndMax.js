//Write a program that reads 5 Random 3 Digit values and then outputs the minimum  and the maximum value
let randomNumber = Math.floor(Math.random() * 900 + 100);
console.log(randomNumber);
let maxValue = randomNumber;
let minValue = randomNumber;
for(let numOftimes = 0; numOftimes < 4; numOftimes++){
    let randomValue = Math.floor(Math.random() * 900 + 100);
    console.log(randomValue);
    if ( randomValue > maxValue)
        maxValue = randomValue;
    if( randomValue < minValue )
        minValue = randomValue;
}
console.log("Maximum Number : "+maxValue);
console.log("Minimum Number : "+minValue);