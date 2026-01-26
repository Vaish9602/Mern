//Map
/**it is an object which consists of key value pair */

//Creating a Map
let map=new Map();
map.set("a",1);
map.set("b",2);
console.log(map);
//set() adds key–value pairs
//✔ Map maintains insertion order

//Getting values & keys
console.log("values",map.values());
console.log("key",map.keys());

//Getting data from Map
console.log(map.get("a"));

//Checking if a key exists
console.log(map.has("a"));
console.log(map.has("city"));

//Size of Map
console.log(map.size);

//Removing data
//console.log(map.delete("a"));//removes a
//console.log(map.clear());//removes everything

//Looping through Map using for…of
for(let[key,value]of map){
    console.log([key,value]);

}

//Looping only keys
for(let keys of map.keys()){
    console.log(keys);
}

//Looping values
for(let values of map.values()){
    console.log(values);
}


//map.entries()
for(let[key,value] of map.entries()){
    console.log(key,value)
}

//Initializing Map with values
let dict = new Map([
  ["a", ["apple", "apricot"]],
  ["b", ["banana"]],
  ["g", ["grapes", "guava"]]
]);
//Adding new key to dictionary
dict.set("d", ["dragon fruit"]);
console.log(dict);

//convert Map to Array
console.log(Array.from(map))

//Count frequency of elements
console.log("Count frequency of elements");
let str = "apple banana apple orange banana apple";

function calFreqCount(str){
    let map=new Map();
    
    for(let word of str.split(" ")){
        map.set(word,(map.get(word)||0)+1);
    }
    return map;
}
console.log(calFreqCount(str));

//Find first non-repeating character
/**a → 2
b → 2
c → 1
d → 1
e → 1

first nonRepeating :c
 */

function firstNonRepeatChar(str){
    let map=new Map();
    for(let char of str){
        map.set(char,(map.get(char)||0)+1);

    }
    for(let [key,value] of map){
        if(value==1){
            return key

        }
    }

}
console.log(firstNonRepeatChar("aaaabbbbbc"));

//Find duplicate elements in an array
/**
 * 1 → 2
2 → 2
3 → 1
4 → 1
Duplicates:

1, 2
 */

function findDuplicate(arr){
    let map=new Map();
    let duplicate=[]
    for(let num of arr){
        map.set(num, (map.get(num)||0)+1);
    }
    for(let [key,value] of map){
        if(value>1){
            duplicate.push(key);
            
        }
    }
    return duplicate;
}
console.log(findDuplicate([1,2,3,2,1]));

//Word frequency in a sentence
function wordFrequency(sentence) {
    let map = new Map();
    let words = sentence.split(" ");

    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    return map;
}
console.log(wordFrequency("apple apple banana banana apple mango"))



