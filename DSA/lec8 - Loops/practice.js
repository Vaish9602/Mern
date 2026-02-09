//Print numbers from 1 to N


for(let i=1;i<=10;i++){
    console.log(i)

}
//2️⃣ Print numbers from N to 1
console.log("Print numbers from N to 1")
for(let i=10;i>=1;i--){
    console.log(i)
}
//3️⃣ Print all even numbers between 1 to N
console.log("Print all even numbers between 1 to N");
for(let i=1;i<=50;i++){
    if(i%2===0){
        console.log(i)
    }
}
//4️⃣ Print all odd numbers between 1 to N
console.log("Print all odd numbers between 1 to N")
for(let i=1;i<=10;i++){
    if(i%2!==0){
        console.log(i)
    }

}
//5️⃣ Find the sum of first N natural numbers
console.log("Find the sum of first N natural numbers")
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i
   

}
 console.log(sum)
//6️⃣ Find the sum of even numbers between 1 to N
console.log("Find the sum of even numbers between 1 to N");
sum=0
for(let i=1;i<=10;i++){
    if(i%2==0){
        sum+=i;
    }

}
console.log(sum)

// Find the sum of digits of a number
console.log(" Find the sum of digits of a number")
sum=0;
let num=1234
while(num>0){
    let digit=num%10;
    sum+=digit;
    num=Math.floor(num/10);
}
console.log(sum)
// 8️⃣ Count the number of digits in a number
console.log("Count the number of digits in a number")
let count=0;
let n=6789;
while(n>0){

    count++
    n=Math.floor(n/10)

}
console.log(count)
// 9️⃣ Reverse a number
n=1234;
let reverse=0;
while(n>0){
    let digit=n%10;
    reverse=reverse*10+digit;
    n=Math.floor(n/10)
}
console.log(reverse)
// 🔟 Check whether a number is palindrome
num=123
let firstDigit=Math.floor(n/100);
let last=n%10;
if(firstDigit===last){
    console.log("palindrome")
}else{
    console.log("not palindrome")

}
// Find the factorial of a number
//5!=4X3x2X1
let fact=1;
num=5;
for(let i=1;i<=num;i++){
    fact*=i;
}
console.log(fact)


// 1️⃣2️⃣ Check whether a number is prime
//A prime number is a number greater than 1 that has exactly two factors: 1 and itself.
n=117;
let isPrime=true;
if(n<=1){
    isPrime=false;
}else{
    for(let i=2;i*1<=n;i++){
        if(n%i==0){
            isPrime=false;;
            break;
        }
    }
}
const message=isPrime? "prime":"not prime"

console.log(message)
// 1️⃣5️⃣ Check whether a number is Armstrong
// Armstrong number = sum of digits³ = number
// Example: 153 → 1³ + 5³ + 3³ = 153num=153
n=153;
let temp=n
sum=0;
while(n>0){
    let digit=n%10;
    sum+=digit*digit*digit
    n=Math.floor(n/10)
}
if(sum===temp){
    console.log("Armstrong")
}else{
    console.log("Not ")
}
//palindrome
n=121
temp=n;
reverse=0;
while(n>0){
    let digit=n%10;
    reverse=reverse*10+digit;
    n=Math.floor(n/10)
}
if(temp===reverse){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}

//prime
n=117;
isPrime=true;
if(n<=1){
    isPrime=false;
}else{
    for(let i=2;i*i<=n;i++){
        if(n%i===0){
            isPrime=false;
            break;
        }
    }
}
const result=isPrime? "prime":"not prime"
console.log(n+result)

//
let lastD=num%10;
let firstD=Math.floor(n/100);
let secondD=Math.floor((n%100)/10)
console.log(firstD,secondD,lastD)