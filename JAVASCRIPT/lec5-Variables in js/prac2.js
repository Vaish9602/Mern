console.log("hello world");

let person1="harsh";
let age= 20;
let person2="riya";
let age2=21;
console.log("sum=",age+age2);

//let variable change their value
person1="sdhjf";
console.log(person1)
let person;// uninitialized
console.log(person);


//const variable
const studentName ="rahul"// this value cannot be change 
const eage=21;
console.log("student Name:"+ studentName);// add two string

const dob= "23-jan-2002";
console.log(typeof dob);


const isStudent=true;
console.log(typeof isStudent);

let a=10;
let b=20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b)

const decimalNumber=20.35;
console.log(Math.floor(decimalNumber))
console.log(Math.ceil(decimalNumber))

//convert minute to second
const m= 24;
const s= m*60;
console.log(s);

const min=s/60
console.log(m)


//find last digit
const  number=123;

const lastDigit=number%10;
console.log(lastDigit)

//first digit
const firstDigit= Math.floor(number/100)
console.log(firstDigit);
// second digit
const secondDigit=(Math.floor(number/10)%10)
console.log(secondDigit);
console.log("123"*2)

console .log("12"-1);
console.log("12"+1);

console.log(-31%7)

let r=5;
r+=5;
r*=2
console.log(r)
