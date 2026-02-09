/******************************Quick Sort******************************************** */ 
/**choose the  pivot first
 * -it is first/last/random/mid element
 * then partition according pivot
 * less element left side
 * higher element right side
 * then get the final sorted array
 *  tc=O(nlogn)
 * worst=O(n^2);
 * sc=O(logn)
 * example
 * [12,4,36,7,8,34,23]
 * 
 * pivot =23
 * [12,4,7,8] [23] [36,34]
 * 34 pivot
 * [12,4,7,8,23] [34][36]
 * pivot 7
 * 4    12,8,23,34,36
 * pivot 8
 * 4,8,12,23,34,36 sorted array
 */
// implement quick sort
function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let p =partition(arr,low,high);
        quickSort(arr,low,p-1);
        quickSort(arr,p+1,high)

    }
    return arr;
}
function partition(arr,low,high){
    let pivot=arr[high]
    let i =low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]]=[arr[high], arr[i+1]]
    return i+1
}
console.log(quickSort([12,4,36,7,8,34,23]))


//quick sort
function sortQuick(arr,low=0,high=arr.length-1){
    if(low<high){
        let p=partition(arr,low,high)
        sortQuick(arr,low,p-1);
        sortQuick(arr,p+1,high)
    }
    return arr;
}
function partition(arr,low,high){
    let i=low-1;
    let pivot=arr[high]
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
        
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
    return i+1
}
console.log(sortQuick([2,8,9,45,6]))
