/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets made */

let cash=100
bet_amount=1
let winCount=0;
let lossCount=0;
let total_no_of_bets=0;
while ( (cash > 0 ) && ( cash < 200 )){
    total_no_of_bets++;
    let flag = Math.floor(Math.random()*10)%2;  // random generate win or loss bet 
    if (flag == 1){                             //if 1 ->won the bet
        cash = cash + bet_amount;
        winCount++;
    }
    if(flag == 0){                              //if 0 ->lost the bet
        cash = cash - bet_amount;
        lossCount++;
    }
}
console.log("Total number of Bets = "+total_no_of_bets);
console.log("No. of times win = "+winCount);
console.log("No. of times lost = "+lossCount);
console.log("Cash left = "+cash);