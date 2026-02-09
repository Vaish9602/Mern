const name11 = "suresh";
const name22 = "ramesh";
const marks11 = 40;
const marks22 = 30;
let winnerName1;
let winnerMarks1;

if (marks11 > marks22) {
    winnerName1 = name11;
    winnerMarks1 = marks11;

} else {
    winnerName1 = name22;
    winnerMarks1 = marks22;

}
console.log(winnerName1, "as scored highest =", winnerMarks1);


// 
const name1 = "suresh";
const name2 = "ramesh";
const marks1 = 30;
const marks2 = 40;
let winnerName = name1;
let winnerMarks = marks1;

if (marks2 > marks1) {
    winnerName = name2;
    winnerMarks = marks2;

}

console.log(winnerName, "as scored highest =", winnerMarks);


//Q1 check  no is even or odd
const num = -24;
num % 2 == 0 ? console.log("even") : console.log("odd");
//method2
const isEvenOrOdd = num % 2 == 0 ? "even" : "odd";
console.log(num + "is" + isEvenOrOdd);

//Q2 positive negative
num > 0 ? console.log("positive") : console.log("negative");
//method2
const isPositiveOrNegative = num > 0 ? "positive" : "negative";
console.log(num + "is" + isPositiveOrNegative);

//Q3no is positive negative zero
num > 0 ? console.log("positive") : num < 0 ? console.log("negative") : console.log("zero");
//method2
const isPositiveOrNegativeOrZero = num > 0 ? "positive" : num == 0 ? "Zero" : "Negative";
console.log(num + "is" + isPositiveOrNegativeOrZero);
//homework
// print the  name and score of highest scoring student using ternary operator

const fullName = "Suresh singh";
const fullName2 = "ramesh singh";
const score1 = 40;
const score2 = 30;
const highestMarks = score1;
const highestMarksName = "fullName";
const isHighestMarksOrName = score1 > score2 ? fullName : fullName2;
const highestScore = score1 > score2 ? score1 : score2;
console.log(highestScore + "is" + isHighestMarksOrName);


//print  greastest among three numbers
const a = 12;
const b = 10;
const c = 15;
a >= b && a >= c ? console.log("a") : b >= a && b >= c ? console.log("b") : console.log("c");


// max of two no
const num1 = 12;
const num2 = 5;
const maxOfNum1Num2 = Math.max(num1, num2);
const minOfNum1Num2 = Math.min(num1, num2);
console.log(maxOfNum1Num2);
console.log(minOfNum1Num2);

//explore max and min of three or more number
const a2 = 12;
const a3 = 15;
const a4 = 17;
const a6 = 19;
const maximum = Math.max(a2, a3, a4, a6);
const minimum = Math.min(a2, a3, a4, a6);
console.log(maximum);
console.log(minimum);


// switch case
const dayNumber = 3
switch (dayNumber) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");

        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day number")
}


//Grading system
const grade = 85;
switch (true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;

    case grade >= 70:
        console.log("C");
        break;

    default:
        console.log("failed")

}