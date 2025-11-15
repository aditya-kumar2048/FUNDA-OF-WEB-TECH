console.log("first");
console.log("Two");
console.log("Three");

setTimeout(function() {
    console.log("This will be executed after 5 second ;");
    
    
}, 5000);
console.log("After 5 sec");

function getCandies(){
    setTimeout(() => {
        const candies = "🍭";
        console.log("In our getCandies method", candies);
         callback1(candies);
        //return candies;
    },3000);
     
}

//console.log(getCandies());

function handOverKeys(callback){
    setTimeout(() => {
        const keys = "🗝️";
        console.log("In our handOverKeys methods " , keys);
        callback1(keys);
    }, 3000);
}


getCandies((candies) =>{
    handOverKeys(candies , (keys) =>{
        console.log("Here is Your key" , keys);cournad
        callback1 = 605006
    })
})