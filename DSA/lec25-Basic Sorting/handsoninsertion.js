/*************************************Insertion sort******************************************* */
/***Insertion Sort inserts each element at its proper place in the already sorted portion of the array.
 * example 
 * [8,5,3,2]
 * pass 1(i=1)
 * key =5;
 * j=0
 * arr[0]>key => 8>5  shift 
 * [5,8,3,2]
 * 
 * pass2 (i=2)
 * key=3
 * j=1
 * arr[1]>key => 8>3 shift 
 * [5,3,8,2]
 *  pass3 i=1
 * j=0
 * key =3
 * arr[0]>key = 5>3 shift 
 *  [3,5,8,2]
 *  pass 4 ( i=3)
 * key =2  
 * j=2
 * arr[2]>key  shift to right 8
 * [3,5,2,8];
 * key=2 
 * j=2
 * arr[2]>key shift [3,2,5,8]
 * key =2
 * j=0
 * arr[0]>key  shift 
 * [2,3,5,8 ]
 * 
 */
////Implement Insertion Sort
console.log("implement the insertion sort");
function insertionSort(arr){
    let n= arr.length;
    for(let i=0;i<n;i++){
        let key =arr[i];
        let j= i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]= arr[j]
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}
console.log(insertionSort([8,5,3,2]));
//Count Number of Shifts in Insertion Sort
console.log("count number of shifts in Insertion sort ");
function countShifts(arr){
    let n= arr.length;
     
    let shifts=0;
    for(let i=0;i<n;i++){
        let key = arr[i]
        let j= i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--;
            shifts++;

        }
        arr[j+1]=key;
       
    }
    return shifts;
    
}
console.log(countShifts([8,5,3,2]))
//Insertion Sort for Descending Order
console.log("Insertion Sort for Descending Order")
function insertionDescendingOrder(arr){
    let n= arr.length;
    for(let i=0;i<n;i++){
        let key=arr[i];
        let j= i-1;
        while(j>=0 && arr[j]<key){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=key
    }
    return arr;
}
console.log(insertionDescendingOrder([12,3,4,2,11]));