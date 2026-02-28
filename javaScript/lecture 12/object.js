console.log("Hello Mitron");

let person ={
    firstName : "Aditya",
    lastName : "Singh",
    Job : "Software Eng",
    age  : 19,
    JobStatus : true,
    salary : 200000
}

console.log(person)

console.log(person.firstName)

console.log(person.salary);

// object stores in heap 
// object data memeber stores in stack memory

// object => mutable? immutable

let Employee1 = {
    firstName : 'Aditya',
    lastName : 'kumar',
    jobId : 123,
    attendance : true,
    Salary : 100000
}
console.log(Employee1)
// mutable 
Employee1.jobId = 321
console.log(Employee1)

// Dot Operator vs bracket Operator

console.log(Employee1[`Salary`]);

const nameKey = `Name`

console.log(Employee1[`last` + nameKey]);


// const info = prompt("Enter the INfo you want : ");

// console.log(Employee1.info); // it won't work

// console.log(Employee1[info]);

Employee1[`Email`] = "abc@gmail.com"   ;

console.log(Employee1);


// User Profile

let user ={
    name : "chotta bheem" ,
    age : 15,
    city : "Dholakpur",
    profession : "GundaGardi"
}

console.log("Keys : ", Object.keys(user));

console.log("Values : ", Object.values(user));


console.log("Has age : " , user.hasOwnProperty("age"));

user.email = "acd@gmail.com";

console.log(user);

delete user.email;

console.log(user);


// Merging of objects 

let obj1 = {a:2 , b : 4}

let obj2 = {c : 3 , d : 9}

let mergeObj = Object.assign({} , obj1 , obj2);

console.log(mergeObj);

//spread operator /

let obj3 = {...obj1 , ...obj2}

console.log(obj3);

// object freeze 

let settings ={
    theme : "dark",
    Notification : true
}

// logic 4 -> click krne baad DOM

Object.freeze(settings)

settings.theme= "light"

console.log(settings);

// it can't change as it got freeze

let setting ={
    theme : "dark",
    Notification : true,
    wallpaper : function(){

        console.log("using this you can change your wallpaper");
    }

}

console.log(setting.wallpaper);

let users ={
    name : "chotta bheem" ,
    age : 15,
    city : "Dholakpur",
    profession : "GundaGardi"
}


function printInfo(users){
    console.log(users);
}

printInfo(users);

