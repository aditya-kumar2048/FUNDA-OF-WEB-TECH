const box1 = document.getElementById('red');
box1.addEventListener('click' , ()=>{
    box1.style.backgroundColor = "red";
})

const box2 = document.getElementById('blue');
box2.addEventListener('click' , ()=>{
    box2.style.backgroundColor = "blue";
})

const box3 = document.getElementById('green');
box3.addEventListener('click' ,()=>{
    box3.style.backgroundColor = "green";
})

const box4 = document.getElementById('yellow');
box4.addEventListener('click' , ()=> {
    box4.style.backgroundColor = "yellow";
})

const inp = document.getElementById('inp');
const greet = document.getElementById('greet');
const name = document.getElementById('name');

greet.addEventListener('click', ()=>{
    const name1 = inp.value;
    name.textContent = 'Hello, ' + name1;
});