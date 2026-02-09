//print 1 to N
/**print1toN(1) → prints 1
print1toN(2) → prints 2
print1toN(3) → prints 3
...
print1toN(10) → prints 10
print1toN(11) → stops (base case)
 */
console.log("print 1 to 10");
function print1ToN(n){
    //best case
    if(n>10) return;
    console.log(n)//work
    //recursion case
    print1ToN(n+1);

}
print1ToN(1);


//print N to 1;
/**For printNto1(5):

Print 5

Call printNto1(4)

Print 4

Call printNto1(3)

Print 3

Call printNto1(2)

Print 2

Call printNto1(1)

Print 1

Call printNto1(0) → stop */
console.log("print N to 1");
function printNto1(n){
    //best case
    if(n===0) return ;
    console.log(n)
    printNto1(n-1);
}
printNto1(10);


// factorial number
// suppose 5
// 5*4*3*2*1
//factorial 0 =1
/**findFactorial(5)
= 5 * findFactorial(4)
        = 4 * findFactorial(3)
                = 3 * findFactorial(2)
                        = 2 * findFactorial(1)
                                = 1 * findFactorial(0)
                                        = 1 (base case)

                                        */
console.log("factorial number")
function findFactorial(n){
    if(n === 0) return 1;
    return n*findFactorial(n-1);
}
console.log(findFactorial(5));

// calculate the power
/**calculatePower(2,4)
→ 2 * calculatePower(2,3)
      → 2 * calculatePower(2,2)
              → 2 * calculatePower(2,1)
                      → 2 * calculatePower(2,0)
                              → 1 (base case)
 */

// n power 0 =1
console.log(" calculate the power");
function calculatePower(base,exponent){
    if(exponent===0) return 1;
    return base*calculatePower(base,exponent-1);
}
console.log(calculatePower(2,4));


// Print array elements using recursion
/**printArray(arr, 0)  → prints arr[0] = 10
printArray(arr, 1)  → prints arr[1] = 20
printArray(arr, 2)  → prints arr[2] = 30
printArray(arr, 3)  → prints arr[3] = 40
printArray(arr, 4)  → stops (base case: index reached array length)
 */
console.log("Print array elements using recursion")
function printArray(arr,i=0){
    if(i===arr.length) return;
    console.log(arr[i])
   printArray(arr,i+1);
}
printArray([10,20,30,40]);


////Print array in reverse order
/**reverseArray(arr, 3) → prints arr[3] = 40
reverseArray(arr, 2) → prints arr[2] = 30
reverseArray(arr, 1) → prints arr[1] = 20
reverseArray(arr, 0) → prints arr[0] = 10
reverseArray(arr, -1) → stops (base case)
 */
console.log("Print array in reverse order");
function reverseArray(arr,i=arr.length-1){
    if(i<0) return;
    console.log(arr[i]);
    reverseArray(arr,i-1);
}
reverseArray([10,20,30,40]);

//Reverse String Using Recursion
/**reverse("HELLO")
→ reverse("ELLO") + "H"
→ reverse("LLO") + "E" + "H"
→ reverse("LO") + "L" + "E" + "H"
→ reverse("O") + "L" + "L" + "E" + "H"
→ "O" + "L" + "L" + "E" + "H"

With space as separator:

split(" ") → split wherever there is a space

Result → ["HELLO", "WORLD"]

2️⃣ With empty string as separator:

split("") → split every character individually

Result → ["H","E","L","L","O"," ","W","O","R","L","D"]
 */
console.log("reverse string ")
function reverseString(str){
    if(str.length===0) return "";
    return reverseString(str.slice(1))+str[0]
}
console.log(reverseString("hello"));


///Return only odd numbers using recursion
/**getOdd(arr, 0, []) → 1 is odd → result = [1]
getOdd(arr, 1, [1]) → 2 is even → result = [1]
getOdd(arr, 2, [1]) → 3 is odd → result = [1, 3]
getOdd(arr, 3, [1, 3]) → 4 is even → result = [1, 3]
getOdd(arr, 4, [1, 3]) → 5 is odd → result = [1, 3, 5]
getOdd(arr, 5, [1, 3, 5]) → index = arr.length → base case → return result
 */

console.log("returns only odd number in array");
function getOdd(arr,i=0,result=[]){
    if(i===arr.length) return result;
    if(arr[i]%2!==0){
        result.push(arr[i])

}
return getOdd(arr,i+1,result)
}
console.log(getOdd([1,2,3,4,5]));

//fibonacci series

/**F(n) = F(n-1) + F(n-2)
F(0) = 0   
F(1) = 1   

Suppose you want F(5):

F(5) = F(4) + F(3)

To find F(4) → F(4) = F(3) + F(2)

To find F(3) → F(3) = F(2) + F(1)

Continue until base cases F(1) = 1 and F(0) = 0


F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
F(5) = F(4) + F(3) = 3 + 2 = 5
F(6) = F(5) + F(4) = 5 + 3 = 8

 */


console.log("fibonacii");
function fib(n){
    if(n===0) return 0;
    if(n===1) return 1;
    return fib(n-1)+fib(n-2);

}
console.log(fib(6));

