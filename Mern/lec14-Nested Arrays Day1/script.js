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

/**TC: O(N^2)
 * note : Optimized time complexity is O(N)
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
/** 
 * Rows
 * print three rows
 * first row ->[1,2,3,4,5]
 * second row -> [6,7,8,9,10]
 * third row ->[11,12,13,14,15]
 * 
 * full 2D Array
 * arr=[
 * [1,2,3,4,5]
 * [6,7,8,9,10],
 * [11,12,13,14,15]
 * ]
 */

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

/*print the[sum of( product of elements of each even indexed -row)]
input : arr =[
[1,2,3,4,5],// row 0 (even index)
[6,7,8,9,10],// row 1 (odd index)
[11,12,13,14,15],];// row 2 (even index)
output:
360480
(1*2*3*4*5 + 11* 12*13*14*15) */
sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) continue;
    let rowProduct = 1;
    for (let j = 0; j < arr[i].length; j++) {
        rowProduct *= arr[i][j];
    }
    sum += rowProduct;

}
console.log("Sum of product of even- indexed rows :", sum);

/**print the matrix col-wise
  input: arr=[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  ];

  output:
  1 6 11
  2 7 12
  3 8 13
  4 9 14
  5 10 15

 */

console.log("Printing column wise");
for (let i = 0; i < arr[0].length; i++) {
    let str = "";
    for (let j = 0; j < arr.length; j++) {
        str += arr[j][i] + " ";
    }
    console.log(str);
}
// H.W print the sum of elements in odd indexed columns
console.log("print odd index coumn");
for (let i = 0; i < arr[0].length; i++) {
    if (i % 2 == 0)
        continue;
    let oddIndColum = "";
    for (let j = 0; j < arr.length; j++) {
        oddIndColum += arr[j][i] + " ";
    }
    console.log(oddIndColum);
}


/** function to prin the elements of primary diagonal  */
function getPrimaryDiagonal(arr) {

    let n = arr.length;
    let primaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        primaryDiagonal.push(arr[i][i]);

    }
    return primaryDiagonal.join(" ");
}

function getsecondaryDiagonal(arr) {
    let n = arr.length;
    let secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        secondaryDiagonal.push(arr[i][n - i - 1]);


    }
    return secondaryDiagonal.join(" ");
}


arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(getPrimaryDiagonal(arr));
console.log(getsecondaryDiagonal(arr));

/**function to check if primary diagonal sum is odd or even */
function printPrimaryDiagonalSum(arr) {

    let n = arr.length;
    let sum = 0;
    // let primaryDiagonal = [];
    for (let i = 0; i < n; i++) {

        sum += arr[i][i];


    }
    return (sum % 2 == 0) ? "even" : "odd";
}
console.log(printPrimaryDiagonalSum(arr));