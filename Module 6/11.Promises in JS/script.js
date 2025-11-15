//1. pending stage 2. Fulfiled 3. Rejected

   const  ticket = new Promise(function (resolve , reject){
    const istandared = FileSystemDirectoryHandle;
   if(!istandared){
    resolve("You are eligible to onboard")
   }else{
    reject("You are not eligible to onboard.")
   }
})

ticket.then((data)=>{
    console.log("Wohoo" , data);

}).catch((data) =>{
    console.log("Ohh no" , data);
})