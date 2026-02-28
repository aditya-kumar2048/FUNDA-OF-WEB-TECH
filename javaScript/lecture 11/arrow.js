
console.log("Hello Mitron");

// Arrow fun
// ()=>{}  //logic single line
const calAge = () => 10;

console.log(calAge);
console.log(calAge());

// const CallAge = birthYr => 2025 - birthYr;
// console.log(CalAge(2009));

const retirement = birthyr => {
    const age = 2025 - birthyr;
    let retire_duration = 50 - age;

    return retire_duration;
}

console.log(retirement(1980));


//fn => multiple parameter 

const retirement1 =(birthyr , firstname) =>{
    const age = 2025 - birthyr;
    let retire_duration = 50 - age;

    return `${firstname} retires in ${retire_duration}`;
}
console.log(retirement1(2000 , "mohan"))

// How do default parameters works in js

// function greeting (name , message = "Namaste"){
//     console.log(`Hello ${name}, ${message}!! `);
// }
// greeting("khushi");

// greeting("rajat" , "Hello");

//Rest parameter / multiple parameter
function sayHello(message,...names){
    names.forEach(person => console.log(`${message} ${person}\n`));
}

sayHello("Hello" , "Pankaj" , "Bhavuk" , "Khushi" , "Rajat");

const CutPieces = function(fruit){
    return fruit*4;
}

const Juicer = function(apple , oranges){
    let applePieces = CutPieces(apple);
    let orangePieces = CutPieces(oranges);

    let juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

let glass = Juicer(4 ,5);
console.log(glass);



// userLogin
function loginUser(UserName , redirect){
        console.log(`User ${UserName} logged in`);
        redirect();
}

function redirect(){
    console.log("Redirecting to Dashboard.....");
}

loginUser("Pankaj" , redirect);



// Higher Order function -> string Manipulator

function stringManipulator(str , func){
    console.log(str);
    console.log(func);
    return func(str);
}


function reversedString(s){
    let reverse = " ";
    for(let i = s.length - 1; i>=0 ; i--){
        reverse += s[i];
    }
    return reverse;
}

let finalOutput = stringManipulator("hello" , reversedString);

console.log(finalOutput);

//  function CalVowels(s) --> HW;

// lexical function

let a = 10;
let b = 20;

function parenFunc(){
    let name = "Pankaj";
    function childFunc(){
        console.log(`${name} is ${a + b}years old`);
    }
    childFunc();
}

parenFunc();

// function parentFunc(){
//     let c = 30
// }
// console.log(c); // it is not accessible as it is out of scope of fun;


function A(){
    var x = 5;
    function B(){
        console.log(x);
    }
    return B;
}

 let C = A();

 C();
 console.log(C);