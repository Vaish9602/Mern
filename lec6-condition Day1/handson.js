//precendence associtivity
let c = 3 * 4 + 30 / 6 * 5 ** 2;
console.log(c);

let x = 3 + 3 ** 4 / 3 ** 2 - 3 * 4 / 6;
console.log(x);

const y = ("123" + 1) * 2 ** 2 - 21 / 7;
console.log(y);
console.log("123" + 1);
const z = "123" + 5 ** 5 / 25 ** 2 / 5;
console.log(z);

//condition
//even odd
let num = 4;
if (num % 2 == 0) {
    console.log("even");

} else {
    console.log("odd");
}

//age
let age = 28;
if (age >= 18) {
    console.log("your can vote");
} else {
    console.log("you can not vote");
}

//check of half of any no is even or not
let num1 = 18;

if ((num1 / 2) % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}
//********************  // == vs ===//*************************** */
let a = "12";
const b = 12;
let d = 12;


if (a == b) {
    console.log("Both a& b has same Value");
}

if (b === d) {
    console.log("Both b & d has same value and datatype");
}

// Grading sytem
let score = 67;
if (score >= 80) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else if (score >= 40) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

//
let age1 = 19;
let gender = "Female";
if (age1 >= 18 && gender == "Male") {
    console.log("Mature boy");
} else if (age1 >= 18 && gender == "Female") {
    console.log("Mature boy");


}
//Q2



let ticketNo = 101;
if (ticketNo == 11 || ticketNo == 101) {
    console.log("winner");

} else {
    console.log("looser");
}


// Q3
let loggedIn = true;
let hasSubcription = true;
if (loggedIn && hasSubcription) {
    console.log("user has access")
} else {
    console.log("please give subcription")
}

//Q5all nos expect 17 are good numbers check if num is good or not
let num2 = 17;
if (num2 != 17) {
    console.log("bad")
} else {
    console.log("good")
}

// check palindrome or not
let num3 = 121;
let firstDigit = Math.floor(num3 / 100);
let lastDigit = num3 % 10;
if (firstDigit == lastDigit) {
    console.log("num is palindrome")
} else {
    console.log("Not palindrome")
}

// check if a number is decimal or integer
let value = 12.11;
if (Math.ceil(value)) {
    console.log("decimal");
} else {
    console.log("integer")
}