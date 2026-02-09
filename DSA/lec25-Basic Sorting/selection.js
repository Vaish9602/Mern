/*********************************************Selection Sort********************************************************* */
 /**Selection sort is a sorting algorithm that repeatedly selects the smallest element from the unsorted portion and places it at the beginning.
  * How Selection Sort Works (Step-by-Step)

Let’s sort this array in ascending order:

[64, 25, 12, 22, 11]
🔹 Step 1

Find the smallest element → 11

Swap it with the first element
[11]-> sorted [25,12,22,64]->unsorted



🔹 Step 2

Remaining unsorted part: [25, 12, 22, 64]

Smallest element is 12

Swap with second position

[11,12]-> sorted part  [25,22 ,64] unsorted part

🔹 Step 3

Remaining unsorted part: [25, 22, 64]

Smallest element is 22

Swap

Result:
[11, 12, 22] -> sorted part   [25,64]-> unsorted part

🔹 Step 4

[11, 12, 22,25]-> sorted array   [64]->unsorted array

✅ Final Sorted Array:
[11, 12, 22, 25, 64]

🔁 Repeatedly selects minimum element

🔄 Only one swap per pass

⏱ Time Complexity: O(n²) (best, average, worst)

💾 Space Complexity: O(1) (in-place)
  */

//Basic Selection Sort (Ascending)
console.log("Basic Selection Sort (Ascending)")
function selectionSort(arr){
    let n= arr.length;
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
console.log(selectionSort([64, 25, 12, 22, 11]));


//Selection Sort (Descending Order)
console.log("Selection Sort (Descending Order)")
function selectionSortArr(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let maxIndex =i;
        for(let j=i+1;j<n;j++){
            if(arr[j]>arr[maxIndex]){
                maxIndex=j;

            }
            
        }
        [arr[i],arr[maxIndex]]=[arr[maxIndex],arr[i]]
    }
    return arr;
}
let arr=[64, 25, 12, 22, 11]
console.log(selectionSortArr(arr))
//Count Comparisons & Swaps 
console.log("Count Comparisons & Swaps ")
function countComparisonSwap(arr){
    let n=arr.length;
    let swaps =0;
    let comparison=0;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            comparison++;
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swaps++;
        }
    }

    return { sortedArray: arr, comparison, swaps };
}
console.log(countComparisonSwap(arr))

  
//Print Array After Each Pass
function selectionSortPasses(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        console.log("After pass"+(i+1)+":", arr);
    }
}

selectionSortPasses([29, 10, 14, 37, 13]);

//Find Kth Smallest Element
//k is 1-based

//index is 0-based
function kthSmallest(arr, k) {
    let n = arr.length;

    for (let i = 0; i < k; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr[k - 1];
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
