// write a function to find the average of three numbers
function average(a = 0, b = 0, c = 0) {
    return a + b + c / 3;
}
console.log(average(2, 3, 4));


// write a function to find factorial of number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;

}
console.log(factorial(5));

// write a program to find nCr

function calculatenCr(n, r) {
    const ncr = factorial(n) / [(factorial(n - r)) * factorial(r)];
    return ncr;
}

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;

}
console.log(calculatenCr(13, 4));

// function that is going to be called for multiple users to check if they can vote based age

function canVote(userName, userAge) {
    if (userAge >= 18)
        console.log(userName + " is allowed to vote");
    else
        console.log(userName + " is not allowed to vote");


}
canVote("ramesh", 20);
canVote("vidya", 12);



/**=================================Arrays==================================== */

// arrays are non-premitive datatype

const name1 = "Name1"
const name2 = "Name2"
const name3 = "Name3"
const name4 = "Name4"
const name5 = "Name5"
const name6 = "Name6"
const name7 = "Name7"
const name8 = "Name8"
const name9 = "Name9"

const names = ["Name1",
    "Name2", "Name3", "Name4", "Name5", "Name6", "Name7", "Name8", "Name9"
];

let n = names.length;
console.log("length of array")


for (let i = 0; i <= n; i++) {
    console.log(names[i]);

}



/// 
const arr = [1, 2, 3, 4, 1, 5, 6, 7, 8, 10];
n = arr.length;
let sum = sumOfArray(arr);
console.log({ sum });

function sumOfArray(arr) {
    let n = arr.length,
        sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

// absolute function in js==>|3-7|=4
console.log(Math.abs(3 - 7));

//find the absolute difference of sum of all odd elements and sum of even elements


function evenOddDiff(arr) {
    let n = arr.length;
    let evenSum = 0,
        oddSum = 0;
    for (let i = 0; i <= n; i++) {
        if (arr[i] % 2 == 0) {
            evenSum += arr[i];

        } else {
            oddSum += arr[i];
        }
    }
    oddSum = sumOfArray(arr) - evenSum;
    return Math.abs(evenSum - oddSum)
}
console.log("absolute difference of even and odd elements", evenOddDiff(arr));

// fizzBuzz problem 
/* you are given an array write a function which print in below manner
-multipl 3  print fizz
multipl 5 print buzz
multipl 3&5  print fizzbuzz

 */
const Arr = [3, 6, 18, 15, 5, 10, 20, 9, 24];

function fizzBuzz(Arr) {
    let n = Arr.length;
    for (let i = 0; i <= n; i++) {
        if (Arr[i] % 3 == 0 && Arr[i] % 5 == 0) {
            console.log("FizzBuzz");
        } else if (Arr[i] % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log("Buzz")
        }
    }


}
fizzBuzz(Arr);


const arr2 = ["rajat", "dev", "ram", "sita"]
arr2[0] = "laxman";
console.log(arr2);

const arr3 = [1, 5, 6, 2, 10]
arr3[1] = 7;
console.log({ arr3 });

//insertion in arrays
//insert at end
arr3.push(15); // they returnn the new length of arr
// H.W how to insert multiple element using push
// insert at begining
arr3.unshift(-5);
// H.W how to insert multiple element using unshift()
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
arr1[0] = 10; // arr1 is const variable but still we are able to change the value of it as its a non-primitive data type
//arr1 =[23,34,56,59]this is wrong

////deletion in array
//deletion at end
arr.pop(); // find out what it returns
//deletion at begin
arr.shift(); //find out what it returns

// searching array
/*H>W write function to return the index of a target element
-function findIndex(arr,targetValue){
----
code
----
return indexOfTargetValue;
}
if targetValue doesnt exist  in array then return -1
consider uniques elements in array */

/*inbuilt method to find the first index */
console.log("index of 10 in array", arr.indexOf(10)); //return -1 if 10 does not exist
/*inbuilt method to find the first index */
console.log("last index of 1 in arr", arr.lastIndexOf(1));

/*inbuilt method to chek if an element is present or not */
console.log(arr.includes(6)); // returns true if 6 is present
console.log(arr.includes(17)); // returns true if 17 is present


// find and update the value of element =10 to 14 using indexOf() and includes()methods


const arr5 = [1, 2, 3, 4, 5, 10]

function find(arr5) {
    if (arr5.includes(10)) {
        console.log(arr5.indexOf(5));
    }
}
find(14);