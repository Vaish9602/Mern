//Q1Check whether a number is even or odd.
//method 1
const num = 12;
num % 2 === 0 ? console.log("even") : console.log("odd");
//method 2
console.log(num % 2 === 0 ? "Even" : "Odd");
//method 3
const result = num % 2 === 0 ? "Even" : "Odd";
console.log(num + " is " + result);



//Check whether a number is positive or negative.
// method 1
const num1 = -2;
console.log(num1 > 0 ? "positive" : "Negative");
//method 2
const isPositiveOrNegative = num1 > 0 ? "positive" : "negative";
console.log(num1 + " is " + isPositiveOrNegative);

//Check whether a number is positive, negative, or zero.
//method1
const num2 = 0;
console.log(num2 > 0 ? "positive" : num2 < 0 ? "negative" : "zero");
//method2
const isPositiveOrNegativeOrZero = num2 > 0 ? "positive" : num2 < 0 ? "Negative" : "zero";
console.log(num2 + " is " + isPositiveOrNegativeOrZero);

//Print the greater of two numbers.
const a = 10;
const b = 11;
console.log(a > b ? "a is greater" : "b is greater");
// method 2
const isMaxNumber = a > b ? "a" : "b";
console.log(" max number is " + isMaxNumber);
//Print the smallest of two numbers.
//method 1
const a1 = 12;
const b1 = 15;
console.log(a < b ? "a is smaller" : "b is smaller");
//method 2
const isSmallerNumber = a < b ? "a" : "b";
console.log("smaller number is " + isSmallerNumber);



//Find the greatest of three numbers.
//method 1
const no = 12;
const no1 = 13;
const no2 = 14;
console.log(no >= no1 && no >= no2 ? "no is greater" : no1 >= no && no1 >= no2 ? "no1 is greater" : "no2 is greater");
//method 2
const isGreatestNo = no >= no1 && no >= no2 ? "no is greater" : no1 >= no && no1 >= no2 ? "no1 is graeter" : "no2 is graeter";
console.log("greater number is " + isGreatestNo);





//Find the smallest of three numbers.
//method 1
console.log(no <= no1 && no <= no2 ? "no is small" : no1 <= no && no1 <= no2 ? " no1 is small" : "no2 is small");
// method 2
const isSmallerNum = no <= no1 && no <= no2 ? "no " : no1 <= no && no1 <= no2 ? " no1 " : "no2 ";
console.log("smaller num is " + isSmallerNum);


//Check whether a person is eligible to vote (age ≥ 18).
const age = 25;
const isEligibleOrNot = age >= 18 ? "eligible" : "Not Eligible";
console.log("person is " + isEligibleOrNot);

//Check whether a person is adult (18+) or minor (<18).
const age1 = 15;
const isAdultOrMinor = age1 >= 18 ? "adult" : "minor";
console.log("person is " + isAdultOrMinor);


//Check whether a number is divisible by 5.
const number = 57;
const isDivisibleOrNot = number % 5 == 0 ? "divisible" : "Not divisible";
console.log("number is " + isDivisibleOrNot);


//Strings & Messages

/*Print "Pass" if marks ≥ 40, otherwise "Fail".

Print grade:

A if marks ≥ 90

B if marks ≥ 75

C if marks ≥ 60

D if marks ≥ 40

F otherwise
(Use nested ternary).*/
const marks = 65;
const isPassOrFail = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : marks >= 40 ? "D" : "F";
console.log("person have a grade " + isPassOrFail);

//Print "Even length" or "Odd length" for a string.
const str = "hello"
const isLengthEvenOrOdd = str.length % 2 == 0 ? "even " : "odd";
console.log("string lenght is " + isLengthEvenOrOdd);


//Check if a given character is a vowel or consonant.
const char = 'v';
const isVowelOrconsonant = "aieouAIEOU".includes(char) ? "Vowel" : "consonant";
console.log("character is " + isVowelOrconsonant);


//Print "Uppercase" if a character is uppercase, otherwise "Lowercase".*/
const char1 = "b"
const isUpperOrLowerCase = char1 >= "A" && char1 <= "Z" ? "uppercase" : "lowercase";
console.log("character is " + isUpperOrLowerCase);

//✅ Real-life scenarios

//Check whether someone has to pay full ticket (age ≥ 12) or half ticket (age < 12).
const age2 = 45;
const isFullticketOrHalfticket = age2 >= 12 ? "full ticket" : "half ticket";
console.log(" this person have a " + isFullticketOrHalfticket);

//Check maximum marks scorer among two students (name + score).
const namee = "Vaishnavi";
const namee2 = "riya";
const score = 90;
const score2 = 65;
const topStudent = score > score2 ? namee : namee2;
const topscore = score > score2 ? score : score2;
console.log(topStudent + " scored the highest with " + topscore + " Marks ");


//Print "Leap Year" if year is leap, otherwise "Not Leap".
const year = 2025;
const isLeapYearOrNot = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? "Leap Year" : "Not Leap Year";
console.log(" this year is  " + isLeapYearOrNot);

//Given temperature, print "Hot" if >30, "Warm" if 15–30, otherwise "Cold".
const temperature = 12;
const isTemperature = temperature > 30 ? "Hot" : temperature >= 15 && temperature <= 30 ? "warm" : "cold";
console.log(" temperature is " + isTemperature);


//Given two numbers, print "Equal" if same, otherwise "Not Equal".
const number1 = 12;
const number2 = "12";
const isEqualOrNotEqual = number1 == number2 ? "equal" : "not equal";
console.log("number is " + isEqualOrNotEqual);

//Compare salaries of two employees and print who earns more along with the salary.
const emp1 = "rahul";
const emp2 = "om";
const salary1 = 100;
const salary2 = 300;

const highestEarnName = salary1 > salary2 ? emp1 : emp2;
const highestSalary = salary1 > salary2 ? salary1 : salary2;
console.log(highestEarnName + " earns more along with salary " + highestSalary);
//Even or Odd
//Input an integer n. Print true if it’s even, otherwise false.
const n = 12;
const isEO = n % 2 == 0 ? true : false;
console.log(n + " is  the " + isEO);

//Divisible by 5
//Input an integer. Print true if divisible by 5, otherwise false.
const div = 34;
const isDivNot = div % 5 == 0 ? true : false;
console.log(div + " is the  divisible " + isDivNot);




//Positive Number Check
//Input a number. Print true if positive, else false.
const pov = 13;
const isPosOrNeg = pov > 0 ? true : false;
console.log(pov + "is the positive" + isPosOrNeg);

//Leap Year Check
//Input a year. Print true if it’s a leap year, else false.
const year1 = 2025;
const isLeapOrNot = ((year1 % 4 == 0 && year1 % 100 != 0) || year1 % 400 == 0);
console.log(year1 + "leap year" + isLeapOrNot);

//Character Check (Vowel/Not)
//Input a character. Print true if it’s a vowel (a, e, i, o, u), otherwise false.
const char2 = "a";
const isVowelOrNot = "aeiouAIEOU".includes(char2) ? true : false;
console.log(char2 + "is the vowel" + isVowelOrNot);

//age Eligibility
//Input age. Print true if age ≥ 18, else false.
const age3 = 12;
const isage = age3 >= 18 ? true : false;
console.log("is eligible " + isage);

//Maximum Number
//Given two numbers, print true if the first is greater than the second, otherwise false.
const a2 = 12;
const b2 = 10;
const isgreatest = a2 > b2 ? true : false;
console.log("number is greatest " + isgreatest);