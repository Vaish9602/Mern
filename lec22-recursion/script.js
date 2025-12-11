//******************************Recursion***************************** */
//print reverse 
console.log("print 10 to 1")

function printNto1(n) {
    //base cas
    if (n === 0) return;
    console.log(n);
    printNto1(n - 1); //call

}
printNto1(10)


// print 1 to N

console.log("print 1 to 10")

function print1toN(n) {
    //base case
    if (n > 10) return;
    console.log(n);

    print1toN(n + 1); //call
}
print1toN(1)


// print hello word 5 times

console.log("5 times hello word")

function printHello(n) {
    if (n === 0) return;
    console.log("hello world")
    printHello(n - 1)

}
printHello(5)

// print two Way pattern
console.log("twoWayPath")

function twowayPath(n, current = 1) {
    if (current > n) return;
    console.log(current);
    twowayPath(n, current + 1);
    console.log(current)
}
twowayPath(5);

//
console.log("twoWay reverse path")


function twoWayPath(n, current = 5) {
    if (current < n) return;
    console.log(current);
    twoWayPath(n, current - 1);
    console.log(current);
}
twoWayPath(1)


// sum of first N  natural no
console.log("Natural number sum")

function sumOfNaturalNum(n) {

    if (n === 0) return 0;
    return n + sumOfNaturalNum(n - 1);
}

console.log(sumOfNaturalNum(5))


// find power of a number  
console.log("power of number");

function powerOfNumber(n, pow) {
    if (pow === 0) return 1
    return n * powerOfNumber(n, pow - 1);

}
console.log(powerOfNumber(2, 3))


//reverse string
function reverseString(str) {
    if (str.length === 0) return "";
    return str.slice(-1) + reverseString(str.slice(0, -1))
}
console.log(reverseString("hello"));


//find factorial
function factorialNum(n) {
    if (n == 0 || n == 1) return 1
    return n * factorialNum(n - 1);



}
console.log(factorialNum(5))

// fibonacii series
function fibbinaciiSeries(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fibbinaciiSeries(n - 1) + fibbinaciiSeries(n - 2)
}
console.log(fibbinaciiSeries(5))