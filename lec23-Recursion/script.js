/**============================Recursion=============================== 
 * A function calling itself until a base case is reached.
*/
// print number 1 to N
function print1toN(n, i = 1) {
    if (i > n) return;      // base case
    console.log(i);         // work
    print1toN(n, i + 1);    // recursive call
}

print1toN(5);
console.log("print number 1 to N")

//Print numbers from N to 1
console.log("Print numbers from N to 1")
function printNto1(n) {
    if (n == 0) return;    // base case
    console.log(n);        // work
    printNto1(n - 1);      // recursive call
}

printNto1(5);



//factorial number
console.log("factorial number")
function factorial(n) {
    if (n === 0) return 1;  // base case
    return n * factorial(n - 1);  // recursive case
}

console.log(factorial(5)); 



// calculate power
console.log("calculate power")
function calculatePower(base,exponent){
    //base condition
    if(exponent===0){
        return 1;
    }
    //recursive case
    return base*calculatePower(base,exponent-1);
}
console.log(calculatePower(2, 5));


// Print array elements using recursion
console.log("Print array elements using recursion")
function printArray(arr, index = 0) {
    if (index === arr.length) return;   // base case

    console.log(arr[index]);            // print current element
    printArray(arr, index + 1);         // recursive call
}

printArray([10, 20, 30, 40, 50]);


//Print array in reverse order
console.log("Print array in reverse order")
function printArrayReverse(arr, index = 0) {
    if (index === arr.length) return;

    printArrayReverse(arr, index + 1);  // go to end first
    console.log(arr[index]);            // print while coming back
}

printArrayReverse([10, 20, 30, 40, 50]);

//Reverse String Using Recursion
console.log("Reverse String Using Recursion")
function reverseString(str) {
    if (str.length === 0) return "";        // base case
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));   // "olleh"


//Return only odd numbers using recursion
function getOdd(arr, index = 0, result = []) {
    // BASE CASE
    if (index === arr.length) return result;

    // RECURSIVE CASE
    if (arr[index] % 2 !== 0) {
        result.push(arr[index]);
    }

    return getOdd(arr, index + 1, result);
}

// Example
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(getOdd(arr));  // [1, 3, 5, 7]




function fib(n) {
    // BASE CASES
    if (n === 0) return 0;
    if (n === 1) return 1;

    // RECURSIVE CASE
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));
