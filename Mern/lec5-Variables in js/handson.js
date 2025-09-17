console.log("Hello world");
let person1 = "Harsh";
let person1Age = 20;
let person2 = "Riya";
let person2Age = 21;
console.log("sum of ages both the person:", person1Age + persson2Age);
person1 = "harsh singh";
console.log(person1);
let person; // uninitialized
//const variable
const studentName = "Rahul"; // this value cannot be change
const employeeName = " Rahul Kumar "; //types of data we can store in const
//store age
const employeeAge = 30;
//store Date of birth (dob)
const dob = " 23-Jan-2002";
console.log("Student Name:" + studentName); // add two strings

//data type -> type of value a variable holds
console.log("checking type of DOB Variables:", typeof dob);
console.log("checking type of employeeAge variable:", typeof employeeAge);

//various data types in javascript
//boolean
const isStudent = true;
console.log(" checking type of isStudent variable:", typeof isStudent);
// string -> refer above dob example
// number -> refer above employeeAge example

//Js is dynamically typed language
let x = "Hi How are you"; // x is of type string
x = 20; // x is now of type number
x = false; //x is now of type boolean 
/*-=========================Arthmetic Operators=================*/

let a = 10;
let b = 20;

// Sum
let c = a + b;
console.log("sum of a and b:", c);

//substract
c = b - a;
console.log(" b- a =" + c);

//multiplication
c = a * b;
console.log(" a * b =" + c);

//division
c = b / a;
console.log("b/a" + c);

// remainder -> %
console.log("a%b =", a % b);

//power ->
c = 2 ** 4;
console.log("2 raised to power 4:" + c);
//floor and ceil value of a decimal number
const decimalNumber = 20.35;
// 20(floor)< 20.35 < 21(ceil)
console.log("floor of 20.35", Math.floor(decimalNumber));
console.log("ceil of 20.35", Math.ceil(decimalNumber));


//Q1: convert minutes to seconds and print
const minutes = 24;

//print seconds
const seconds = minutes * 60;
console.log(seconds);
// Q2 covert seconds in to minutes
const second = 180;
const minute = second / 60;
console.log(minute);

//Q2: find last digit of a number
// Example : number = 234, print 4;
const number1 = 234;
// print last digit
const lastDigit = number1 % 10;
console.log("Last digit of", number1, "is", lastDigit);
//Q3 find  secondlast digit number
const number2 = 234;

const numWithoutLastDigit = Math.floor(number2 / 100);
const secondLastDigit = numWithoutLastDigit % 10;
console.log("seconLastDigit", number2, "is", secondLastDigit);
// find first digit
const numWithoutLastTwoDigit = Math.floor(number2 / 100);
const firstDigit = numWithoutLastTwoDigit % 10;
console.log("firstDigit", number2, "is", firstDigit);


const num = "123"
const str = "abc"
let result;

result = num * 2;
console.log(result);

result = num * num;
console.log(result);

result = str * 2;
console.log(result);

//Addition -> in addition, it prefers the string
result = num + 2;
console.log(result);

/* weired behaviour in case of decimal addition */
result = 0.1 + 0.2;
//-> 0.1-> convert decimal to binary store as a binary 001101
//-> retrieve 001010 to convert it to a decimal again

console.log(result);

/* Modulus of a negative number */
result = -31 % 7;
console.log(result);

/* Power method --> (**) */
result = Math.pow(2, 5); // works exactly same as 2**5
console.log(result);

/* precedence and associativity */
let r = 5;
r = r + 5; //RHS calculated first, then it is assigned to LHS
r += 5;
console.log(r);

r *= 5;
console.log(r);

r = "34";
r += 26;
r *= 2;
console.log(r);