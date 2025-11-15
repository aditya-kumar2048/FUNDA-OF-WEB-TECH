//DOM stand for Document Object Model

// DOM like structure / tree like str.
 
//inbulit keyword : document, 


console.log(document.body);// to show all body in console window
const bodyBackground = document.body;
// bodyBackground.style.backgroundColor = "green"
//this will do bg color to green

// 1st approach
const box4 = document.getElementById('box-4');
console.log(box4); // this will show the code for box 4

// 2nd approach
const div = document.getElementsByTagName('div');
console.log(div);

// 3rd approach

const boxes = document.getElementsByClassName('box');
console.log(boxes);

// Modifying html elements

const box1 = document.getElementById('box-1');
box1.innerHTML = "Aditya kumar";
box1.innerText = "Aditya kumar"

// the difference b/w innerHtml and innerText is that we can use html code like to bold (use <b></b>) or use any heading tag(like h1, h2, h3 ,...etc) or even add para in that box too (use <p></p>) and so on.....
// while the innerText is use to add only text in place of box-1

// instead of that we can use the bellow too
document.getElementById('box-2').innerText = "Aaadi❤️";
// means instead of creating a variable we can directly assign values to the id

// using tagname

document.getElementById('p').innerText = "This is a paragraph using tag name inside script "

const box_1st = document.getElementById('box-1') ;
box_1st.style.backgroundColor= "yellow";


document.getElementById('box-2').classList.add('circle')
// it will add circle in the box 2

document.getElementById('box-3').classList.remove('circle');
// it will remove circle from box 3


// using loops 

const all_box = document.getElementsByClassName('box');
for(let i = 0;i<all_box.length ;i++){
    all_box[i].classList.add('circle')
}

box3 = document.getElementById('box-3');
box3.classList.remove('box');// it will remove the box from box 3

// creating a new element

// 1st is to get the access
// 2nd is the content
// 3rd is to appending(now working below)

const newPara = document.getElementById('p');
newPara.innerText= "This is the new paragraph";

const cont = document.getElementById('cont');
cont.appendChild(newPara)

newPara.classList.add('box');
newPara.classList.add('circle')