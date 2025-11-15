// Loop in js :- for loops , while loop , do-while loop

// 1. for loops

// console.log("Aditya kumar");
// console.log("Aditya kumar");
// console.log("Aditya kumar");
// console.log("Aditya kumar");

//printing same thing again again by using the above method is not good developer activity so in the place of this we use loops and also one reason is that it is not looks good .

//for loops are use only if we know how many times it has to be run
//And if we dont know how many time the no of loops run then we use while or do while


// for(;;){// infinite loop
//     console.log("Aditya Kumar");
// }


//using diff condition
for(let i = 0; i<5;  i++){
    console.log("Aditya ");
    console.log("Kumar");
    
}

for(let i = 2; i<15; i++){
    console.log("Aditya ", i);
}

for(let i = 2; i<15; i+=3){
    console.log("Aditya ", i);
}
// wrong condition
for(let i = 18 ; i<17; i++){
    console.log("Aditya",i);
}

for(let i = 9; i>0; i--){
    console.log("Aditya")
    
}

//2. while loop
console.log("While Loop");;

let count = 0;
while(count<5){
    console.log(count);
    count++;
}

// Do while loop

console.log("Do-while Loop");;
let c = 0;
do{
    console.log(c);
    c++;
    
}while(c<5)


console.log("While loop - it will check cond. first then it give result");

let m = 8 ;
while(m<5){
    console.log(m);
    m++;    
}

console.log("Do-While Loop - it will first give result no matter if the cond. is false , then it will check the cond.");

let n = 8;
do{
    console.log(n);
    n++;
    
}while(n<5);

console.log("While loop - real example is restaurant menu card");

// imp keyword :- 1. continue(skip the itration) 2. break(terminate the loop)

let k = 0;
while(k<9){
    if(k==4) {continue;}

    console.log(k);
    
    k++;
}
//break
let t = 0 ; 
while(t<5){
    t++;
    if(t==3){
         break;
    }
    console.log(t);
}