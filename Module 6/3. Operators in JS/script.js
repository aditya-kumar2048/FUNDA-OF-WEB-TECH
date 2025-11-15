// Operators in JS :-
//1. Arithmetic operator (+,-,*,/,%,=)
//2. Increment(++) and Decrement Oprator(--)
//3. Exponential Oprator(**)
//4. Short Hand Opreator
//5. Equals(==)
//6. Strict Equals(===)
//7. Logical Opreator (AND || OR|| NOT)




// 1. Arithmetic operator (+,-,*,/,%,=)

// Assignment operator (=)
const a = 5;
const b = 3;
const Sum = a + b;
// Aditional operator 
console.log(Sum);

//Multiplication
const prod = a * b;
console.log(prod);

// subtraction
const sub = a - b;
console.log(sub);

// division
const div = a / b;
console.log(div);

// remainder
const rem = a % b;
console.log(rem);

// 2. Increment and Decrement Oprator

// Increment Operator (++)

let abc = 12;
abc++; // abc = abc + 1;
console.log(abc)

// post increment(a++)
let m = 5;
console.log(m);
console.log(m++);// just updated to 6 after printing 5
console.log(m);

// pre increment(++a)
let n = 8;
console.log(n);
console.log(++n);

//  Decrement Operator

let xyz = 123;
xyz--; // xyz = xyz - 1;
console.log(xyz)

// post decrement 

let x = 6;
console.log(x);
console.log(x--);
console.log(x);

// pre decrement

let y = 8;
console.log(y);
console.log(--y);


//3. Exponential Oprator(**)

let ab = 2;
let bc = 4;
const res = ab**bc;
console.log(res);

//4. Short Hand Opreator

// a = a + b;
let xy = 2;
let yz = 4;
xy = xy + yz;
console.log(xy);
xy += yz;
console.log(xy);//6+4 = 10


//5. Equals(==)
let g = 5;
let h = 9;
console.log(g == h)

//6. Strict Equals(===)

let i = 8;
let k = '8';
console.log(i==k);//true
console.log(i===k);//strict equals -> false
console.log(i!=k);
console.log(i!==k);
console.log(i<=k);
console.log(i>=k);


//7.  Logical Opreator (AND < OR < NOT)
// AND - (&&), OR (||), NOT (!)

const p = true;
const q = true;

// Logical AND(&&)

const resl = p&&q;
console.log(resl);

// Logical OR(||)

const e = false ;
const r = true;
console.log(r||e)//true
console.log(r&&e)//false

//Logical Not(!)

const w = false;
console.log(!w);
console.log(!w);
