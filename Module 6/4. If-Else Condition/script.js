// If Condition
//  const candidateAge = 22;
// if(candidateAge >= 18)
// {
//     console.log('Hey, you can vote')
// }
//     console.log("Hey, You can't vote");


// If-Else Condition
//  const candidateAge = 22;
// if(candidateAge >= 18)
// {
//     console.log('Hey, you can vote')
// }
// else { 
//     console.log("Hey, You can't vote");
// }

// Nested If
const candidateAge = 28;
if (candidateAge >= 18) {
    if (candidateAge >= 60) {
        console.log("Senior citizens are elegivle to vote online!");
    }
    console.log("Hey You can vote :-)");
}
else {
    console.log("Hey you can't vote :-(");
}

// Else if Ladder 

if (candidateAge >= 60) {
    console.log("Senior citizens are eligible to vote online");
} else if (candidateAge >= 18) {
    console.log("Younger Citizen! Hey You can vote :-)");

}
else {
    console.log("Hey you can't vote :-(");
}


// Marksheet

const score = 90;

if(score >=90){
    console.log("A+");    
}
else if(score >=80){
    console.log("A");
}
else if(score>=50){
    console.log("B");
}
else {
    console.log("need to improve");
    
}

//Ternary Operator

// syntax : condition ? True : False 

const age = 19;

age>18 ? console.log("Eligible to vote") : console.log("Not Eligible to vote");
; 
