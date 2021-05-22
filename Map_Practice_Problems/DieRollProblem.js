/*Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for minimum times*/

//declare map
let DiceValueMap = new Map();
//initialize counter
let count=1;
//Repeat the Die roll and find the result each time & store in map till counter reaches 10
while( count <= 10){
    let key = Math.floor(Math.random() * 6) + 1;
	DiceValueMap.set(key,count);
    count++;
}
//display keys and values of map
process.stdout.write(" Keys  :- ");
for (let key of DiceValueMap.keys()) {
	process.stdout.write(key+" ");
}
process.stdout.write("\nValues :- ");
for (let value of DiceValueMap.values()) {
	process.stdout.write(value+" ");
}

let minValue = 10;
let maxKey=0;
let minKey=0;
//searching number that occurred maximum times and min times
for (let [key,value] of DiceValueMap){
	if(value == 10) {
		maxKey = key;
	}
	if(value < minValue){
		minValue=value;
		minKey = key;
	} 
}
console.log("\nMaximum times numbered occured on die roll ->"+maxKey);
console.log("Minimum times numbered occured on die roll ->"+minKey);

