console.log("Hello Mitron!!");

console.log("Aditya")
console.log("Aditya")
console.log("Aditya")
console.log("Aditya")
console.log("Aditya")
console.log("Aditya")
console.log("Aditya")
// baar baar print krne se acha h loop ue krna

console.log("For loops")

for (let i = 0; i < 5; i++) {
    console.log(i + 1, "Aaadi :)");

}
console.log("WHILE LOOP")
let i = 1;
while(i<=5){
    console.log("AAADI");
    i++;
}

// even no b/w 1 to 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) { console.log(i); }
}

for(i = 5; i>=1; i--){
    console.log(i);
}

let sum = 0;
for( i = 1 ; i <=5; i++){
    sum = sum+i;
}
console.log("sum = " ,sum);

// break and continue

for(i = 1 ; i<6 ; i++){
    if(i ==3) break;
    console.log(i);
} // 1 2

for(i = 1 ; i<=5 ; i++){
    if(i == 3) continue;
    console.log(i, "copy Checked");
}

console.log("Reverse a number");
let n = 121 ;
let s = 0;
while(n>0){
    let rem = n%10;
    s = s*10 + rem;
    n=Math.floor(n/10);
}
console.log(s);

// HW - Palindrome No.
// 121 - 121

// let m = prompt("enter a number : ");
let m = 121;
let temp = m;
let sm = 0;
while(temp>0){
    let rem = temp%10;
    sm = sm*10 + rem;
    temp = Math.floor(temp/10);
}
console.log((m == sm)?true : false);


// Patern Printing

for(let i = 0 ; i<=3; i++){
    for(let j = 0 ; j<=i; j++){
        console.log("*");
    }
    console.log("\n");
}

// do while loop

// Table
let k = 3;
let j = 1;
do{
    console.log(k + " * " + j + " = " , k * j);
    j++;
}while(j<10);

// Prime no

let z = 15;//Enter no you want to check
let l = 2;
let flag = true;
while(l<z){
    if(z%l == 0) flag = false;
    l++;
}
console.log(flag);
if(!flag){ // check flag == false;
    console.log(" NOT Prime ");
}
else{
    console.log("Prime");
}

// Ticket Counter Simulation
let TicketAvailable = 10;
let person = 1;

while(TicketAvailable>0){
    console.log("Person " + person + " bought a ticket");
    TicketAvailable--;
        person++;

}

// Bank Pin Attempt Limit
/*
let pin =2427;

let attempt = 0;
let userPin;
do{
    userPin = prompt("enter pin");

    if(userPin == pin){
        console.log("\nWelcome To Our bank! :)");
        break;
    }
    else{
        console.log("\nPlease Enter a Valid Pin !");
        attempt++;
    }
}while(attempt<3);

if(userPin!=pin)
    console.log("\nYour Account has been Blocked for 24 hrs , due to many wrong pin attempts");
*/

// Random Number Guessing game

let num = 83;
let userNum;

    userNum = prompt("Guess Number between (1 - 100):  ");
let totalAttempt = 0;
while(1){
        totalAttempt++;
        if(num>userNum) {
            userNum = prompt("You have guessed smaller number , Guess Number :  ")
        }
        else if(num<userNum){
            userNum = prompt("You have guessed larger number , Guess Number :  ")
        }
        else {
            alert("Congratulation !! You Guessed Correct Number :)");
            console.log("Total Attempt taken are " + totalAttempt);
            break;
        }
}
