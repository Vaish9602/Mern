/*******************************if else if else*********************** */ 
//Check if a number is even or odd.
let num=7;
if(num%2==0){
    console.log("even no");
}else{
    console.log("odd")
}

//Check whether a number is positive, negative, or zero (use if–else if–else).
num=-3;
if(num>0){
    console.log("positive");

}else if(num<0){
    console.log("Negative");
}else{
    console.log("zero")
}


//Find the greater of two numbers.
let a=12;
let b=2;
if(a>b){
    console.log(a);
}else{
    console.log(b);
}

//Find the largest of three numbers using if–else if–else.
a=10;
b=4;
let c=12;
if(a>b && a>c){
    console.log(a,"is greater")
}else if(b>a && b>c){
    console.log(b,"is greater")
}else{
    console.log(c,"is greater")
}

//Check whether a person is eligible to vote (age ≥ 18).
let age=67;
if(age>= 18){
    console.log(" a person is eligible to vote")
}else{
    console.log(" a person is not eligible to vote")
}

//Check whether a number is divisible by 5 or not.
num=21;
if(num%5==0){
    console.log("number is divisible by 5")
}else{
    console.log("number is not divisible by 5")
}

//Check whether a character is a vowel or consonant.
let str="i"
if("aeouiAEOUI".includes(str)){
    console.log("vowel")
}else{
    console.log("consonant")

}
//Check whether a year is a leap year or not.
let year=2016;
if((year%4==0 && year%100!=0)||year %400==0){
    console.log("leap year")
}else{
    console.log("not leap year")
}

//Check whether a number is a multiple of both 3 and 7.
num=25;
if(num%3===0 && num%7===0 ){
    console.log("number is a multiple of both 3 and 7.")
}else if(num%3===0){
     console.log("number is a multiple of  3 ")

}else if(num%7===0){
     console.log("number is a multiple of 7.")
}else{
    console.log("number is not a multiple of 3 or 7");
}
//Check whether a student passes or fails
//(assume passing marks = 35).
let marks=85;

if(marks>=35){
    console.log("pass")
}else{
    console.log("fail")
}

// grade system
marks=45;
if(marks>=90){
    console.log("Grade A")
}else if(marks>=75){
    console.log("Grade B")
}else if(marks>=60){
    console.log("Grade C")
}else if(marks>=35){
    console.log("Grade D")
}else{
    console.log("fail")
}

//check palindrome
num=20;
let firstDigit=Math.floor(num/100);
let secondDigit=Math.floor((num%100)/10);
let lastDigit= num%10;
console.log(firstDigit)
console.log(secondDigit)
console.log(lastDigit)

//check palindrome
num=121;
firstDigit=Math.floor(num/100);
lastDigit=num%10;
if(firstDigit===lastDigit){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}

/*********************************Nested if Practice Problems***************************** */
//Check the largest number among a, b, and c using nested if.
a=200;
b=70;
c=90;
if(a>b){
    if(a>c){
        console.log("a is greater")
    }else{
         console.log("c is greater")

    }
  
}else{
    if(b>c){
         console.log("b is greater")
    }else{
         console.log("c is greater")
    }
}

/**Voting Eligibility + Senior Citizen

If age ≥ 18 → eligible to vote

If eligible and age ≥ 60 → senior citizen

Else → normal voter / not eligible */
age=17;
if(age>=18){
    if( age>=60)
        console.log("Voting Eligibility + Senior Citizen")
    else{
        console.log("normal voter")
    }
}else{
    console.log("No voting Eligibility")
}



/*Pass, Fail, and Distinction

If marks ≥ 35 → Pass

If passed and marks ≥ 75 → Distinction

Else → Just Pass

Else → Fail*/
marks=78;
if(marks>=35){
    if(marks>=75){
        console.log("Distinction")
    }else{
        console.log("just pass")
    }
}else{
    console.log("fail")
}


/*Positive Number Check

First check if number ≠ 0

If true, check whether positive or negative

Else print zero */
num=4;
if(num!==0){
    if(num>0){
        console.log("positive")
    }else{
        console.log("negative")
    }
}else{
    console.log("zero")
}


/*ATM Withdrawal

If balance ≥ withdrawal amount

If withdrawal ≤ 20,000 → allow

Else → limit exceeded

Else → insufficient balance */

let balance=3000;
let withdrawal=15000;
if(balance>=withdrawal){
    if(withdrawal<=20000){
        console.log("allow")
    }else{
        console.log("limit exceeded")
    }
}else{
    console.log("insufficient balance")
}


/*Login System

If username is correct

If password is correct → Login successful

Else → Wrong password

Else → Invalid username */
let userName=true;
let password=false;
if(userName){
    if(password){
      console.log("login successfully")
    }else{
        console.log("wrong password")

    
    }
}else{
    console.log("invalid username")
}

/*Grade + Pass Status

If marks ≥ 35

If marks ≥ 90 → Grade A

Else → Other grade

Else → Fail */
marks=25;
if(marks>=35){
    if(marks>=90){
        console.log("Grade A")
    }else{
        console.log("other grade")
    }
}else{
    console.log("fail")
}



/*************************************Ternary Operator Practice Problems************************************ */
//Even or Odd
num=42;
let res=(num%2==0)? ("even"):("odd");
console.log(res)

//Voting Eligibility
age=34;
let result=(age>=18)?"eligible":"not eligible";
console.log(result);
//Largest of Two Numbers
a=23;
b=78;
result=(a>b)?"a is greater":"b is greater";
console.log(result);
//Pass/Fail
marks=56;
result=(marks>=35)?"pass":"Fail";
console.log(result);
//Divisible by 5
num=75;
result=(num%5==0)?"divisible":"Not divisible";
console.log(result);
//Leap Year Check
year=2026;
result=((year%4==0 && year%100!=0)||year%400!=0)?"leap year":"Not a leap year"
console.log(result);



/*******************************Switch–Case Practice Questions********************************** */
//Day of the Week
//Given a number (1–7), print the corresponding day name.
let day=3;
switch(day){
    case 1:
        console.log("Monday");
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
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;

    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day number");
    
}
//Simple Calculator
//Given two numbers and an operator (+, -, *, /), perform the operation using switch.

a=20;
b=30;
let operator="-";


switch(operator){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    case '*':
        console.log(a*b);
        break;


    case '/':
        console.log(a/b);
        break;
    default:
        console.log("invalid operation")



}



/*Vowel or Consonant
Given a character, check whether it is a vowel or consonant using switch. */
char="a";
switch(char){
    case 'a':case 'e':case 'i': case 'o': case 'u':case 'A':case 'E': case 'I':case 'O':case 'U':
        console.log("vowel");
        break;

default:
    console.log("consonant")

}

/* Grade System
Given a grade character (A, B, C, D, F), print the result message.*/

marks=67;
switch(marks){
    case (marks>=90):
        console.log("A");
        break;
    case (marks>=80):
        console.log("B");
        break;
    case (marks>=70):
        console.log("C");
        break;
    case (marks>=35):
        console.log("D");
        break;
    default:
        console.log("F")


}


/*Month Name
Given a month number (1–12), print the month name. */
let month=6;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("september")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("november")
        break;
    case 12:
        console.log("december")
    
}

/* Traffic Light System
Given color input (red, yellow, green), print the action.*/


/*Menu Driven Program
Given a choice:

1 → Check Even/Odd

2 → Check Positive/Negative

3 → Check Leap Year

Use switch–case. */

/*Basic ATM Menu

1 → Check Balance

2 → Withdraw

3 → Deposit

4 → Exit

Use switch.. */

