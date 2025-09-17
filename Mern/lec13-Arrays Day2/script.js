// diamond pattern
//**************************continuing arrays******************** */
let arr = [2, 10, 6, 4, 9];

//slice
let slicedArr = arr.slice(1, 4); // doesnt changes the original array
console.log({ slicedArr });

console.log({ arr });
console.log(arr.slice(1, 4)) // will give elements in range (1,4)
console.log(arr.slice(1)) // will give elements in range (1,N)
console.log(arr.slice()) // will give elements in range 

//H.W check what happens if values  passed in slice( ) are negative

//splice
console.log(arr.splice(1, 3)); //changes the original array
console.log({ arr })


//concat

let arr2 = [-3, -4, -10, -8];
console.log(arr.concat(arr2)); // H.W ->how to concatenate multiple arrays?

/************************Types of Loops for arrays********************* */
// the basic loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


//for ....in loop
for (let index in arr) {
    console.log(arr[index]);
    //console.log(typeof index) // types of index here is string

}


// for....of loop
for (let value of arr) {
    console.log(value);
}

/*
* write a function which prints the prefix sum of an array
input = 12,4,-8,10
output=12,16,8,18*/
const arr3 = [12, 4, -8, 10];

function prefixSum(arr3) {

    let sum = 0;
    let prefixArr = [];
    prefixArr[0] = arr3[0];
    for (let i = 1; i < arr3.length; i++) {
        prefixArr[i] = prefixArr[i - 1] + arr3[i];

    }
    return prefixArr;


}
console.log(prefixSum(arr3));


//swaping
//write function to swap values of two variables

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

function swapArrElements(arr, ind1, ind2) {
    let n = arr.length;
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
    console.log({ arr });
}
arr = [1, 2, 3, 4, 5];
swapArrElements(arr, 1, 4);

/**print element at odd indices of an array
 * input:arr=[1,2,3,4,5]->odd length array
 * output :2 4
 * input:arr=[1,2,3,4,5,6]->even  length array
 * output :2 4 6
 */


function printOddIndexElements(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
printOddIndexElements(arr);


//
function printEvenIndexElement(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }

    }
}
arr = [1, 2, 3, 4, 5, 6]
printEvenIndexElement(arr);



/** swap alternate elements of an array
 * input1:arr=[1,2,3,4,5]->odd length array
 * output :arr=[2,1,4,3,5]
 * input1:arr=[1,2,3,4,5,6]->even length array
 * output :arr=[2,1,4,3,6,5]
 */

function swapAlternateArray(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] % 2 == 0) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }
    console.log({ arr })
}
arr = [1, 2, 3, 4, 5];
swapAlternateArray(arr);


//
function swapAlternateArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }
    console.log({ arr })
}
arr = [1, 2, 3, 4, 5, 6];
swapAlternateArray(arr);



/// hetrogenous property of arraays in js
arr = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];

//How to print "printMe"from above array
console.log(arr[5][3][2]);