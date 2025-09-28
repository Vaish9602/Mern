//print all subarrays
function printSubarrays(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        for (let j = i; j < n; j++) {
            subarr.push(arr[j]);
            console.log(subarr.join(" "));
        }
    }
}
printSubarrays([1, 4, 5, 7, 3, 2]);


// print the sum of all subarrays each subarray
function sumOfSubArrays(arr) {
    let totalSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        let subSum = 0;
        for (let j = i; j < n; j++) {
            subarr.push(arr[j]);
            subSum += arr[j];
            totalSum += subSum;
            console.log(subarr.join(" "))
        }

    }
    return totalSum;
}
console.log(sumOfSubArrays([1, 4, 5, 7, 3, 2]));

//print the subarray with sum=target sum
function findTargetSumSubarays(arr, T) {
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


// Nested Arrays
//print three rows
/*for (let i = 1; i < 3; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        str += j + 5 * i + " ";
    }
}*/
arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log("print 2D array");
for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i].length; j++) {
        str += arr[i][j] + " ";

    }
    console.log(str);
}

//sum of each row

console.log("sum of each row");
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    console.log(sum);
}
// sum of matrix
console.log("sum of matrix");
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];

    }
    console.log(sum);
}
//print the[sum of( product of elements of each even indexed -row)
sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1)
        continue;
    let rowProduct = 1;

    for (let j = 0; j < arr[i].length; j++) {
        rowProduct *= arr[i][j];

    }
    sum += rowProduct;
}
console.log("Sum of Product of even indexed rows:", sum);

//print matrix colwise
console.log("print column wise");
for (let i = 0; i < arr[0].length; i++) {
    let str = "";
    for (let j = 0; j < arr.length; j++) {
        str += arr[j][i] + " ";
    }
    console.log(str);
}

//print the sum of elements in odd indexed columns
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

//function to prin the elements of primary diagonal
console.log("primary & secondary diagonal");

function getPrimaryDiagonal(arr1) {
    let n = arr1.length;
    let primaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        primaryDiagonal.push(arr1[i][i]);

    }
    return primaryDiagonal.join(" ");


}

function getSeondaryDiagonal(arr1) {
    let n = arr1.length;
    let secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        secondaryDiagonal.push(arr1[i][n - i - 1]);
    }
    return secondaryDiagonal.join(" ");
}
let arr1 = [
    [1, 2, 3],
    [6, 7, 8],
    [9, 11, 10]
];
console.log(getPrimaryDiagonal(arr1));
console.log(getSeondaryDiagonal(arr1));

//function to check if primary diagonal sum is odd or even
console.log("primary diagonal sum:")

function printPrimaryDiagonalSum(arr) {
    let sum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum += arr[i][i];

    }
    return sum % 2 == 0 ? "even" : "odd";
}
console.log(printPrimaryDiagonalSum(arr));