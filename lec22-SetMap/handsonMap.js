/*****************************Map******************************************/
//map  which consist key value pair;

//creating map
let map= new Map();

// adding element in map
map.set("name","vaishnavi")
map.set("age",21);
console.log(map);

//getting key and values
console.log("values",map.values());
console.log("keys",map.keys());

// getting data from map
console.log(map.get("name"));

//check ii it exist 
console.log(map.has("as"))
console.log(map.has("name"));

//size of map
console.log(map.size)

//remove element

console.log(map.delete("name"))//delete particular  element
console.log(map.clear())// clear all map

//loop through map
for(let [key,value] of map){
    console.log([key,value])
}

//looping only keys 
for(let keys of map.keys()){
    console.log(keys)
}

//looping only values
for(let values of map.values()){
    console.log(values)
}

////Count frequency of elements
console.log("Count frequency of elements");
let str = "apple banana apple orange banana apple";

function calFreqCount(str){
    let freq=new Map();
    for(let word of str.split(" ")){
        freq.set(word,(freq.get(word)||0)+1)
    }
    return freq;
}
console.log(calFreqCount(str));

//Find first non-repeating character
console.log("first non-repeating character");
function findFirstNonRepeatChar(str){
    let map=new Map();
    for(let char of str){
        map.set(char,(map.get(char)||0)+1);

    }
    for(let [key,value] of map){
        if(value===1){
            return key;
        }
    }

}
console.log(findFirstNonRepeatChar("aaaabbbbcds"))

////Find duplicate elements in an array
function findDuplicate(arr){
    let map=new Map();
    duplicate=[]
    for(let num of arr){
        map.set(num,(map.get(num)||0)+1);
    }
    for(let [key,value] of map){
        if(value>1){
            duplicate.push(key)
           
        }
    }
    return duplicate;
}
console.log(findDuplicate([1,2,3,4,1,1,2]));

//find word freq
console.log("word freq count")
function findwordFreq(str){
    let map=new Map()
    for(let word of str.split(" ")){
        map.set(word,(map.get(word)||0)+1)
    }
    return map;
}
console.log(findwordFreq("apple apple apple banana banana apple mango"));



