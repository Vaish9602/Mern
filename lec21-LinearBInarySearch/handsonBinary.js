/*******************************Binary Search***************************************** */
/**binary search checks the middle element first
 * then it decides 
 * if the target is smaller search left half
 * if the target is bigger search right half
 * if equal found
 * 
 * when array is sorted
 * when array is small
 *  
 * best case-O(1)
 * worst case O(log n)
 * space O(1)
 * 
 */


//Implement Binary Search
console.log("Implement Binary Search");
function binarySearch(arr,target){
    let left =0;
    let right=arr.length-1;
   while(left<right){
    let mid=Math.floor(left+(right-left)/2);
    if(arr[mid]=== target){
        return mid;
    }else if(arr[mid]<target){
        left=mid+1;
    }else{
        right=mid-1;
    }
   }
   return -1;
}
console.log(binarySearch([12,13,14,15,16,17],16));




//Find First Occurrence of an Element
console.log(" First Occurrence of an Element")
function findFirstOccurrence(arr,target){
    let left=0;
    let right=arr.length-1;
    let result=-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]===target){
            result=mid;
            right=mid-1;
        
        }
        else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1
        }
    
}
return result;
}
console.log(findFirstOccurrence([1,1,1,2,2,3,4],1));

//Find Last Occurrence of an Element
console.log("Last Occurrence of an Element");
function findLastOccurrence(arr,target){
    let left=0;
    let right=arr.length-1;
    let result=-1
    
    while(left<=right){
        let mid= Math.floor(left+(right-left)/2);
        if(arr[mid]===target){
            result=mid;
            left=mid+1;
        }else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }

    }
    return result;

}
console.log(findLastOccurrence([12,12,12,13,14,15],12));

//Count Occurrences of an Element
console.log("count occurrence of an element");
function findFirstOccurrence(arr,target){
    let left=0;
    let right=arr.length-1;
   let result=-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]===target){
            result=mid;
            right=mid-1;
        }else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }


    }
    return result;
}

function findLastOccurrence(arr,target){
    let left=0;
    let right=arr.length-1;
    let result=-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]===target){
            result=mid;
            left=mid+1;

        }else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return result;

}
function countOccurrences(arr,target){
    let first=findFirstOccurrence(arr,target);
    if(first===-1) return 0;
    let last =findLastOccurrence(arr,target);
    return last-first+1;

    
}
console.log(countOccurrences([12, 12, 12, 13, 14, 15], 12));


//Check if a Number is a Perfect Square
console.log("check number perfect square");
function isPerfectSquare(term){
    let left =0;
    let right=term;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        let midSquare=mid*mid;
        if(midSquare===term){
            return mid;
        }else if(midSquare<term){
            left=mid+1;

        }else{
            right=mid-1
        }

    }
    return -1;
}
console.log(isPerfectSquare(81));
console.log(isPerfectSquare(31));



//lower bound
/**Lower Bound Questions

Array: [1, 3, 5, 7, 9, 11]
Target x: 6
👉 Lower Bound = 3

Array: [2, 4, 6, 8, 10, 12, 14]
Target x: 11
👉 Lower Bound = 6

Array: [0, 5, 10, 15, 20]
Target x: 15
👉 Lower Bound = 3

Array: [1, 2, 2, 2, 3, 4, 5]
Target x: 2
👉 Lower Bound = 1

Array: [10, 20, 30, 40, 50, 60]
Target x: 25
👉 Lower Bound = 2 */


/**Upperbound-index of the first element that is strictly greater than ( > ) x.

If no such element exists → return array.length.
 Example 1

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
(no element > 20)

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
(no element > x)

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
Example 1

array:
[1, 3, 5, 7, 9]
x = 5

👉 Lower Bound = 2
👉 Upper Bound = 3
👉 Frequency of x = 1

Example 2

Array:
[2, 4, 6, 8, 10, 12]
x = 6

👉 Lower Bound = 2
👉 Upper Bound = 3
👉 Frequency of x = 1

Example 3

Array:
[1, 2, 2, 2, 5, 7]
x = 2

👉 Lower Bound = 1
👉 Upper Bound = 4
👉 Frequency of x = 3

Example 4

Array:
[3, 4, 4, 4, 8, 10]
x = 4

👉 Lower Bound = 1
👉 Upper Bound = 4
👉 Frequency of x = 3

Example 5

Array:
[5, 10, 15, 20]
x = 20

👉 Lower Bound = 3
👉 Upper Bound = 4
👉 Frequency of x = 1

Example 6

Array:
[-5, -3, 0, 2, 4, 6]
x = -3

👉 Lower Bound = 1
👉 Upper Bound = 2
👉 Frequency of x = 1

Example 7

Array:
[1, 4, 4, 4, 4, 6, 8]
x = 4

👉 Lower Bound = 1
👉 Upper Bound = 5
👉 Frequency of x = 4

Example 8

Array:
[10, 20, 30, 40, 50]
x = 55

👉 Lower Bound = 5
👉 Upper Bound = 5
👉 Frequency of x = 0
 */


/// find th first occurrence a duplicate element in  array
console.log("first occurrence a duplicate element in  array");
function lowerBound(arr,x){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
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
////find the last occurrence element in an array

console.log("last occurrence element in an array")
function UpperBound(arr,x){
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
console.log(UpperBound([1,2,3,4,5],10));
////find how many times does an item appear in array
//or how occurrences of an element  are there in an array

console.log("count occurrence using binary search ");
function  findFirstOccurrence(arr,x){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]<x){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return left;
}
function findLastOccurrence(arr,x){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid= Math.floor(left+(right-left)/2);
        if(arr[mid]<=x){
            left=mid+1;
        }else{
            right=mid-1;
        }
   
}
 return left;
}
function countOccurrences(arr,x){
    return findLastOccurrence(arr,x)-findFirstOccurrence(arr,x)
}
let arr = [1, 2, 2, 2, 3, 4, 5];

console.log(countOccurrences(arr, 2));   
console.log(countOccurrences(arr, 1));   
console.log(countOccurrences(arr, 5));   
console.log(countOccurrences(arr, 10)); 

///find how many duplicate elements are there in an array
function totalDuplicateCount(arr){
    let freq={}
    let count=0;
for(let num of arr){
    freq[num]=((freq[num]||0)+1);
}
for(let key in freq){
    if(freq[key]>1){
        count+=freq[key]-1;
    }
}
return count;
}
console.log(totalDuplicateCount([1,2,2,3,3,3])); 
