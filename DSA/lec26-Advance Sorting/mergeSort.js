//****************************Merge Sort************************************* */
//merge sort is divide and conquer method
/**merge sort divide into two halves
 * then sort each halves
 * merge the sorted halves
 *  time complexity : O(nlogn)
 * space complexity:O(n)
 * 
 * example
 * [12,31,35,8,32,17]                   
 * find mid= start+(end-start)\2
 * divide into two halves
 * [12,31,35]-> left part              [8,32,17]-> right part
 * 
 * mid 0+2\2=1                          [8,32]   [17] 
 * [12,31]  [35]                          s=3e=4       s=e=5
 * s=0 e=1    s=e=2
 * [12] [31]                             [8]  [32]  
 * s=e=0  s=e=1                          s=e=3   s=e=4
 * at last the last  goes on single index 
 * 
 * backtracking
 * [12,31,35] left        [8,17,32] right
 * 12<8 j++ j=17  [8]
 * 17<12  i++ i=31 [8,12]
 * 31<17  j++ j=32 [8,12,17]
 * 32<31  i++ i=35  [8,12,17,31]
 * 35<32 j++ index ended jth [8,12,17,31,32,35]
 * 
 * 
 */

//implement merge sort

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2)
    let left= arr.slice(0,mid);
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let result=[]
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(right[j])
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}
let arr=[38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr))