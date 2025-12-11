/*=================================Linear Search================================== */

//implementation of linear search

console.log("Implementation of linear search");
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1
}
let arr=[12,23,45,11,10,34,35];
console.log(linearSearch(arr,10));
console.log(linearSearch(arr,36));
/**
 * time complexity: O(n)
 * space complexity:O(1)
 * 
 */


// find the all occurrence of element in an array
console.log("all occurrence of element in an array");

function findOccurrence(arr,target){
    result=[];
    for(let i=0;i<arr.length;i++){
        if(target===arr[i]){
            result.push(i);

        } 
     }
     return result;
}
arr=[1,2,2,10,9,8,2,7];
console.log(findOccurrence(arr,2))


// find the the minimum number in the array

console.log("minimum number in the array");
function findMin(arr){
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
          min=arr[i];


    }
}
return min;

}
arr=[12,3,42,23,11,10,67,45];
console.log(findMin(arr));

// find the maximum number in the array
console.log(" maximum number in the array");
function findMaximum(arr){
    let max=arr[0];
    for(let i =0; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
arr=[12,34,56,78,90];
console.log(findMaximum(arr));

// finding whether a word exist in a sentence
console.log(" whether a word exist in a sentence");
let sentence="I love coding in js";
function findWord(sentence ,searchTerm){
    let words=sentence.split(" ");
    for(let word of words){
        if(word===searchTerm){
            return true;

        }


       
    }
    return false;
}
console.log(findWord(sentence,"coding"));
