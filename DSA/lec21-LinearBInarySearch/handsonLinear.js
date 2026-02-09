/************************Linear Search********************************** */
/**
 * when use 
 * array is small,unsorted
 * 
 * time complexity
 * best case:O(1)
 * worst case:O(n)
 * space complexity : O(1)
 * 
 */

//implementation of linear search
console.log("linear Search")
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([12,2,1,3,43,12],12));
//// find the all occurrence of element in an array
// occurence means where exist which index
console.log("find occurence")
function findOccurance(arr,target){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(target===arr[i]){
            result.push(i)
            
        }
       
    }
    return result;
}
console.log(findOccurance([1,2,2,10,9,8,2,7],2));

// find the the minimum number in the array
console.log("minimum number")
function findMinNum(arr){
    let min= arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
       min=arr[i];
        }
    }
    return min;
}
console.log(findMinNum([23,12,4,5,7,8]));

// find the maximum number in the array
console.log("maximum number");
function findMaximum(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMaximum([12,3,4,67,23]));
// finding whether a word exist in a sentence
console.log("finding whether a word exist in a sentence")

function isWordExist(sentence,searchTerm){
    let words= sentence.split(" ");
    for(let word of words){
        if(word===searchTerm)
            return true;

    }
    return false;
}
let sentence="practice makes man perfect";
console.log(isWordExist(sentence,"perfect"));


//Search an element in an array using Linear Search.
console.log("Search an element in an array using Linear Search.")
function searchLinear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
            return i;

        }
    }
    return -1
}
console.log(searchLinear([12,3,4,5,4,2,1],4));



//Find the first occurrence of a given element.
console.log("first occurrence of a given element.");
function findFirstOccurrence(arr,target){
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log(findFirstOccurrence([2,2,2,1,3,4,5,3,3,3],3))

//Find the last occurrence of a given element.
console.log("last occurrence of a given element.")
function findLastOccurrence(arr,target){
    let index=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            index=i;
        }

    }
    return index;
}
console.log(findLastOccurrence([2,2,2,1,3,4,5,3,3,3],3))


//Count the number of times a given element appears in an array.
console.log("Count the number of times a given element appears in an array")
function countAppearNum(arr,target){
    let freq={}
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            freq[target]=((freq[target]||0)+1)

        }
    }
    return freq;
}
console.log(countAppearNum([2,2,2,1,3,4,5,3,3,3],3))


//Find the maximum element in an array using Linear Search.
function findMaximum(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
            
        }

    }
    return max;
}
console.log(findMaximum([12,4,567,56,45]));

//Find the minimum element in an array using Linear Search.
console.log("minimum element in an array using Linear Search")
function findMinimum(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}
console.log(findMinimum([12,4,567,56,45]));
//Check whether an array contains duplicate elements.
console.log("an array contains duplicate elements.");
function isContainDuplicate(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count++;
            if(count>1){
                return true;
            }
            
    }
   
}
 return false;
}
console.log(isContainDuplicate([2,2,3,2,1,4],1));

//Find the first repeating element in an array.
console.log("first repeating element in an array.");
function findFirstRepeating(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return i;
            }
        }
        
    }
    return -1
}
console.log(findFirstRepeating([2,1,1,1,2,3,3]));



//Find the first non-repeating element in an array.
console.log("first non-repeating element in an array")
function findFirstNonRepeating(arr){
     
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
            count++;
        }
    }
    if(count===1){
        return arr[i]
    }
}
   return -1

}
console.log(findFirstNonRepeating([1,1,2,34,5]));