// 1️⃣ FizzBuzz ⭐⭐⭐ (Very Very Common)

// Print:

// "Fizz" → divisible by 3

// "Buzz" → divisible by 5

// "FizzBuzz" → divisible by both
let num=25;
if(num%3==0 && num%5==0){
    console.log("FizzBuzz")
}else if(num% 3==0){
    console.log("fizz");
}else if(num%5==0){
    console.log("BUzz")

}else{
    console.log("invalid")

}


// 2️⃣ Leap Year Check ⭐⭐⭐

// Check if a year is leap year.

// Condition:

// Divisible by 4

// Not divisible by 100

// OR divisible by 400

let year =2025;
if((year%4==0 && year%100!==0)|| year%400==0){
    console.log("leap year")
}else{
    console.log("Not ")
}

// 3️⃣ Largest of Three Numbers ⭐⭐⭐

// Find the largest among 3 numbers.
let a=10;
let b=20;
let c=30;
if(a>b && a>c){
    console.log("a is greater")
}else if(b>a && b>c){
    console.log("b is greater")
}else{
    console.log("c is greater")
}



// 4️⃣ Grade Calculator ⭐⭐

// Given marks:

// 90+ → A

// 75–89 → B

// 50–74 → C

// Below 50 → Fail
let marks=17;
if(marks>=90){
    console.log("A")
}else if(marks>=75 && marks<=89){
    console.log("B")
}else if(marks>=50 && marks<=74){
    console.log("C")
}else{
    console.log("fail")
}



// 5️⃣ Even or Odd ⭐⭐⭐

// Check whether number is even or odd.
if(num%2==0){
    console.log("even");

}else{
    console.log("odd")
}


// 6️⃣ Positive / Negative / Zero ⭐⭐

// Check number type using if-else.
num=23;
if(num>0){
    console.log("Positive")
}else if(num<0){
    console.log("Negative")

}else{
    console.log("Zero")
}
// 7️⃣ Simple Calculator (Switch Case) ⭐⭐⭐

// Input:

// num1

// num2

// operator (+ - * /)
a=10;
b=20;
let op="+";
switch(op){
    case "+":
        console.log(a+b)
        break;

    case "-":
        console.log(a-b)
        break;
    case "*":
        console.log(a*b)
        break;
    default:
         console.log("invalid operation")
   
    
}

// 8️⃣ Voting Eligibility ⭐⭐

// Check if age ≥ 18.
let age=25;
if(age>=18){
    console.log("eligible for vote")
}else{
    console.log("Not")
}



/*🔟 Login Validation (Real Interview Style) ⭐⭐⭐

Given:

username

password

Check:

If both correct → Login Success

Else → Invalid Credentials */
let username= "abc"
let password=123;
let user="abc"
let pass=23
if(username==user && password== pass){
    console.log("login successfully")
}else{
    console.log("NOT")
}