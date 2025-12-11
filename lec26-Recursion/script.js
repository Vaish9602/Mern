// print number 1 to N
function print1toN(n, i = 1) {
    if (i > n) return;      // base case
    console.log(i);         // work
    print1toN(n, i + 1);    // recursive call
}

print1toN(5);

//Print numbers from N to 1
function printNto1(n) {
    if (n == 0) return;    // base case
    console.log(n);        // work
    printNto1(n - 1);      // recursive call
}

printNto1(5);



//factorial number
function factorial(n) {
    if (n === 0) return 1;  // base case
    return n * factorial(n - 1);  // recursive case
}

console.log(factorial(5)); 



// calculate power
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
function printArray(arr, index = 0) {
    if (index === arr.length) return;   // base case

    console.log(arr[index]);            // print current element
    printArray(arr, index + 1);         // recursive call
}

printArray([10, 20, 30, 40, 50]);


//Print array in reverse order
function printArrayReverse(arr, index = 0) {
    if (index === arr.length) return;

    printArrayReverse(arr, index + 1);  // go to end first
    console.log(arr[index]);            // print while coming back
}

printArrayReverse([10, 20, 30, 40, 50]);

//Reverse String Using Recursion