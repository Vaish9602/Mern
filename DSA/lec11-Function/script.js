/****************function*************************
-dry principal - dont repeat yourself
function:
- is created  when we want to use some lines of code multiple times in our project 
and we dont know when and where exactly we need to have this block of code

- in simple terms functions are a block of code that performs specific tasks*/
//defining a function
//function naming rules is same as variable rule
function greetUser() {
    console.log("hello world");
}
//calling or invoking function
greetUser();
greetUser();
greetUser();
greetUser();
console.log("bye world");
console.log("bye world");
greetUser();
greetUser();
greetUser();


//Q2
//parameterized function
//name variable here is a parameter
function greetSpecificUser(name) {
    console.log("hello" + name);
}
//vaishnavi here is argument passed to getSpecificuser function
greetSpecificUser("vaishnavi");
greetSpecificUser("rutu");


function showCheckInTime(name, time) {
    console.log("hello " + name + " you checked in at: " + time);
}
showCheckInTime("Mayur", "9pm");
showCheckInTime("shweta", "10am");


/* write a single function to print these lines while using only one console.log
-hello riya,welcome to our app
-hello pratik , welcome to our website
-hello deep,welcome to our office */
function welcomeGuest(name, place) {
    console.log("hello " + name + " welcome to our: " + place);
}
welcomeGuest("riya", "app");
welcomeGuest("pratik", "website");
welcomeGuest("Deep", "office");

//
function sum(a, b) {
    const c = a + b;
    return c;
}
const sum1 = sum(1, 4);
const sum2 = sum(13, 4);
const sum3 = sum(1, 40);
console.log({ sum1, sum2, sum3 });

// greatest of two numbers
function greatestNumber(a, b) {
    if (a > b)
        return a;
    else
        return b;

}
const greatest1 = greatestNumber(4, 3);
const greatest2 = greatestNumber(40, 33);
const greatest3 = greatestNumber(4, 13);
console.log({ greatest1, greatest2, greatest3 });

/*method 2
const max =Math.max(a,b);
method 3
const mx= a>b? a:b ;
return mx;
method 4
return condition*/

/* HW write a function to print the minimum of two numbers */


// giving default values to parameters
//function sum2(a = 0, b = 0) {
//sreturn a + b;
//}

//write a function to calculate both sum  of two numbers and sum of three numbers
/**ex-
 -sum(2,10) is 12
 -sum(1,3,10) is 14
 */
function calSum(A = 0, B = 0, C = 0) {
    return A + B + C;

}
let s2 = calSum(12, 13);
let s3 = calSum(12, 23, 43);
console.log({ s2, s3 });

//nested function
//function to issue book
function library(issuedDate) {
    const daysOfIssuance = calculateDays(issuedDate);
    /*if a book is issued for 10 or less days then fine is zero
    else fine is 3 rs per day after 10 days= number of days of issuedbbook*3; */

}
//asssuming today 25th
function calculateDays(issuedDate) {
    return 25 - issuedDate;
}
console.log("total fine: " + library(2));
console.log("total fine: " + library(12));
console.log("total fine: " + library(22));


//
// function to issue book
function library(issuedDate) {
    const daysOfIssuance = calculateDays(issuedDate);

    let fine = 0;
    if (daysOfIssuance > 10) {
        fine = (daysOfIssuance - 10) * 3;
    }

    return fine;
}

// assuming today is 25th
function calculateDays(issuedDate) {
    return 25 - issuedDate;
}

console.log("total fine: " + library(2)); // issued on 2 → 23 days → fine = (23-10)*3 = 39
console.log("total fine: " + library(12)); // issued on 12 → 13 days → fine = (13-10)*3 = 9
console.log("total fine: " + library(22)); // issued on 22 → 3 days → fine = 0

/*rest operator- combines all the values inside it and makes an array,
-always comes at last position in functions parameters */
function sumN(a, ...b) {
    console.log(a, b);
}
sumN(1, 3, 2, 4, 5, 6, 7, 3);