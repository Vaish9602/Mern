//Day of the Week
//Input a number (1–7). Print the corresponding day.
const num = 3;
switch (num) {
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
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("inValide day number");

}


//Month Days
//Input a number (1–12). Print how many days that month has (assume February → 28 days).
const number = 6;
const year = 2025;
switch (number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log("29 days");
        } else {
            console.log("28 days");

        }

        break;
    default:
        console.log("invalide month number");

}
//Simple Calculator
//Input two numbers and an operator (+, -, *, /). Perform the operation.
const num1 = 12;
const num2 = 15;
const operator = '+';
switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;

    default:
        console.log("invalid operation")

}

/*Grade Classification
Input marks (0–100). Print grade:

90–100 → A

80–89 → B

70–79 → C

60–69 → D

< 60 → F*/
const marks = 78;
switch (true) {
    case marks >= 90:
        console.log("A");
        break;
    case marks >= 80:
        console.log("B");
        break;
    case marks >= 70:
        console.log("C");
        break;
    case marks >= 60:
        console.log("D");
        break;
    default:
        console.log("F");

}

/*Traffic Signal
Input a color (red, yellow, green). Print action: Stop / Ready / Go.*/
const color = "red";
switch (true) {
    case color == "red":
        console.log("stop");
        break;
    case color == "yellow":
        console.log("ready");
        break;
    case color == "green":
        console.log("go");
        break;
    default:
        console.log("invalide color");
}

/*Vowel or Consonant
Input a character. Print Vowel if it is a, e, i, o, u else Consonant.*/
const char = "b";
switch (char) {
    case "A":
    case "E":
    case "O":
    case "I":
    case "U":
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel");
        break;

    default:
        console.log("consonant")

}


/*Season Finder
Input a month number (1–12). Print the season:

Winter (Dec–Feb)

Summer (Mar–May)

Monsoon (Jun–Sep)

Autumn (Oct–Nov)*/
const month = 11;
switch (true) {
    case month == 12 || month == 1 || month == 2:
        console.log("winter");
        break;
    case month == 3 || month == 4 || month == 5:
        console.log("Summer");
        break;
    case month == 6 || month == 7 || month == 8 || month == 9:
        console.log("Monsoon");
        break;
    case month == 10 || month == 11:
        console.log("Autumn");
        break;
    default:
        console.log("invalide month number");


}


/*Even or Odd
Input a number. Print Even if divisible by 2 else Odd.*/
const num5 = 12;
switch (true) {
    case num5 % 2 == 0:
        console.log("even");
        break;
    default:
        console.log("odd");


}


/*Shape Area Calculator
Input shape type (circle, square, rectangle, triangle). Based on choice, calculate area.*/
const shape = "triangle";
switch (shape) {
    case "circle":
        const radius = 12;
        const pi = Math.PI;
        const areaC = 2 * pi * radius;
        console.log("area of circle", areaC);
        break;
    case "square":
        const side = 2;
        const areaS = side * side;
        console.log("area of square", areaS);
        break;
    case "rectangle":
        const length = 12;
        const width = 2;
        const areaR = length * width;
        console.log("area of reactangle", areaR);
        break;
    case "triangle":
        const base = 3;
        const height = 4;
        const areaT = 1 / 2 * base * height;
        console.log("area of triangle", areaT);
        break;
    default:
        console.log("invalide shape");



}
/*Menu-Driven Program
Create a menu with 4 options:
1 → Square of a number
2 → Cube of a number
3 → Square root of a number
4 → Exit*/
const menu = "cube of a number";
const num3 = 2;
switch (menu) {
    case "Square of a number":
        const square = num3 ** 2;
        console.log("Square of a numbe", square);
        break;
    case "cube of a number":
        const cube = num3 ** 3;
        console.log("cube of a number", cube);
        break;
    case "Square root of a number":
        const squareRoot = Math.sqrt(num3);
        console.log("Square root of a number", squareRoot);
        break;
    default:
        console.log("Exit");


}