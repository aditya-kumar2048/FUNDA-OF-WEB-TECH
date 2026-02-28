console.log("Welcome Mittron!!");

console.log("\nBasic Calculation\n")
let a = 5;
let b = 3;

let c = a + b;
console.log(c);
console.log(a*b);
console.log(a/b);//float value
console.log(a%b);// gives remainder
console.log(a&b);
console.log(a**b);// power a ^ b

console.log(3 + 8);
console.log(c + 8);
console.log(c++);//8
console.log(++c);//10

console.log("\nIncrement , decrement , postfix , prefix\n");

let x = 5;
x++;
console.log(x)//6

let y = 7
y--
console.log(y) // 6

let name1 = "Aaadi";

name1++
console.log(name1);// NaN - Not a Number

let first_Name = "Aditya";
let sec_Name = "Kumar";
console.log(first_Name + sec_Name )
console.log(first_Name +" "+ sec_Name )

console.log(first_Name + sec_Name + 15)

let job = true;
job++;
console.log("job Status  = ", job) // 2(true -> 1)(false -> 0)


let num1 = 5;
let num2 = 5;

console.log("postIncrement ",num1++);
console.log(num1)
console.log("PreIncrement ",++num2);
console.log(num2)

console.log("\nMathematical Operators (BODMAS)\n");

console.log(5 + 3 + 2);
console.log((4*3) + 2);
console.log(3+6%2); // 3

console.log("\nAssignment Operator\n")

let salary = 10000;

salary = salary+2000;

salary-= 2000;
salary*=2;
// salary%=3;
// salary**=4; // try with less values
console.log(salary)


console.log("\nComparision Operator\n");
console.log("symbols : == , === , != , < , > , !== , <= , >= \n Always remember ans will always in either true , false ");

console.log(9==9);

console.log(9!=9);

console.log(2>10)

console.log(2<10)

console.log(2>=10)

console.log(10<10)

console.log(10<=10)

console.log("ABX" == "ABX")

console.log("ABC" == "abc")

console.log("A" != "Z")

console.log("8" == 8)//true;

console.log("8" === 8)//false; as it strict comparison

console.log("1" != 1);//false as 1 and 1 are same

console.log("1" !== 1)// true as "1" and 1 are different data types

console.log("\nLogical Operator\n")

console.log(9>2 && 5<4) // false
console.log(3>2 && 0<2) // true;

console.log(3>2 || 3<1) // true
console.log(3<2 || 9>19) // false

console.log(!(4>2))// false

console.log("\nTernary Operator\n");

console.log((4>2)? 4 : 2);

console.log((2>"a") ? 2 : 1);

let totalBill = 39;

console.log((totalBill>20) ? "you will get 5% discount" : "No Discount")

console.log("\nBitwise Operator\n");

console.log(5&3);//5 - 101 , 3 - 011 , 5 &(same value = true , diff value = false) 3 - 001  (return 1 only if both are 1)

console.log(2 ^ 3); 
// 2 - 10 , 3 - 11 , 2 ^ 3 = 01 ( return 1 if bits are different)

console.log(2|3) 
// 2 = 10 3 = 11 , 2|3 = 10 + 11 = 11(3) (retunr 1 if at least one of the bits is 1)
