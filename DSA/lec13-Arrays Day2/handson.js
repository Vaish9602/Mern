/*=====================continuing arrays========================== */
let arr = [2, 10, 6, 4, 9];

//slice
let sliceArr = arr.slice(1, 4);
console.log({ sliceArr });

console.log({ arr })
console.log(arr.slice(1, 4));
console.log(arr.slice(0, 3));
console.log(arr.slice(1));
console.log(arr.slice());

// check what happens if values  passed in slice( ) are negative

console.log(arr.slice(-2, -4));

/*-negative values count from the end of the array.
-Step-by-step:
-arr.length = 5

-start = -2 → 5 - 2 = 3

-end = -4 → 5 - 4 = 1 
-But in slice(start, end):

If start >= end, result = empty array [].*/
console.log(arr.slice(-3, 4)); //[6,4]

console.log(arr.slice(-1)); //[9]

console.log(arr.slice(-3)); //[6,4,9]

console.log(arr.slice(-5)); //[2, 10, 6, 4, 9]

console.log(arr.slice(-6)); //[2, 10, 6, 4, 9]Negative indices larger in magnitude than the array length will start from 0.

console.log(arr.slice(-4, -1)); //[10, 6, 4]

console.log(arr.slice(-3, -2)); //[6]
console.log(arr.slice(-2, -4)); //[]


console.log(arr.slice(-4, -4)); //[]

console.log(arr.slice(-5, -2)); //[2, 10, 6]

console.log(arr.slice(-3, 5)); //[6, 4, 9]

console.log(arr.slice(-5, 2)); //[2, 10]

console.log(arr.slice(-1, -1)); //[]

console.log(arr.slice(-2, 4)); //[4]

console.log(arr.slice(-3, 3)); //[6]

console.log(arr.slice(-3, 10)); //[6, 4, 9]

//splice

console.log(arr.splice(1, 3));
console.log({ arr })

// concat 
let arr2 = [-3, -4, -10, -8];
console.log(arr.concat(arr2));

//concatenate multiple arrays
let arr1 = [1, 2];
let arr4 = [3, 4];
let arr3 = [5, 6];

let result = arr1.concat(arr4, arr3);
console.log(result);

//Types of Loops for arrays
//basic loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// for in loop
for (let index in arr) {
    console.log(arr[index]);
}

// for of loop
for (let value of arr) {
    console.log(arr)
}

/* write a function which prints the prefix sum of an array
input = 12,4,-8,10
output=12,16,8,18*/

const arr5 = [12, 4, -8, 10];

function prefixSum(arr5) {
    let sum = 0;
    let prefixArr = [];
    prefixArr[0] = arr5[0];
    for (let i = 1; i < arr5.length; i++) {
        prefixArr[i] = prefixArr[i - 1] + arr5[i];

    }
    return prefixArr;

}
console.log(prefixSum(arr5));


// swap values of two variable
let x = 10;
let y = 20;
console.log({ x, y });
let temp = x;
x = y;
y = temp;
console.log({ x, y });


/*swaping two values of an array
input arr =[1,2,3,4,5] , ind1 =1,ind2=4
output arr=[1,5,3,4,2]*/

function swapAlternateArray(arr, ind1, ind2) {
    let n = arr.length;
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
    console.log({ arr });
}
arr = [1, 2, 3, 4, 5];
swapAlternateArray(arr, 1, 4);


// Example 1
let arr11 = ["apple", 42, false, [10, "banana", [99, "mango"]]];
// 👉 Target: "mango"
console.log(arr11[3][2][1]);

// Example 2
let arr22 = [true, "hello", [5, 6, [7, "deep", [8, 9, "inside"]]]];
// 👉 Target: "inside"
console.log(arr22[2][2][2][2]);

// Example 3
let arr33 = [
    [1, 2],
    ["a", "b", ["c", ["d", "target"]]]
];
// 👉 Target: "target"
console.log(arr33[1][2][1][1]);
// Example 4
let arr44 = ["red", [1, 2, [3, 4, ["blue", "green"]]], "yellow"];
// 👉 Target: "green"
console.log(arr44[1][2][2][1]);

// Example 5
let arr55 = [100, ["x", ["y", ["z", ["final"]]]], false];
// 👉 Target: "final"
console.log(arr55[1][1][1][1][0]);

/** H.W  given an array of consecutive numbers but theres on number thats missing find it 
 * input : [1,2,3,5, 6,7,8]
 * output :4)
 */
function findMissingNum(arrr) {
    let n = arrr.length + 1;
    let expectedSum = (n * (n + 1) / 2);
    let actualSum = 0
    for (let i = 0; i < arrr.length; i++) {
        actualSum += arrr[i];


    }
    return expectedSum - actualSum;
}

let arrr = [1, 2, 3, 5, 6, 7, 8];
console.log(findMissingNum(arrr));


//finding subarray
function printSubarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subarray = [];
            for (let k = i; k <= j; k++) {
                subarray.push(arr[k]);
            }
            console.log(subarray);
        }
    }
}

arr = [1, 2, 3, 4, 5]
printSubarrays(arr);