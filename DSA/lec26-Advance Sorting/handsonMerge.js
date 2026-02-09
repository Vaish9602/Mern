//merge sort 
// divide and conquer method 
//tc=O(nlogn)
//sc=O(n)
//s=e=1


//merge sort
 function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2);
    let left= arr.slice(0,mid);
    let right=arr.slice(mid)

 
 return merge(mergeSort(left),mergeSort(right));
 }
 function merge(left,right){
    let result=[];
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));

 }
 console.log(mergeSort([12,31,35,8,17,32]))


 // merge sort
 function sortMerge(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(sortMerge(left),sortMerge(right))
 }
 function sort(left,right){
    let result=[]
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            result.push(left[i]);
            i++;

        }else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))

 }
 console.log(sortMerge([34,67,4,5,2,1]))