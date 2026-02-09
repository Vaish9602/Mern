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

Insert element at correct position
 */

//Implement Insertion Sort
console.log("implement insertion sort");
function insertionSort(arr){
    let n= arr.length;
    for(let i=1;i<n;i++){
        let key =arr[i]
        let j= i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;

}
console.log(insertionSort([5, 2, 4, 6, 1, 3]));
//Count Number of Shifts in Insertion Sort
console.log("count number of shifts in Insertion sort")
function countShifts(arr){
    let shift=0;
    for(let i=1;i<arr.length;i++){
        let key =arr[i];
        let j= i-1;
        while(j>=0 && arr[j]>key ){
            arr[j+1]=arr[j];
            j--;
            shift++;

        }
        arr[j+1]=key;

    }
    return shift;
}
console.log(countShifts([5,2,4,6,1,3]))
//Insertion Sort for Descending Order
console.log("Insertion sort for Descending Order")
function insertionDescendingOrder(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key =arr[i];
        let j=i-1;
        while(j>=0 && arr[j]<key){
            arr[j+1]=arr[j];
            j--;

        }
        arr[j+1]=key;
    }
    return arr;

}
console.log(insertionDescendingOrder([12,4,3,245,45]));