console.log("Welcome Mitron!!");

// E-Commerce website -> data from Orders 

let orders = [
    {
        id: 1,
        product: "Laptop",
        price: 70000
    },
    {
        id: 2,
        product: "Headphones",
        price: 1200
    },
    {
        id: 3,
        product: "Mobile",
        price: 30000
    },
    {
        id: 4,
        product: "Tablet",
        price: 15000
    },
];

// find all the orders above 10000

let expensive = orders.filter((obj)=>{
   return obj.price > 10000
});

console.log(expensive);


// Total kharcha

let TotalKharcha = orders.reduce((sum,obj) =>{
    sum = sum + obj.price;
    return sum;
} , 0);

console.log(TotalKharcha);


// product names -> print -> har item

let products = orders.map((obj) => console.log(obj.product));

// sort by price

let SortedOrders = orders.sort((a , b)=> a.price - b.price);

console.log(SortedOrders);

// using for each

// let Students = ["Aditya" , "Rahul" , "rajat"];
// function printStudentNames(Students){
//     arr.forEach((student , index) =>{
//         console.log(`${index+1} . ${student}`);
//     });
// }

// printStudentNames(Students);

// Documentation for , forEach forIn and forOf

// find total salaries  using for of

let salaries = [32000 , 45100, 50000 ,60000];

function totalSalary(arr1){
    let sum = 0 ;
    for(let sal of arr1){
        sum += sal;
    }
    return sum;
}

let output = totalSalary(salaries);
console.log(totalSalary);
console.log(output);

// Display Employee info (using for in)?

let Employee = {
    firstName : "Pankaj",
    age : 24,
    department : "IT",
    salary : 59999
}


function showEmployeeInfo(obj){
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}
showEmployeeInfo(Employee);