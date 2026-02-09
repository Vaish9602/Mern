/*** sorting  */
/**
 * Sorting is arranging elements in a desired order to improve
 *  efficiency of operations like searching and merging.
 */

/****************************Bubble Sort****************************** */

/**Bubble Sort sorts an array by repeatedly swapping adjacent elements if they are in incorrect order.
 * After each pass of Bubble Sort, the largest unsorted element reaches its correct position.
 * how its work
 * example
 * [5, 1, 4, 2, 8]
 *  pass1
 * compares the adjacent element
 * 5 & 1 -> swap  [1,5,4,2,8]
 * 5 & 4 -> swap [1,4,5,2,8]
 * 5 & 2 -> swap [1,4,2,5,8]
 * last element is correct position
 * 
 * pass 2
 *  last element is sort 
 * 1 & 4 -> no swap
 * 4 & 2 -> swap [1,2,4,5,8]
 * 
 * pass 3
 * 1 & 2 -> no swap
 * 2&4 -> no swap
 * 
 * now array is sorted
 * 
 * final sorted array
 * [1,2,4,5,8]
 *   
 * 
 * time complexity :
 * best case: O(n)
 * worst case: O(n^2)
 * stable in place
 * 
 */

//Implement Bubble Sort
  console.log("Implement Bubble Sort");
   function bubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        //After each pass, one largest element reaches the end
        // total passes =n-1
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }

    }
    return arr;
   }
   console.log(bubbleSort([5, 1, 4, 2, 8]));


   //Bubble Sort – Count Number of Swaps
   console.log("Bubble Sort Count Number of Swaps");

   function countNOSwap(arr){
    let count =0;
    let n= arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                count++;

                
            }
        }
    }
    return count;
   }
    console.log(countNOSwap([5, 1, 4, 2, 8]));

    //Check if Array is Already Sorted

    console.log("Check if Array is Already Sorted");

    function sortedArray(arr){
        let n= arr.length;
        for(let i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
               return false;
            }
        }
        return true;

    }

    console.log(sortedArray([1,2,3,4,5]));
    console.log(sortedArray([2,1,0]));

   //Optimized Bubble Sort
   console.log("optimized bubble sort");
   function optimizedBubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        let swap= false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            swap=true;
        }
    }
        if(!swap) break;

    }
    return arr;

   }
   console.log(optimizedBubbleSort([102,3,4,5]));


   //Sort in Descending Order
   console.log("sort in descending order");
   function descendingOrder(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
   }
   console.log(descendingOrder([1,2,3,4,5]));


