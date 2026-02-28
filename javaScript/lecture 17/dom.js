// let e1 = document.querySelector("p");
// console.log(e1);
// console.log(e1.innerText);// return screen ke upar jo available hota hai whi return krega



// // innertext vs textContent 

// let e2 = document.querySelector("p");
// console.log(e2.textContent);// it will read the text as well it can read the properties , it ignore all the html tags and return text.

// let e3 = document.querySelector("p");
// console.log(e3);
// console.log(e3.innerHTML);// it will print all the text with the tag as it is written

// practice

// let element = document.querySelector("p");

// console.log(element.innerText);
// element.innerText = "Hello Aditya here,"

// console.log(element.textContent);

// let Name = prompt("Enter your name : ");

// if(Name){
//     element.innerText = "Hello " + Name + " Nice to Meet You";
// }
// else {
//     console.log(Name);
//     element.innerText = "Hello user , Nice to meet u!"
// }

// till yet we are editing the exited code now we are going to create a new code 

// Adding Elements to your DOM

// 1. create
// 2. add -> appendchild() -> to add single element
// 3. multiple elements add -> append()

let heading = document.createElement("h1");
let heading2 = document.createElement("h2");

heading.innerText = "Hii this is Aaadi";

let section = document.querySelector('.screen');

heading2.innerText = "Jai Shree Ram";

// section.appendChild(heading);
// section.appendChild(heading2); // use to append single child

section.append(heading , heading2); // use to add multiple elements

let para = document.createElement("p");

para.innerText = "Good Morning!!";

section.prepend(para); // it add the tag in the starting or in the top of the div or container

// let data = prompt("Enter your salary");
// let display = document.querySelector('.company');
// if(data>50000){
//     let bonus = document.createElement("h1");
//     bonus.innerText = "You will get 10,000 joining bonus";
//     display.append(bonus);

// }
// else {
//     let duaee = document.createElement("p");
//     duaee.innerText = "Bhai Mehnat kar pashenaa baha ";
//     display.append(duaee);
// }

let orders = ['laptop' , 'phone' , 'Headphone' , 'screen guard' , 'cover'];

let show = document.querySelector('.flipcart');

for(let i = 0 ; i<orders.length; i++){
    let item = document.createElement("h4");
    item.innerText = orders[i];
    show.append(item);

}
// lets consider the example of some other project in next part


