//Print all elements
function printArray(arr){
    let n= arr.length;
    for(let i=0;i<=n;i++){
        console.log(arr[i])
       
    }
    
}
let arr =[12,3,4,5,6];
printArray(arr)

//Find maximum element
function maximumElement(arr){
    let max=arr[0]
    let n=arr.length;
    for(let i=0;i<=n;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;

}
console.log(maximumElement(arr))



//Find minimum element
function minimumElement(arr){
    let min=arr[0]
    let n=arr.length;
    for(let i=0;i<=n;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min
}
console.log(minimumElement(arr))