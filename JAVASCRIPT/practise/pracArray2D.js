//Print 2D Array
let arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];
let n= arr.length;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        console.log(arr[i][j])
    }
}


//Print Matrix Format
n= arr.length;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n;j++){
        row+=arr[i][j]+" ";
    }
    console.log(row)
}



//Sum of All Elements
n= arr.length;
let sum=0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        sum+=arr[i][j]
    }
}
console.log(sum)


//Sum of Each Row
n= arr.length;
for(let i=0;i<n;i++){
    let rowSum=0;
    for(j=0;j<n;j++){
        rowSum+=arr[i][j]
        
    }
    console.log(rowSum)
}


//sum of each column
n= arr.length;
for(let i=0;i<n;i++){
    let colSum=0;
    for(let j=0;j<n;j++){
        colSum+=arr[j][i]
    }
    console.log(colSum)
}


//Primary Diagonal
n= arr.length;
for(let i=0;i<n;i++){
    console.log(arr[i][i]);
}


// secondary diagonal
n= arr.length;
for(let i=0;i<n;i++){
    console.log(arr[i][n-1-i]);
}



//reverse row
for(let i=0;i<n;i++){
    console.log(arr[i].reverse())
}



//Transpose Matrix
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n;j++){
        row+=arr[j][i]+" "
    }
    console.log(row)
}



////Largest Element in Matrix
let max=arr[0][0];
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(arr[i][j]>max){
            max=arr[i][j]
        }
    }
}
console.log(max)


////reverse array
arr=[1,2,3,4];
let start=0;
let end=arr.length-1;
while(start<end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp
    start++;
    end--;

   
}
console.log(arr)

//using reverse method
console.log(arr.reverse());

//find maximum
arr=[73,85,74,74,94]
max=arr[0];
for(let i=0;i<arr.length;i++){
     if(arr[i]>max){
        max=arr[i]
   
     }
 }

console.log(max)

//find minimum
let min=arr[0];
for(let i=0;i<n;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min)
//find second largest
let first =-Infinity;
let second=-Infinity;
for(let num of arr){
    if(num>first){
        second=first;
        first=num
    }else if(num>second && num!==first){
        second=num
    }
}
console.log(second)

  

//remove duplicate
let result=[];
for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
}
console.log(result)

// using another method
let removeDuplicate=[...new Set(arr)]
console.log(removeDuplicate)

// count frequency 
let freq={}
for(let num of arr){
    freq[num]=(freq[num]||0)+1


}
console.log(freq)


// count words
let str="hello hello world";
let newStr=str.split(" ")
freq={}
for(let word of newStr){
    freq[word]=(freq[word]||0)+1
}
console.log(freq)

//count char
newStr=str.split("");
freq={}
for(let char of newStr){
    freq[char]=(freq[char]||0)+1
}
console.log(freq)
