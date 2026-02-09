/*********************************Selection Sort ********************************************** */
/** selection sort is selecting smallest element in unsorted array and place at the beginning of array
 * 
 * how to work selection sort
 *  [23,12,3,4,5]
 * select the smallest element
 * [3]-> sorted  [12,23,4,5]->unsorted
 * find unsorted array smallest element
 *   [3,4]->sorted [23,12,5]->unsorted
 * [3,4,5]->sorted [12,23]->unsorted
 * [3,4,5,12]-> sorted [23]->unsorted
 * final sorted array [3,4,5,12,23]
 * 
 * time complexity -O(n^2)
 * space complexity-O(1) in place
 * 
 */
//Basic Selection Sort (Ascending)
console.log("basic selection sort ascending");
function  selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr
}
let arr=[23,3,4,12,6]
console.log(selectionSort(arr))
//Selection Sort (Descending Order)
 console.log("descending order selection sort");
 function descendingOrder(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let maxIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]>arr[maxIndex]){
                maxIndex=j;

            }
        }
        [arr[i],arr[maxIndex]]=[arr[maxIndex],arr[i]]
    }
    return arr;

 }
 console.log(descendingOrder(arr))
//Count Comparisons & Swaps 
console.log("count comparison & swap");
function countComparisonSwap(arr){
    let n=arr.length;
    let comparison=0;
    let swap=0;
    for(let i=0;i<n-1;i++){ 
        let minIndex=i;
        for(j=i+1;j<n;j++){
            comparison++;
            if(arr[j]<arr[j+1]){
                minIndex=j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swap++;
        }
    }

    return { sortedArray: arr, comparison, swap };
}
console.log(countComparisonSwap(arr))

 
//Print Array After Each Pass
console.log("Print Array After Each Pass");
function selectionSortPass(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=0;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        console.log("after pass"+(i+1)+":",arr);
    }
}
selectionSortPass([23,4,12,5,6]);
//Find Kth Smallest Element