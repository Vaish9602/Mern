function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let p=partition(arr,low,high);
        quickSort(arr,low,p-1);
        quickSort(arr,p+1,high)
    }
    return arr
}

function partition(arr,low,high){
    let pivot=arr[high]
    let i=low-1
    for(j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
    return i+1;
}
console.log(quickSort([12,6,7,4,23]))