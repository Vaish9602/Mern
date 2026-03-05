//Reverse an Array(Without reverse())
let arr1= [1,2,3,4,5];
let start=0;
let end = arr1.length-1;
while(start<end){
    let temp=arr1[start]
    arr1[start]=arr1[end];
    arr1[end]=temp;
    start++;
    end--;
}
console.log("reversed:",arr1);



// reverse array
let arr=[11,3,4,33]
start=0;
end= arr.length-1;
while(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp;
    start++;
    end--;

}
console.log("reverse",arr)


//Find Maximum Element
arr=[1,2,3,4,44];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];

    }
}
console.log("maximum",max);

// reverse array
arr=[73,85,74,74,94];
start=0;
end=arr.length-1;
while(start<end){
    let temp = arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log("reverse", arr)

// maximum 
arr=[99,23,80,76,89]
max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max= arr[i];

    }
}
console.log("maximum",max);


//let first = -Infinity;
arr=[99,60,85,19,61];
let first=-Infinity;
let second=-Infinity;
for(let num of arr){
    if(num>first){
         second= first ;
         first = num;

    }else if(num>second && num!==first){
        second=num;
    
}
   
}
console.log("Second Largest",second)


// second largest 
first = -Infinity;
second=-Infinity;
for(let num of arr){
    if(num>first){
        second= first;
        first = num;

    }else if(num>second && num!==first){
        second=num
    }
}
console.log(second)


//remove duplicate 

arr=[1,2,2,3,4,4,5];
let unique=[...new Set(arr)]
console.log(unique)


//remove duplicate 
let result=[];
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
    }
}
console.log(result);


arr= [1,2,3,2,3,1,4,4]
result=[];
for(let i=0; i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
    }


}
console.log(result);

// reverse 
arr=[87,67,9,5,6];
arr.reverse();
console.log(arr);

//count frequency
arr=[1,2,2,3,3,3];
let freq={};
for(let num of arr){
  freq[num]=(freq[num]||0)+1
}
console.log("frequency count",freq)

let str="hello hello world"
let newStr= str.split(" ")
freq={}
for(let word of newStr){
    freq[word]=(freq[word]||0)+1
}
console.log(freq)