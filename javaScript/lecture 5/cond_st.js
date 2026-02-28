console.log("Jai shree radhe Everyone!!:)");

let age = 11;

// can u vote or not?
if (age >= 18) console.log("Yes bhai , tm vote de skte ho gand v");

console.log("End of Code");

let vision_Test = true;

// can u drive

if (vision_Test == true) console.log("Yes , you can drive");
console.log("End of Code");

let Do_You_have_Food = true;

if (Do_You_have_Food == true) {
    console.log("Then have some sweets");
}
else {
    console.log("Pehle khana khao jaao fir");
}

console.log("rest of the code will execute");


// check even or odd

let num = 8;

if (num % 2 == 0) {
    console.log("Even nikla sala");
}
else {
    console.log("Odd nikla sala");
}

// try prime no.

// grade code
let marks = 93;

if (marks >= 90) {
    console.log("A grade milla re");
}
else if (marks >= 80) {
    console.log("B grade milla re");
}
else if (marks > 60) {
    console.log("C grade milla re")
}
else if (marks > 50) {
    console.log("D milla re");
}
else if (marks > 30) {
    console.log("E grade milla re")
}
else {
    console.log("Iss baar baat ni bani");
}


// find greatest of 3 no

let a = 32
let b = 26
let c = 12

if (a >= b && a >= c) {
    console.log("a is greater")
}
else if (b >= a && b >= c) {
    console.log("b is greater")
}
else {
    console.log("c is greater")
}

let char = "a"

if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log("Its vowel character");
}
else {
    console.log("consonent");
}


let Logged_In = false;

let screen = (Logged_In == true) ? "Gaming Console" : "Login Page";

console.log(screen);

// placement criteria

let school = 82.3

let college = 8.9

if(school>70){
    if(college>7.5) {
        console.log("Placement mai baitho");
    }
    else{
        console.log("Number kam hain college me")
    }
}
else {
    console.log ("Number km hai school me")
}

let Username = "Admin"
let password = "1234"

if(Username == "Admin"){
    if(password == "1234"){
        console.log("Logged In");
    }
    else{
        console.log("Incorrect password");
    }
}
else {
    console.log("Incorrect Username");
}

let day = 4;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tues");
        break;
    case 3:
        console.log("Wed");
        break;
    case 4:
        console.log("Thrus");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("Sun");
        break;
    default :
        console.log("Invalid day");
    
}


console.log("HW - banking application")
// make menu and use thier fn using switch.

console.log("------------------ Banking Aplication -----------------");
let choice ;
while(1){
    console.log("========== MENU ============\n");
    console.log("1.Deposite Money\n2.Withdraw Money\n3.Check Balance \n4.Exit\n");
    // menu created
    
}