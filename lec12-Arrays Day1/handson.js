// average of three number
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(average(2, 3, 4));

//find factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;

}
console.log(factorial(5));

// find nCr
function calculatenCr(n, r) {
    const nCr = factorial(n) / [(factorial(n - r)) * factorial(r)];
    return nCr
}

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;

}
console.log(calculatenCr(5, 3));

// check vote
function canVote(userName, userAge) {
    if (userAge >= 18) {
        console.log(userName + " can vote ");

    } else {
        console.log(userName + " can not vote");

    }

}
canVote("ram", 12);
canVote("jay", 22);

//
const names = ["Name1",
    "Name2", "Name3", "Name4", "Name5", "Name6", "Name7", "Name8", "Name9"
]

let n = names.length;
console.log("length of array");
for (let i = 0; i <= n; i++) {
    console.log(names[i]);
}


// sum of array 
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
n = arr.length;
let sum = sumOfArray(arr);
console.log({ sum });

function sumOfArray(arr) {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }
    return sum;
}
// absolute difference of sum of all even and odd elements
function evenOddDiff(arr) {
    let n = arr.length;
    let evenSum = 0;
    let oddSum = 0;
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

// fizzbuzz
const arr1 = [3, , 6, 12, 15, 5, 10, 20, 25];

function fizzBuzz(arr1) {
    let n = arr1.length;
    for (let i = 0; i <= n; i++) {
        if (arr1[i] % 3 == 0 && arr1[i] % 5 == 0) {
            console.log("fizzBuzz")


        } else if (arr1[i] % 3 == 0) {
            console.log("fizz");
        } else {
            console.log("Buzz");
        }
    }
}
fizzBuzz(arr1);


//
const arr2 = ["rajat", "dev", "ram", "sita"]
arr2[0] = "laxman";
console.log(arr2);

const arr3 = [1, 2, 3, 5, 6]
arr3[1] = 7;
console.log({ arr3 });


// insertion i array
// insert at end
arr3.push(15);
//  insert multiple element using push()
arr3.push(12, 23, 45);

// insert at begining
arr3.unshift(-5);
//insert multiple element using unshift()
arr3.unshift(-1, -2, -3);
console.log(arr3);

//deletion at end 
arr3.pop();
//deletion at begin
arr3.shift();
console.log(arr3);

//write function to return the index of a target element
//searching array
let arr4 = [10, 20, 30, 40, 50]

function findIndex(arr4, targetValue) {
    let n = arr4.length;
    for (let i = 0; i <= n; i++) {
        if (arr4[i] == targetValue) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(arr4, 30));
console.log(findIndex(arr4, 50));
console.log(findIndex(arr4, 99));


//inbuilt thod to find the first index */
console.log("index of 10 in array", arr.indexOf(10));
/*inbuilt method to find the first index */
console.log("last index of 1 in arr", arr.lastIndexOf(1));

/*inbuilt method to chek if an element is present or not */
console.log(arr.includes(6));
console.log(arr.includes(17));



//// find and update the value of element =10 to 14 using indexOf() and includes()methods



function updateValue(oldValue, newValue) {

    if (arr4.includes(oldValue)) {

        let index = arr4.indexOf(oldValue);
        arr4[index] = newValue;
    }
    return arr4;
}

console.log(updateValue(10, 14));
console.log(updateValue(50, 100));

//prime num
for (let num = 2; num <= 8; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
//sum digit cube
let sum1 = 0;

while (n > 0) {
    let digit = n % 10; // extract last digit
    sum1 += digit * digit * digit; // cube it and add to sum
    n = Math.floor(n / 10); // remove last digit
}

console.log("Sum of cubes of digits =", sum1);