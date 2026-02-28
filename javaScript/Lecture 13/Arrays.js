console.log("Good Morning!!!!");

// Class 
// Student

// let st1 = "Aditya"
// let st2 = "Ankit"
// let st3 = "Abhay"
// let st4 = "Anurag"
// let st5 = "Sandip"


let Students = ["Aditya" , "Abhay" , "Ankit" , "Sandip" , "Anurag"]

console.log(Students[1]);

console.log(Students);


for(let i = 0 ; i<Students.length ; i++){
    console.log(Students[i]);
}

let Skills ={
    frontEnd : "React",
    backEnd : "Express",
    Database : "MongoDB"

}

const greet = () => {
    console.log("Hello jii");
}
let EmployessInfo =  ["Aditya" , true , 200000.00 , 321 , Skills , greet];

console.log(EmployessInfo);
console.log(EmployessInfo[5]())

// Array can be created using array constructor

// default , parameterized

let arr = new Array("aditya" , "abhay" , "anu");
console.log(arr);

let arr1 = ["Aditya", "abhay" , "nitin"];

console.log(typeof(arr));
console.log(typeof(arr1));

// both are different way to define array

//  const a = ["Aditya", "abhay" , "nitin"];
let a = ["Aditya", "abhay" , "nitin"];

// Array mutable?
// Array const 
console.log(a);
a[1] = "ankit" ;

console.log(a);

// it is Mutable either it is declare with const or let

// 1. Shopping Cart System

let cart = ["Milk" , "Bread" , "Eggs"]

// Add during shopping

cart.push("Butter")
console.log(cart);

cart.unshift("Juice")
console.log(cart);


// if to remove anything 

// index? -> true -> remove

// let index = cart.indexOf("Apples")
let index = cart.indexOf("Eggs")
console.log(index);

if(index !== -1){
    // cart.splice(index,1);// splice is use to remove element at specific location

    // remove 1 element from cart

    //cart.splice(index ,2 ) // it remove 2 element from the cart after finding the specific element

    let deletedItems = cart.splice(index,2);
    console.log(deletedItems);
}

console.log(cart);

// 2. Student Marks Ananlysis

 let marks = [45, 67 , 89 , 32 , 76  , 99 , 54];


 // marks greater than 60

 //67 89 76 99

 let above60 = marks.filter((item)=> item > 60);

 console.log(above60);

 // find -> first occurence of data

 let topper = marks.find((m)=> m >90)
 console.log(topper);



 // average
let sum = 0;

for(let i = 0 ; i<marks.length ; i++){
    sum = sum + marks[i]; 
}

let avg = (sum) /(marks.length) ;

console.log(avg);

let totalMarks = marks.reduce((sum,m) =>{
    sum = sum + m;
    return sum;
},0)

let avg2 = (totalMarks) /( marks.length);
console.log(avg2)

console.log(marks.sort());

// console.log(marks.sort()) // in descending ??

// 3. Movie Ratings

let ratings = [4.5,3.2,5.0,2.8,4.7]

// check if a movie have 5

console.log("Has 5.0 : ", ratings.includes(5.0));

//find index of first rating which is below 3

let lowIndex = ratings.findIndex((r) =>r<3);

console.log(lowIndex);

console.log(ratings.reverse());


// word transformation

let words = ["hello" , "ji" , "Good" , "Morning"];

// convert all word into uppercase

let upperCaseArray = words.map((w) =>w.toUpperCase())

console.log(words);

console.log(upperCaseArray);