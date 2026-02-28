console.log("Hello Mitron!!");

let string1 = 'I am working on a dev project'
console.log(string1);

let string2 = "I am working on a dev project";
console.log(string2)

// both are string and they can access by single and double quote too

console.log(string1 === string2);

let string3 = `I am working on a dev project`
console.log(string3)

console.log(string1 === string3)
console.log(string2 === string3)
// It means there are 3 way to write a string

// 2 more way to create a string
// String() constructor

// new-> objects

let str1 = new String("What am I");
console.log(typeof str1);

let str2 = String("What am I");
console.log(typeof str2);

console.log(str1 == str2); // text to same h
console.log(str1 === str2) // data type same nhi h


// typeconversion

const inputYear = '2001'

console.log(inputYear + 28) // string it does not add 28 with 2001 as it is in string now we need to type covert it to solve logically
/*
//let birthYear = prompt("Enter the birthYear : ");
let birthYear = Number(prompt("Enter Your birthYear : "));
console.log(typeof birthYear);
console.log(birthYear+24);
// it concatinate the ans istead of add
console.log(Number(birthYear) + 24);
// or we can convert the birthyear into number
*/
console.log(Number("Aditya"))

console.log(typeof NaN);// Number

// type Coersion

console.log("I am " + 25 + " years old");
// Number to string

console.log(25);

console.log('23' + '10' - 3); // sting to number

console.log('23' + '10' + 3);

console.log('20' * '2');

let n = '1' + 1;//11
n = n-1; // 11-1 = 10
console.log(n);

let k = 2 + 3 + 4 + '5'
console.log(k) // 95 - string
console.log(typeof k)

// truthy and false

console.log(Boolean(0));
console.log(Boolean( ))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))


let Money = 20
// money is filled that means it is true;
if(Money){
    console.log("AAj to party hogi")

}else {
    console.log("Pehle kaam kro fir party hogi")

}

let height ;
// empty height is count as false;
console.log(height);

if(height){
    console.log("Yaaayy");
}
else{
    console.log("natra sala");
}

// let name = prompt("Enter your name");
// // if nothing is enter it store undefined and due to this it run false statement


// if(name){
//     console.log("Hello Welcome" , name);
// }else{
//     console.log("Koi baat nhi chlo or sunao")
// }

// String Manipulation

let str = "Aditya"
console.log(str[4]);// random accessibility;
// charAt();
console.log(str.charAt(2));

// str[3] = L; // not allowed to modify the word
// console.log(str);

str = "Karan"; // we can not modify b/t the word but we can change the word by initializing another word
console.log(str);

let sentence = "I am learning javaScript";

console.log(sentence.length) // 24

let a = "Aditya"
let b = "Kumar"

let c = a + " "+b;
console.log(c);

console.log(a +=" ");
console.log(a +=b);
console.log(a);

console.log('Berry' < 'Cherry');
// it will judge on the basis of the ASCII value of first letter as B = 66 and C = 67 so it return true;
console.log('Berry' < 'Bingo');
// here both first letter is same so it will move to next element like e = 101 and i = 105 so obviously Bingo is greater and its true;

console.log('berry' < 'Bingo');

let day  = "I have good day";
let day2 = "I have good day!";
console.log(day2>day);

console.log(day2.length > day.length);

// const line = "Hello ji \n welcome everyone"
// console.log(line);
// instead of this we can use 
const line = `Hello ji
    kaise ho aap!!`;
    console.log(line);
    // we can print where we want to move the line.


// sting interpolation -> ${}
let friend1 = "Farhan"
let friend2 = "Raju";

console.log(`My two friends are ${friend1} and ${friend2}`);

// we can not enter any condition in string interpolation like if-else

// Concatination

let d = "Aman"
let e = "Modak";

let f = d.concat(' ',e);
console.log(f);

// lowercase / uppercase;

console.log(f.toLowerCase());
console.log(f.toUpperCase());

// check anything in sentences

let Hero = "IronMan is a superhero";

console.log(Hero.includes("IronMan"));
console.log(Hero.includes("ironman"));

//indexof() - it tells the index where the element is found
console.log(Hero.indexOf("superhero"));
console.log(Hero.indexOf("IronMan"));

// Slicing and substring works
// slice is use to extract a little copy of a portion of an string
console.log(Hero.slice(-2))
console.log(Hero.slice(10))
console.log(Hero.slice(7,10));
// substring is use to return new string containing the character b/w two given index.
console.log(Hero.substring(4,0))
console.log(Hero.substring(-1))
console.log(Hero.substring(10))