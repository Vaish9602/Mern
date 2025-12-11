/**==============================Linear Search============================================= */
/* Linear search checks each element one by one in a list/array until it finds the target value or reaches the end.


When to use it

When the array is small

When the array is unsorted

When simplicity is more important than speed

Time Complexity

Best case: O(1) → element at first position

Worst case: O(n) → element at last or not present

Space: O(1)*/
console.log(" Implementation of linear search");

function linearSearch(arr,target){
    for(let index=0;index<arr.length;index++){
        if(target===arr[index]){
            return index;
        }
    }
    return -1;
}
console.log(linearSearch([23,4,12,13,3,45,10],10));


// find all occurances of element in an array
console.log("find all occurances of element in an array");

let input=[1,2,2,5,7,8,2,10]
function findOccurance(arr,target){
    let result=[];
    for(let index=0;index<arr.length;index++){
        if(target===arr[index]){
            result.push(index);

}
    }
    return result;
}
console.log(findOccurance(input,2));


// min number in the array
console.log("finding min");

function minNumberArray(arr){
    let min=arr[0];
    for(let index=0;index<arr.length;index++){
        if(arr[index]<min){
            min=arr[index];
        }
    }
    return min;

}
 console.log(minNumberArray([12,23,45,67,11,28]));

 // finding whether a word exist in a sentence
 console.log("finding whether a word exist in a sentence");
 let sentence="i love coding in js";
 function findWord(sentence,searchTerm){
    let words=sentence.split(" ");
    console.log(words);
    for(let word of words){
        if(word===searchTerm){
            return true;
        }

    }
    return false;

 }
 console.log(findWord(sentence,"coding"));

 /**============================================Binary Search============================================================= */
 /*Binary Search checks the middle element first and then reduces the search space
to half (left or right) based on comparison.
It works ONLY on sorted arrays.
 
instead of checking every element one-by-one (like Linear Search),
Binary Search checks the middle element first.

Then it decides:

If the target is smaller, search left half

If the target is bigger, search right half

If equal → found ✔️

This cutting-in-half process repeats until the element is found.
When to use it

✓ When the array is sorted
✓ When the array is large
✓ When speed/efficiency is important
Time Complexity

Best case: O(1)        → middle element is the target
Worst case: O(log n)   → search space keeps halving
Average: O(log n)
Space: O(1)
*/
 console.log("binary Search");

 function binarySearch(arr ,target){
    let low=0;
    let high=arr.length-1;
     
    while(low<high){
        
        let mid=Math.floor((high+low)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]<target){
             low=mid+1;
            

        }
        else{
            high=mid-1;
           

        }
    }
     return -1;
        
    }
    console.log(binarySearch([12,23,25,27,34,38,40],38));


    //finding square root
    console.log("finding square root")
    function findSquareRoot(term){
        let left=0;
        let right=term;
        while(left<right){
            let mid=Math.floor((right+left)/2);
            let midSquare=mid*mid;
            if(midSquare==term){
                return mid;
            }else if(midSquare>term){
                right=mid-1;

            }else{
                left=mid+1;
            }
        }
        return -1;
    }
    console.log(findSquareRoot(81));
    console.log(findSquareRoot(31));


   
    /**lower bound=index of the first element which is>=x
     *  if x doesn't exist in that case  lower bound=length of array
     * x=4
     * x represent the no whose lower bound is to found
     * [1,2,4,4,4,7,9]
     * lowerBound=2
     * 
     * x=7 
     * 
     */
/**upperBound:first element which is greater than x */

// find th first occurance of a duplicate element in  array

//find the last occurance of  a element in an array

//find how many times does an item appear in array
//or how occurences of an element  are there in an array

console.log("Lower Bound");


function lowerBound(arr,x){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]<x){
            left=mid+1;
        }else{
            right=mid;
        }

    }
    return left;

}
console.log(lowerBound([1,2,4,4,4,7,9],4));
console.log(lowerBound([1,2,4,4,4,7,9],3));

//calculate upperbound
///find how many duplicate elements are there in an array
//how many times does x appear in the given array




    
    
 

 