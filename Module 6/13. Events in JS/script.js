// // Events

// //1. Event Handlers
// //(onclick , onload , onmouseover , onmouseout , onkeypress , onkeydown , onkeyup)

// function onClickFun(){
//     console.log("The box has been clicked");
// }


// function onMouseOverFun(){
//     console.log("the mouse is moved over from this");
// }

// function onMouseMoveFun(){
//     console.log("the mouse in move from the box");
// }

// // function onKeyPressFun(){
// //     console.log("The key has been hitted");
    
// // }

// // function keydownEventFun(){
// //     console.log("the box has been filling")
// // }

// // function keyUpDownfun() {
// //     console.log("the upper case letters are in the starting of the code")
// // }

// const KeyPressEvent = () =>{
//     console.log("The key has been hitted");
// }
// const onKeyUp = ()=>{
//     console.log("On key up");
// }
// const onKeyDown = () =>{
//     console.log("On key down");
    
// }

//2 . Event Listern
const box1 = document.getElementById('box-1');
box1.addEventListener('click', ()=>{
    box1.style.backgroundColor = "green";
    console.log("click has been triggred");
})

const box5 = document.getElementById('box-5');
box5.addEventListener('mouseover',(event) =>{
     console.log("Click has been triggered -1" , event.clientX , event.clientY);
} )

// Bubbling and Capture functionality

const box3 = document.getElementById('box-3');
box3.addEventListener('click', ()=>{
    box3.style.backgroundColor = "red";
    console.log("Box");
})

const cont = document.getElementById('cont');
box3.addEventListener('click', (event) => {
    console.log("container");
},false) // false -> box and container 
        // true -> container and box


