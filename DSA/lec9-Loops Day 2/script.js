// find factorial of 5
let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact = fact * i;

}
console.log("factorial of 5", fact);

//write a program to check if a no is prime or not
const N = 7;
let divisionCount = 0;
for (let i = 1; i <= N; i++) {
    if (N % i == 0)
        divisionCount++;
}
if (divisionCount > 2) {
    console.log("not prime");

} else {
    console.log("prime")

}


// greatest common divisior home work


// ========================brek and continue keywords===============================
//break keywords
//print numbers from 100 to 200 and immediately stop when a number divisible come

for (let i = 100; i <= 200; i++) {
    if (i % 17 == 0) {
        break;

    }
    console.log(i);


}
//continue keyword-> skips further statement  and directly jumps to updation part
//print the square of all nos expect nos divisible by 17 from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 17 == 0)
        continue;
    console.log(i ** 2);


}

///*print all od numbers 1 to 100 are divisible by 5
console.log("odd divisible by 5");
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 || i % 5 != 0)

        continue;
    console.log(i)







}






//print first 10 odd number from 1 to 200 that are divisible by 5


//==================nested for loop==================

//write aprogram to print 10 '*'
let n = 10;
let starString = "";
for (let i = 0; i < n; i++)
    starString += "*";
console.log(starString);

//write a program to print 10 lines of 10 '*' in one line
let M = 10;
for (let i = 0; i < M; i++) {
    let starString = "";

    for (let j = 0; j < n; j++)
        starString += "*";
    console.log(starString);

}
// print below pattern
/*1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6*/
let l = 1;
let k = 6;
for (let i = 0; i < k; i++) {
    let starString = "";

    for (let j = 0; j < l; j++)
        starString += "1 2 3 4 5 6";
    console.log(starString);

}
/*bonus question guess output
const val=1+*/





/*h.w
print this pattern
A.
*****
****
***
**
**/

/*B.
1
12
123
1234
12345
123456*/

//====================do while loop======================
/* first executes the statements inside do block then ,then check for condition inside while,
if this condition is true the do block will again be executed else  it will stop there
-Note -even thourgh  the condition false the statement under do bloock will execute once
*/
/*/
do {
    console.log("Hi,I'm do while loop");
} while (false);

//const response = prompt("Do you want to continue?");
console.log(response)

//
let response1;
let responseCounter = 0;

*/ //