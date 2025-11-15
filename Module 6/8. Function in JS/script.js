//
//some other code snippet
//
const a = 10;
const b = 2;
const aPlusB = a + b;
console.log("Result :",aPlusB);
// console.log(summation(40,20));// it will not print as the fn is defined after the above fun 
//
// some other code snipet
//
const x = 12;
const y = 6;
const xPlusY = x + y;
console.log("Result :",xPlusY);
sumation(x , y)
//
//some other code snipet
//
const l = 10;
const k = 2;
const lPlusK = l + k;
console.log("Result :",lPlusK);
sumation(l,k);
//
//as we are writting 3 programs of samme logic so to avoid these progream we create fn

function sumation(r,k){
    const result = r + k;
    console.log("Result :",result);
}
// fun call
sumation(3,6);
sumation(39,29);

function greet (username) {
    console.log("Hey , hi nice to meet you");    
    console.log("How are you", username);
}

greet("Aditya");
greet("Mohit");

//Anonymous func / Func Expression
let summation = function (r,k) {
    const result = r+k;
    return result;
    
}
console.log(summation(20,20));


// Nested func - a func inside func
function addSq(x , y){
    const a = sq(x);
    const b = sq(y);
    function sq(num){
        return num*num;
    }
    console.log("result :",a+b);
}
addSq(1,2);
// sq(4);//it is undefined as it is define within a block of another fun
addSq(3,4);
