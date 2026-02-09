/***************************************sorting *************************************** */
/****************************************Bubble Sort******************************************* */
/**compare adjacent element repeatedly 
 * tc=O(n)
 * sc=O(1)
 * example
 * [5,8,2,3,9]
 * pass 1
 * compare
 * 5& 8 ->no swap
 * 8&2 [5,2,8,3,9]
 * 8 & 3 [5,2,3,8,9]
 * last element correct position
 * pass2
 * 5&2 [2,5,3,8,9]
 * 5&3 [2,3,5,8,9]
 * sorted array
 * worst tc= O(n^2)
 * 
 * */

//implement bubble sort
function bubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            }
        }
    
    }
    return arr
}
let arr=[5,8,2,3,9]
console.log(bubbleSort(arr))

// descending order
function descendBubble(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j+1]>arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            }
        }
    }
    return arr;

}
console.log(descendBubble(arr))

//count
function countBUbble(arr){
    let n=arr.length;
    let count=0;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
                count++
            }
    
        }
    }
    return count
}
console.log(countBUbble(arr))


/***selection sort**************************************
 * repeatdly selecting smallest element in array swap with first element
 * tc=O(n^2)
 * sc=O(1)
 * Example
 * [11,44,5,6,7]
 * pick the smallest element in array swap with first element
 * [5]->sorted  [44,11,6,7] unsorted
 * [5,6]->sorted   [11,44,7]unsorted
 * 
 * [5,6,7]->sorted  [44,11]
 * [5,6,7,11]>sorted  [44]
 * sorted=[5,6,7,11,44]
 */

//implement selection sort
function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr;
}
console.log(selectionSort(arr))

// descending order
function selectionDesc(arr){
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
console.log(selectionDesc(arr))

//find smallest element
function findSmallest(arr){
    let min=arr[0];
    let n=arr.length;
    for(let i=1;i<n;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min
}
console.log(findSmallest(arr))

// insertion sort

/***********************************Insertion Sort*********************************************** */

/**Insertion Sort inserts each element at its proper place in the already sorted portion of the array.
 * Example
 * [8, 3, 5, 2]
 * pass i=1
 * key =3
 * j=0
 * arr[0]>key  
 * [3,8,5,2]
 * 
 * pass i=2
 * key =5
 * j=1
 * 8>5 
 * [3,5,8,2]
 * 
 * pass i=3
 * key =2
 * 8>2
 * [3,5,2,8]
 * key =2
 * i=2
 * 5>2
 * [3,2,5,8]
 * 
 * Time Complexity
Case	Complexity
Best	O(N)
Average	O(N²)

Worst	O(N²)
Space Complexity
O(1)
 * 
Take element from index 1

Compare with left side

Shift bigger elements right

Insert element at correct position*/
function insertionSort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0&& arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}
console.log(insertionSort(arr))

//desending
function insertionDescendingOrder(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0 && arr[j]<key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key

    }
    return arr;
        
    }
    console.log(insertionDescendingOrder(arr))

    //merge sort
    //divide and conquer
    //mid
    //merge sorting array
    //O(nlogn)
   function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
   }
   function merge(left,right){
    let result=[]
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(arr[i]<=arr[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }

    }
    return result.concat(left.slice(i)).concat(right.slice(j))
   }
   console.log(mergeSort(arr))


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
