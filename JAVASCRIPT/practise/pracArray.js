//reverse array
let arr=[1,2,3,4];
let start=0;
let end= arr.length-1;
while(start<end){
    let temp=arr[start];
    arr[start]= arr[end];
    arr[end]=temp;
    start++;
    end--;

}
console.log("reverse Array",arr);





//using reverse method

arr=[1,2,3,4,5]
let reverseArray= arr.reverse();
console.log("reverse Array",reverseArray);

//find maximum
arr=[99,60,85,19,61];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }

}
console.log("maximum",max);


//find minimum
arr=[78,34,54,23,12,67,89,90];
let min= arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log("minimum",min);

//find second largest 

arr=[12,24,36,48,60,72];
let first= -Infinity;
let second= -Infinity;
for(let num of arr){
    if(num>first){
        second=first;
        first=num;
    }else if (second>num && num!== first){
        second=num;
    }
}
console.log("second Largest",second)






//remove duplicate

arr=[1,1,12,2,2,3,3,4,4];
let result=[];
for(let i =0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
       
    }

}
console.log(result)




// using another method
arr=[1,1,12,2,12,31,31]
let removeDuplicate= [...new Set(arr)]
console.log(removeDuplicate)


// count frequency 
arr=[1,1,1,2,2,3,4];
let freq={};
let count =0;
for(let num of arr){
    freq[num]=(freq[num]|| 0)+1;
    count++;

}
console.log(freq);
console.log(count);

// count words
 let str="hello hello word";
 freq={}
 count =0;

 let newStr= str.split(" ");
 for(let word of newStr){
    freq[word]=(freq[word]||0)+1;
    count++;

 }
 console.log("count words",freq);
 console.log(count)

 // count the characters
 str="vaishnavi"
 let strChr=str.split("");
 freq={}
 count =0;
 for(let char of strChr){
    freq[char]=(freq[char]||0)+1;
    count++

 }
 console.log("count the char",freq)
 console.log(count)








  