/** print all subarrays */
function printSubarrays(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        for (let j = i; j < n; j++) {
            /*Method 1 
             subarr.push(arr[j]);
             console.log(subarr.join(" "));*/

            /**method 2 */
            console.log(arr.slice(i, j + 1).join(" "));

        }
    }
}
printSubarrays([1, 4, 5, 7, 3, 2]);


//print the sum of all subarrays each subarray
/**1 4-> 5
1 4 5 ->10
1 4 5 7-> 17
1 4 5 7 3 ->20
1 4 5 7 3 2-> 22 */
function sumOfSubArrays(arr) {
    let taotalSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        let subSum = 0;
        for (let j = i; j < n; j++) {
            subarr.push(arr[j]);
            subSum += arr[j];
            taotalSum += subSum;
            console.log(subarr.join(" "), subSum);
        }
    }
    return taotalSum;
}
console.log(sumOfSubArrays([1, 4, 5, 7, 3, 2]));


/** write a function to print the subarrays whose sum is target sum (=T)
 * input : [1,4,5,7,3,2]=15
 * output: [5,7,3]
 */

function findTargetSumSubarays(arr, T) {
    /*print the subarray with sum =target sum */
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        let sum = 0;
        for (let j = i; j < n; j++) {
            subarr.push(arr[j]);
            sum += arr[j];
            if (sum == T) {
                return subarr;
            }
        }
    }



}
let arr = [1, 4, 5, 7, 3, 2];
console.log(findTargetSumSubarays(arr, 10));

/**************************Nested arrays*********************************/
/** */

for (let i = 1; i < 3; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        str += j + 5 * i + " ";
    }
    console.log(str);


}

arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log("printing 2D array");
for (let i = 0; i < arr.length; i++) {
    str = "";
    for (let j = 0; j < arr[i].length; j++) {
        str += arr[i][j] + " ";
    }
    console.log(str);
}


/** print sum of each row
 * input:arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

output :
15
40
65
 */
console.log("sum of each row");
for (let i = 0; i < arr.length; i++) {
    let sum = 0; //sum of row=arr[i]
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    console.log(sum);
}

/**sum of matrix */

console.log("sum of matrix");
for (let i = 0; i < arr.length; i++) {
    let sum = 0; //sum of row=arr[i]
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    console.log(sum);
}