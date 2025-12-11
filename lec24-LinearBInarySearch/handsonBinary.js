/*=================================Binary Search================================== */

console.log("binary search");
function binarySearch(arr,target){
    let left=0;
    let right= arr.length-1;
    while(left<right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]===target){
            return mid;
        }
       else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1
        }
    }
    return -1;
}
arr=[12,13,14,15,16,17,19];
console.log(binarySearch(arr,17));

//finding square root
console.log("square root");

function findSquareRoot(term){
    let left=0;
    let right=term;
    while(left<right){
        let mid=Math.floor(left+(right-left)/2);
        let midSquare=mid*mid;
        if(midSquare===term){
            return mid;
        }else if(midSquare>term){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return -1

}
console.log(findSquareRoot(81));
console.log(findSquareRoot(31));

/**
 * LowerBound:
 * index of the first element in the array that is greater than or equal to (≥)=x

If no such element exists → return array length.

✔ First index where element is ≥ x
✔ If element appears multiple times → gives first occurrence
✔ If element does not exist → gives insertion position
✔ Works only on sorted arrays
Example 1

Array:
[2, 4, 6, 8, 10, 12, 14]
x = 11

👉 Lower Bound = 5

Example 2

Array:
[1, 2, 2, 2, 5, 7, 9]
x = 2

👉 Lower Bound = 1

Example 3

Array:
[3, 5, 9, 15, 20]
x = 1

👉 Lower Bound = 0

Example 4

Array:
[0, 0, 0, 1, 2, 4, 8]
x = 3

👉 Lower Bound = 5

Example 5

Array:
[5, 10, 15, 20, 25]
x = 25

👉 Lower Bound = 4

Example 6

Array:
[-5, -3, 0, 2, 4, 6]
x = -4

👉 Lower Bound = 1

Example 7

Array:
[11, 22, 33, 44, 55]
x = 60

👉 Lower Bound = 5  array length 
(No element ≥ x → ?)

Example 8

Array:
[1, 4, 4, 4, 4, 6, 8]
x = 4

👉 Lower Bound = 1

Example 9

Array:
[10, 20, 30, 40, 50, 60]
x = 35

👉 Lower Bound = 3

Example 10

Array:
[2, 3, 3, 5, 7, 7, 7, 9]
x = 7

👉 Lower Bound = 4
*/

/**
 * UpperBound:Upper Bound = index of the first element that is strictly greater than ( > ) x.

If no such element exists → return array.length.
 * Example 1

Array:
[1, 3, 5, 7, 9]
x = 5

👉 Upper Bound = 3
(first element > 5)

Example 2

Array:
[2, 4, 6, 8, 10, 12]
x = 6

👉 Upper Bound = 3
(first element > 6)

Example 3

Array:
[1, 2, 2, 2, 5, 7]
x = 2

👉 Upper Bound = 4
(first element > 2)

Example 4

Array:
[3, 4, 4, 4, 8, 10]
x = 4

👉 Upper Bound = 4
(first element > 4)

Example 5

Array:
[5, 10, 15, 20]
x = 20

👉 Upper Bound = 4
(no element > 20 → ?)

Example 6

Array:
[-5, -3, 0, 2, 4, 6]
x = -3

👉 Upper Bound = 2
(first element > -3)

Example 7

Array:
[1, 4, 4, 4, 4, 6, 8]
x = 4

👉 Upper Bound = 5
(first element > 4)

Example 8

Array:
[10, 20, 30, 40, 50]
x = 55

👉 Upper Bound = 5
(no element > x → ?)

Example 9

Array:
[2, 3, 3, 5, 7, 7, 7, 9]
x = 7

👉 Upper Bound = 7
(first element > 7)

Example 10

Array:
[0, 1, 2, 3, 4, 5]
x = -1

👉 Upper Bound = 0
(first element > -1)


# 🔥 **Combined Lower + Upper Bound Practice Set (NO Answers)**

---

## **Example 1**

Array:
`[1, 2, 4, 4, 4, 5, 8]`
x = **4**

👉 Lower Bound =2?
👉 Upper Bound =5?
👉 Frequency = upper - lower =3?

---

## **Example 2**

Array:
`[2, 3, 5, 5, 5, 6, 9]`
x = **5**

👉 Lower Bound = 2
👉 Upper Bound = 5
👉 Frequency = 3

---

## **Example 3**

Array:
`[1, 1, 2, 3, 3, 3, 7, 7]`
x = **3**

👉 Lower Bound = 3
👉 Upper Bound = 6
👉 Frequency = 3

---

## **Example 4**

Array:
`[10, 15, 15, 15, 20, 25]`
x = **15**

👉 Lower Bound = 1
👉 Upper Bound = 4
👉 Frequency = 3

---

## **Example 5**

Array:
`[1, 3, 5, 7, 9]`
x = **4**

👉 Lower Bound = 2
👉 Upper Bound = 2
👉 Frequency = 0

---

## **Example 6**

Array:
`[5, 8, 8, 8, 10, 15]`
x = **8**

👉 Lower Bound = 1
👉 Upper Bound = 4
👉 Frequency = 3

---

## **Example 7**

Array:
`[2, 4, 6, 8, 10]`
x = **12**

👉 Lower Bound = 5
👉 Upper Bound = 5
👉 Frequency = 0

---

## **Example 8**

Array:
`[0, 0, 1, 1, 1, 2, 3]`
x = **1**

👉 Lower Bound = 2
👉 Upper Bound = 5
👉 Frequency = 3

---

## **Example 9**

Array:
`[-5, -3, -3, 0, 2, 2, 2, 4]`
x = **-3**

👉 Lower Bound = 1
👉 Upper Bound = 3
👉 Frequency = 2

---

## **Example 10**

Array:
`[1, 2, 3, 4, 5]`
x = **10**

👉 Lower Bound = 5
👉 Upper Bound = 5
👉 Frequency = 0


*/
// find th first occurrence a duplicate element in  array


console.log("LowerBound");
function lowerBound(arr,x){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let mid=Math.floor(left+(right-left));
        if(arr[mid]<x){
            left=mid+1;

        }else{
            right=mid-1;
        }
    }
    return left;
}
console.log(lowerBound([1,2,4,4,4,7,9],4));
console.log(lowerBound([1,2,4,4,4,7,9],3));

//find the last occurrence element in an array
console.log("upperBound");
function upperBound(arr ,x){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]<=x){
            left=mid+1;
            
        }else{
            right=mid-1;
            
        }
    }
    return left;
}
console.log(upperBound([1,2,3,4,5],10));






//find how many times does an item appear in array
//or how occurences of an element  are there in an array


console.log("Count Occurrences using Binary Search");

function lowerBound(arr, x) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

function upperBound(arr, x) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

function countOccurrences(arr, x) {
    return upperBound(arr, x) - lowerBound(arr, x);
}


let arr = [1, 2, 2, 2, 3, 4, 5];

console.log(countOccurrences(arr, 2));   
console.log(countOccurrences(arr, 1));   
console.log(countOccurrences(arr, 5));   
console.log(countOccurrences(arr, 10)); 


///find how many duplicate elements are there in an array
function totalDuplicateCount(arr) {
    let freq = {};
    let count = 0;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] > 1) {
            count += freq[key] - 1;
        }
    }

    return count;
}

console.log(totalDuplicateCount([1,2,2,3,3,3])); 

//how many times does x appear in the given array
function countOccurrences(arr, x) {
    let count = 0;

    for (let num of arr) {
        if (num === x) {
            count++;
        }
    }

    return count;
}


console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); 



