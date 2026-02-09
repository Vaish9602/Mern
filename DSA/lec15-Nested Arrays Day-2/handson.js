//Write a function to find the sum of all subarrays whose length is K=3
console.log(" sum of all subarrays whose length is K=3");

function sumAllSubarraysOfSizeK(arr, k) {
    let n = arr.length;
    let sumOfSubOfSizeK = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        let subarr = [];
        for (let j = i; j < n; j++) {
            subarr.push(arr[j]);
            sum += arr[j];
            if (subarr.length === k) {
                sumOfSubOfSizeK += sum;
                break;
            }
        }
    }
    return sumOfSubOfSizeK;
}
let arr = [7, 4, 8, 6, 5];
console.log(sumAllSubarraysOfSizeK(arr, 3));

//Continuing nested arrays
const array1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
/*[
  [7, 4, 8, 6, 5],   // index 0
  1,                 // index 1
  "85",              // index 2
  "rty",             // index 3
  [2, [4, 5]],       // index 4
  32                 // index 5
]
 */
const array2 = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];

const array3 = [
    [1, 2],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];


//print the value of 4 from array1
if (Array.isArray(array1[4])) {
    if (Array.isArray(array1[4][1])) {
        console.log("printing 4", array1[4][1][0]);
    }

}

// only printing like this its fine
console.log(array1[4][1][0]);

//check if 2D nested array is a matrix or not
function isMatrix(arr) {
    if (!Array.isArray(arr)) return false;
    if (!Array.isArray(arr[0])) return false;
    let firstRowLength = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length != firstRowLength) return false;
    }
    return true;


}
console.log(isMatrix(array1));
console.log(isMatrix(array2));
console.log(isMatrix(array3));
console.log(isMatrix(arr));

//Function to Reverse an array 
function reverseRows(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let m = arr[i].length;
        for (let j = 0; j < Math.floor(m / 2); j++) {
            [arr[i][j], arr[i][m - j - 1]] = [arr[i][m - j - 1], arr[i]];

        }
    }
    console.log({ arr });
}
const array4 = [
    [1, 2],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];
reverseRows(array4);

// Reverse columns of a 2D matrix
function reverseColumns(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let j = 0; j < cols; j++) {
        for (let i = 0, k = rows - 1; i < k; i++, k--) {

            [matrix[i][j], matrix[k][j]] = [matrix[k][j], matrix[i][j]];
        }
    }

    console.log({ matrix });
}

const matrix = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];

reverseColumns(matrix);