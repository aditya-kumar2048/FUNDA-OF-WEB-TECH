console.log("Hello Mitron");

greet();

function greet(){
    console.log("Happy Independance day");
}

console.log(date);

var date = 18;// it shows undefined;
// as bcz var is declare as global variable if we use let it will show we can not use before declare

// Greet();// shows error as fn Greet not initialize yet

// let Greet = function(){
//     console.log("Happy independance day");
// }



let n = 2;

function square(num){
    let ans = num * num;
    return ans;
}

let op = square(n);

console.log(op);
// these work on the basis of call stack

// Two parts run
// Execution Context -> Memory exe and code exe

