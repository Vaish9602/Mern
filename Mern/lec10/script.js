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