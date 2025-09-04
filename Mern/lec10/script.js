/* optimized code for the checking prime number
-perfect square wil always  have odd divisors*/
let N = 117;
// let sqrt = Math.pow(N,0.5)
let sqrt = Math.sqrt(N);
let isprime = true;

for (let i = 1; i <= Math.floor(sqrt); i++) {
    if (N % i == 0) {
        isprime = false;
        break;

    }

}
const isPrimeMessage = isprime ? "is a prime number" : "is not a prime number";
console.log(N + isPrimeMessage);


/*pattern questions
A.
*****
****
***
**
*
*/

N = 5;
let stars = "";
for (let i = 0; i < N; i++) {
    stars += "*";
}
console.log(stars);
let M = 5;
for (let i = 0; i < M; i++) {
    let stars = "";
    for (let j = 0; j < N - i; j++) {
        stars += "*";
    }
    console.log(stars);
}


/*
B.
1
1 2
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6*/
// for 1 line
let n = 6;
let num = "";
for (let i = 1; i <= n; i++)
    num += i + " ";
console.log(num);




for (let i = 1; i <= n; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num += j + " ";
    }
    console.log(num);
}

/*
// scope

- -> let, const,var
-variable x
-Basically tells when we can access things in js
-types -> global scope  -> can be access anywhere
-block scope{}->valid for let and const not for var


console.log({letVariable});//cannot access 'letVariable' before initialization
let letVariable;
// console.log({letVariable});//prints "undefined"
console.log(undeclaredVariable); //undeclare variable not define
dfg =12-> global variable not a good practice
console.log(dfg); */

{
    var emptyBlockVariable = "abcd";
    console.log({ emptyBlockVariable });
}
console.log({ emptyBlockVariable }); //gives : undeclaredVariable is not defined

/*Nested scope -> looks in current scopes
if the variable is defined or not and of found uses value of variable from current scope otherwise loops in parent scope

also child scopes can access var defined in parent scope but parent cannot access variable defined */
{
    const emptyBlockVariable = "abcd";
    // console.log({ emptyBlockVariableChild }); {
    const emptyBlockVariableChild = "abcde";
    console.log("===inside block===", { emptyBlockVariable: emptyBlockVariableChild });

}


console.log({ varVariable });
var varVariable = 6;