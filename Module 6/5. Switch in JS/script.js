// Switch in JS

// Marksheet

// const score = 90;

// if(score >=90){
//     console.log("A+");    
// }
// else if(score >=80){
//     console.log("A");
// }
// else if(score>=50){
//     console.log("B");
// }
// else {
//     console.log("need to improve");
    
// }


// switch Condition

const score= 60;
// if break is not apply it will print all log values
switch(score){
    case 90 :
        console.log("A+");
        break;
    case 80 :
        console.log("A");
        break;
    case 60 :
    case 50 : // we can use diff cond in one go and it will give B as a ans
        console.log("B")    

        break;

    default : 
        console.log("Need to improve");
        break;// in default no matter use break or not 
}

const score1= "A";
// if break is not apply it will print all log values
switch(score1){
    case 'A' :
        console.log("A+ : Excellent ");
        break;
    case 'B' :
        console.log("A : Good Job");
        break;
    case 'c' :
    case 'D' : // we can use diff cond in one go and it will give B as a ans
        console.log("B : Need to Improve")    

        break;

    default : 
        console.log("Failed !");
        break;// in default no matter use break or not 
}