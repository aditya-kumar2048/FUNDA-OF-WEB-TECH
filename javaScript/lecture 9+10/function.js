console.log("Welcome Mitron!!"); 

function logger(){
    console.log("Hello ji mitron");
    console.log("Aaj mausam is very good");
}

logger(); // function call or invoke or run
logger();
logger();
logger();

// function declaration // function definatiaons

// function signature -> parameter

function Juicer(apple, oranges){
    let juice = `juice with ${apple} apples and ${oranges} oranges is ready `
    //console.log("hello i am juicer");
    // console.log(juice);
    return juice;
    //console.log(juice) // unreachable code is been written.

}
console.log(Juicer(3,5)); // function call or invoke or run
const glass = Juicer(3,5);
console.log(glass);

// the variable define inside function are the local variable that is in local scope , that can not be access outside of fn

// Multiple ways of function to be written in js

// function expression, arrow fn

// Hoisting in fn

// Part 2

// Ques -> cal your age

function calAge(birthYear){
    const age = 2026 - birthYear;
    return age
}
console.log(calAge(2001));

//anonymus -> identity

// fn require a identity to store the value in identifier and the fn is become anonymus 
const CalAge = function(birthYear){
    const age = 2026 - birthYear;
    return age;
}
console.log(CalAge);

let output = CalAge(2002)
console.log(output)


const JuiceR = function(apple , orange){
    let juice = `Juice with ${apple} apple and ${orange} orange is ready`
    return juice;
}
console.log(JuiceR)

const juice = JuiceR(4 , 6);
console.log(juice);

//fn cannot be access before initialization
