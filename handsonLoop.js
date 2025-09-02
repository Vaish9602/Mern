/********************* loops*********************** */
//while loop

//Q1Print numbers from 1 to 10 using a while loop.
let n = 1;
console.log("numbers from 1 to 10 ")
while (n <= 10) {
    console.log(n);
    n++;
}

//Q2 Print the multiplication table of a number using while.
let num = 4;
let i = 1;
console.log("multiplication table of 4")
while (i <= 10) {
    console.log(num, "*", i, "=", num * i);
    i++;
}

// Q3 print count down from 10 to 1

console.log("count down from 10 to 1");
let n1 = 10;
while (n1 >= 1) {
    console.log(n1);
    n1--;
}

// Q4 print even no till 50
console.log("even no til 50");
let n2 = 0;
while (n2 <= 50) {
    if (n2 % 2 == 0)
        console.log(n2);
    n2++;
}

// Q5 print multiple of 6 upto 40
console.log("multiple of 6 upto 40");
let n3 = 1;
while (n3 < 40) {
    if (n3 % 6 == 0)
        console.log(n3);
    n3++;

}


// for loop
//Q1Print numbers from 1 to 10 using a for loop.
console.log("numbers from 1 to 10 ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Q2Print the multiplication table of a 8
console.log("multiplication table of a 8");
let num4 = 8;
for (let i = 1; i <= 10; i++) {
    console.log(num4, "*", i, "=", num4 * i);

}



//Q3Print the first 10 even numbers.
console.log("first 10 even numbers");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(i);
}


//Q4Print the sum of all odd numbers between 1 and 50.
console.log("sum of all odd numbers between 1 and 50.");
let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0)
        sum = sum + i;

}
console.log(sum);

//Q5Count how many numbers between 1 and 100 are divisible by 7.
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0)
        count++;


}
console.log("numbers between 1 and 100 are divisible by 7.", count);




//Q6Print the sum of first N natural numbers
let sum1 = 0;

for (let i = 1; i <= 20; i++) {
    sum1 += i;

}
console.log("sum of first N natural numbers", sum1);


//Q7Print a reverse counting from 20 to 1.
console.log("reverse counting from 20 to 1");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

//short circuiting
//Q1
const a = true || 100; // true
const b = false || 100; // 100
const c = a && b; // true && 100 → 100

console.log({ a, b, c });


//Q2
const x = 0 || "Hello"; //  "Hello"
const y = "" && "World"; // ""
const z = y || x; // "" || "Hello" → "Hello"

console.log({ x, y, z });