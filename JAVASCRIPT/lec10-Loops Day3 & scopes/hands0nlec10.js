//checking prime number
let N = 117;
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