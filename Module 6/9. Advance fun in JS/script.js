// Arrow Function

function greet1(){
    console.log("Hey, Everyone!");
    
}
greet1();

//Anonymous Func / Function Expression
let greet2 = function(){
    console.log("Hey,Everyone");
}
greet2();

//Arrow function
let greet3 = ()=>{
    console.log("hey everyone");
    
}
greet3();

const greet = (count)=>{
    console.log("hello all", count);
}
greet(2);

const sq = (num)=>{
    return num*num;
}
console.log(sq(5));


const square = (num) => num*num;
console.log(square(2));

const calculate = (a , b , operation)=>{
    return operation(a , b);
}

const sumation = calculate(2,3,function(n1,n2)
{
    return (n1+n2)
})

const subtraction = calculate(2,3,function(n1,nu)
{
    return n1-n2;
})
console.log(subtraction);

const multiplication = calculate(2,3,function(n1,n2){
    return n1*n2;
})
console.log(multiplication);

//Array call back
const arr = [2,5,6,8,9,0,-3,-5,-2];

//method 1;
const printFirstNegativeNumber = (num)=>{
    return num<0;
}
console.log(printFirstNegativeNumber);

// method 2
const printFirstNegativeNumber1 = (num)=>{
    return num<0;
}
//method 3

const printFirstNegativeNumber2 = (num) =>{
    if(num<0){
        return num;
    }
}
console.log(printFirstNegativeNumber2);



arr.forEach((num,index) => {
    console.log("Element :",num," Index :",index);
    
})