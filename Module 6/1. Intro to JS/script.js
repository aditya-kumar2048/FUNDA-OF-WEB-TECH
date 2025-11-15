let name1 = "Aditya";
console.log(name1);//use to print o/p
console.log('My name is', name1);
console.log('My name is ' + name1);//try to use , as we use + in addition  also in this will cause confusion.

let age1 = 19;
console.log('My age is ' + age1);// to add sentance either use single quote or double quote it will work on both.

let a1 = 12;
let b1 = 10;
console.log(a1 + b1)
console.log(a1 + b1 - 5);
// OR
let sum1 = a1 + b1;
console.log(sum1);
console.log(sum1 - 5);

// semicolon is NOT mandatory but it is recomanded to indicate end of the line 

let isEligibleToVote = true;
console.log("is eligible to vote :", isEligibleToVote)


let varname= "aditya";
console.log(varname);

varname = "Aman"
console.log(varname);

varname = 29;
console.log(varname)

const office = "ABC";
console.log(office);

office = "CBA"
console.log(office) //TypeError: Assignment to constant variable.

// const is immutable means it does not change 
// let is mutable means it will change easily

var college = "RIT"
college = "IIT"
console.log(college);

// let and var both are mutable the only diff is about the scoping

// let is function scope / local scope its range is within the fn

// var is always as global scope . that's why we dont use var keyword

let varName ;// declaration

varName = "xyz"; // Initialization

// js is case sensitive