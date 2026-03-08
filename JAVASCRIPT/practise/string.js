//Reverse a String
let str="hello";
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}
console.log(rev)
//reverse string another way
rev=str.split('').reverse().join('');
console.log(rev)

//Check Palindrome String
str="natan";
rev=str.split('').reverse().join('');
if(str===rev){
    console.log("palindrome");

}else{
    console.log("not palindrome")
}

//Count Vowels in String
let count=0;
str="icecream"
for(let char of str){
    if("aieou".includes(char)){
        count++

    }
}
console.log(count)


//Count Characters Frequency
let freq={};
str="asdfghgg";
 for(let char of str){
    freq[char]=(freq[char]||0)+1;
 }
console.log(freq)
//Remove Spaces from String
str="hello  hel llo"
let removeSpaces= str.replaceAll(" ","");
console.log(removeSpaces)


//Find Longest Word in String
str="i am learning javascript"
let longest="";
let words=str.split(' ');
for(let word of words){
    if(words.length>longest.length){
        longest=word
    }
}
console.log(longest)


//Remove Duplicate Characters
str="qqqqqqqqqqqqqarrrrrrr"
let result=''
for(let char of str){
    if(!result.includes(char)){
        result+=char
    }
}
console.log(result)
//Count Words in a String
str="vaishnavi Hanumant Bagal";
words= str.split(' ')
freq={};
count=0;
for(let word of words){
    freq[word]=(freq[word]||0)+1;
    count++
}
console.log(count)
//Find Duplicate Characters
str="vaishnavi";
freq={};


for(let char of str){
    freq[char]=(freq[char]||0)+1;
    
}
for(let key in freq){
    if(freq[key]>1){
        console.log(key)
    }
}
//Convert First Letter to Capital
str="vaishnavi";
result= str.charAt(0).toUpperCase()+str.slice(1)
console.log(result)
//Check String Contains Substring
str= "rutuja"
result= str.includes("rutu")
console.log(result)
//Find First Occurrence of Character
result= str.indexOf("u")
console.log(result);
//Find Last Occurrence
result= str.lastIndexOf("u");
console.log(result)
//Convert String to Array
result=str.split(',');
console.log(result)

//Convert Array to String
str=["a","b"];
result=str.join(',');
console.log(result)



//Check Ends With
str="  javascript  "
console.log(str.endsWith("script"))
//Remove Extra Spaces
console.log(str.trim())
//Replace Word in String
str= "i love java"
console.log(str.replace("java","javascript"))
//Repeat String
str="apple"
console.log(str.repeat(4))
//Extract Part of String
str="vashnvi";
console.log(str.slice(1,4));
//1Convert String Case
console.log(str.toLowerCase())
console.log(str.toUpperCase())
//Find ASCII Value
console.log("A".charCodeAt(0));

//Convert ASCII to Character
console.log(str.fromCharCode(65));