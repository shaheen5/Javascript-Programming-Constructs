//Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let total = 0;
for(let numOftimes = 0; numOftimes < 5; numOftimes++){
    let randomValue = Math.floor(Math.random() * 90 + 10);
    console.log(randomValue);
    total += randomValue;
}
console.log("Sum Of Five Random Values : "+total);
console.log("Average Of Five Random Values: "+ total/5);
