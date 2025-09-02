// ==============loops=====================
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
// O(10)
/* issuse in reaping code
-to much work for developers
-enable to count repetations
-too much work to update "hi" to "hii"
-*to solve this problem we are using loop*/

// while loop
//print count from 1 to 10
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}
//O(10)

// even no till 25
let num = 1;
while (num < 25) {
    if (num % 2 == 0)
        console.log(num);
    num++;

}
//O(25/2)



/// count down print 10 to 1
let num1 = 10;
while (num1 >= 1) {
    console.log(num1);
    num1--;
}
//O(10)

//================for loop====================
/*-initialize the value of variable
-check if the condition is true-> if false for lopp stops immediately
-executes the lines of the code inside this for loop
-increment the value
again goes tp 2-> then 3then 4 */
// print hi 10 times
for (let i = 0; i <= 10; i++) {
    console.log("hi");
}
//O(1)

//print counnting from 1to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//O(10)
//multiple of 3 upto 50
;
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0)
        console.log(i); // no curly braces {}require to execute single statement


}
//time complexity=O(50)

// print the square of each no from 20 to 35
let n = 35;
for (let i = 20; i <= n; i++) {
    console.log(i ** 2);
}
//time complexity = O(n)
let n1 = 15;
let start = 20;
for (let i = start; i <= start + n1; i++) {
    console.log(i * i);
}
//time complexity = O(n1)->[(start+n)-start]
//print table of 5
let num2 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num2, "*", i, "= ", num2 * i);
}
//time complexity O(10)


//finds sum of first 100 number and print it
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;

}
console.log("sum of first 100 number", sum);
//time complexity O(100)

// conditins related extra things
//read about short circuiting
const n2 = false && 5;
const n3 = n2 === false;
const n4 = n3 && 67;
console.log({ n2, n3, n4 });