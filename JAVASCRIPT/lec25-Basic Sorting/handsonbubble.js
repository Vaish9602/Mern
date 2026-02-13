// bubble sort- repeatedly swapping adjacent elements
 //Implement Bubble Sort
 console.log("implement Bubble sort")
 function bubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;

 }
 console.log(bubbleSort([1,2,3,2,1]));
 //Bubble Sort – Count Number of Swaps
 console.log("count number of swaps")
function CountNoSwaps(arr){
    let n= arr.length;
    let count =0;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                count++
            }
        }
    }
    return count;

}
console.log(CountNoSwaps([5,2,3,6,4]));
console.log(CountNoSwaps([1,2,3,4,5,6]))


  //Check if Array is Already Sorted
  console.log("Check if Array is Already Sorted");
  function isArraySorted(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
      if(arr[i]>arr[i+1]){
        return false;
      }
    }
    return true;
  }
  console.log(isArraySorted([1,2,3,4,5]));
   //Optimized Bubble Sort
   console.log("Optimized Bubble Sort")
   function optimizedBubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let swap=false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swap=true;
            }
        }
        if(!swap ) break;
    }
    return arr;
   }
   console.log(optimizedBubbleSort([2,30,4,5,6]))

     //Sort in Descending Order
     console.log("Descending order");
     function descendingOrder(arr){
        let n=arr.length;
        for(let i=0; i<n-1;i++){
            for(let j=0;j<n-i-1;j++){
                if(arr[j]<arr[j+1]){
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                }
            }
        }
        return arr


     }
     console.log(descendingOrder([4,2,1,5,6]));