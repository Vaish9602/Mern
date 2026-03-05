//  1️⃣ Print 1 to N ⭐⭐⭐ (Very Basic & Common)
let n=10;
for(let i=1;i<=n;i++){
    console.log(i)
}

// Print numbers from 1 to N using loop.

// 2️⃣ Print N to 1 ⭐⭐

console.log("Reverse counting.") 

n=1;
for(let i=10;i>=n;i--){
    console.log(i)
}

// 3️⃣ Sum of First N Natural Numbers ⭐⭐⭐

// Input: 5
// Output: 15
let sum=0;
for(let i=0;i<=5;i++){
    sum+=i;
}
console.log(sum)

// 4️⃣ Factorial of a Number ⭐⭐⭐ (Very Important)

// Input: 5
// Output: 120
let fact =1;
n=5;
for(let i=1;i<=n;i++){
    fact*=i
}
console.log(fact)

// 5️⃣ Multiplication Table ⭐⭐⭐

// Print table of given number.
num=8;
for(let i=1;i<=10;i++){
    console.log("8 " ,"X",i,"=",num*i)
}

// Example: 5
// Output: 5 × 1 = 5 … 5 × 10 = 50

// 6️⃣ Reverse a Number ⭐⭐⭐

// Input: 1234
// Output: 4321
num=1234;
let reverse=0;
while(num>0){
    let digit = num%10;
     reverse=(reverse*10)+digit;
    num= Math.floor(num/10)

}
console.log(reverse)

// 7️⃣ Palindrome Number ⭐⭐⭐

// Check if number is palindrome using loop.
num=121;
let org=num;
let reve=0;
while(num>0){
    let digit= num%10;
    reve=(reve*10)+digit;
    num =Math.floor(num/10);
}

    if(org===reve){
        console.log("yes")

    }else{
        console.log("no")
    }



// 8️⃣ Count Digits in a Number ⭐⭐

// Input: 12345
// Output: 5
num= 1235;
let count=0;
while(num>0){
    let digit= num%10;
    count++;
    num= Math.floor(num/10)
}
console.log(count)

// 9️⃣ Sum of Digits ⭐⭐

// Input: 123
// Output: 6
sum=0;
num=1235;
while(num>0){
    let digit=num%10;
    sum+=digit;
    num= Math.floor(num/10)
}
console.log(sum)

// 🔟 Armstrong Number ⭐⭐⭐

// Input: 153
// Output: Armstrong
num=153;
org=num;
sum=0;
while(num>0){
    let digit= num%10;
    sum+=digit*digit*digit
    num = Math.floor(num/10)
}
console.log(sum==org? "amg":"not")


// 1️⃣1️⃣ Fibonacci Series ⭐⭐⭐

// Print first N Fibonacci numbers.
/*In Fibonacci series:

First number = 0

Second number = 1

Next number = sum of previous two numbers */
count=1;
a=0;
b=1;
num=10;


while(count<=num){
    console.log(a)
    let next=a+b;
    a=b
    b=next;
    count++;

}



// 1️⃣2️⃣ Prime Number Check ⭐⭐⭐ (Very Important)

// Check whether a number is prime.

function primeNum(num){
    if(num<=1) return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0) return false;
    }
    return true;
}
console.log(primeNum(7))
// 1️⃣3️⃣ Print All Prime Numbers till N ⭐⭐⭐
// 1️⃣4️⃣ Find Largnuest Digit in Number ⭐⭐
// 1️⃣5️⃣ Count Even and Odd Digits ⭐⭐