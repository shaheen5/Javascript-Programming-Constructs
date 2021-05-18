//program that takes day and month from the command line and prints true if 
// day of month is between March 20 and June 20, false otherwise.
const prompt = require('prompt-sync')();
let day = prompt("Enter Day :");
let month = prompt("Enter Month :");
if(month == 1 || month == 2 || month > 6){
    console.log("Enter Month Between March And June");
    return;
}
if (month == 3 ) {
    if ((day >= 20) && (day <= 31)){
        console.log("True");
        return;
    }
    else{
        console.log("False");
        return;
    }
}
if ( month == 4 ){
    if ((day >= 1) && (day <= 30)){
        console.log("True");
        return;
    }
    else{
        console.log("False");
        return;
    }

}
if ( month == 5){
    if ((day >= 1) && (day <= 31)){
        console.log("True");
        return;
    }
    else{
        console.log("False");
        return;
    }

}
if ( month == 6 ){
    if ((day >= 1) && (day <= 20)){
        console.log("True");
        return;
    }
    else{
        console.log("False");
        return;
    }
}
