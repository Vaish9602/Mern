// 1 to N
for(let i=0;i<=10;i++){
    console.log(i)
}

//  n to 1

for(let i=10;i>=1;i--){
    console.log(i)
}


//sum of n

let sum =0;
for(let i=0;i<=10;i++){
    sum+=i;
}
console.log(sum)

// Factorial of a Number

let fact=1;
for(let i=1;i<=5;i++){
    fact*=i;
}
console.log(fact)

//Multiplication Table ⭐⭐⭐

let num=5;
for(let i=1;i<=10;i++){
    console.log("5 X ",i, "=", num*i)
}

//Reverse a Number 
let reverse=0;
num=123;
while(num>0){
    let digit= num%10;
    reverse=(reverse*10)+digit;
    num= Math.floor(num/10)
}
console.log(reverse)


//Palindrome Number
reverse=0;
num=121;
let org=num
while(num>0){
     let digit= num%10;
     reverse=(reverse*10)+digit;
     num=Math.floor(num/10)
}
if(org===reverse){
    console.log("palindrome")
}else{
    console.log("not")
}
//Count Digits in a Number
let count=0;
num=12345;
while(num>0){
    let digit= num%10;
    count++;
    num = Math.floor(num/10)
}
console.log(count)

// Sum of Digits
num=123;
sum=0;
while(num>0){
    let digit= num%10;
    sum+=digit;
    num=Math.floor(num/10)
}
console.log(sum)

//Armstrong Number
num =153;
org=num;
sum=0;
while(num>0){
    let digit= num%10;
    sum+=digit*digit*digit;
    num=Math.floor(num/10)
}
console.log(org===sum?"amg":"not")

//Fibonacci Series
count=1;
let a=0;
let b=1;
num=10
while(count<=num){
    console.log(a)
    let next =a+b;
    a=b;
    b=next
    count++
}
//Prime Number

function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0) return false;
    }
    return true
}
console.log(isPrime(7))