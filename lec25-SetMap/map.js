//Map
/**it is an object which consists of key value pair */

let map=new Map()
map.set("a",1)
map.set("b",2)
console.log(map);
console.log("values",map.values());
console.log("key",map.keys());

for(let [key,value] of map){
    console.log([key,value] )
}



console.log(map.has("a"));
//console.log(map.delete("a"))
//console.log(map.clear());
console.log(map.get("a"))

for(let keys of map.keys()){
    console.log(keys)
}
for(let values of map.keys()){
    console.log(values)
}

/**for(let [key,value] of map.entries){
    console.log(key,value);

}s */


map.forEach((value,key)=>{
    console.log("using foreach",key,value)
})
console.log("values using foreach")

map.values().forEach(val=>console.log(val))
map.keys().forEach(val=>console.log(val))

// convert map to array
Array.from(map)


// another way to initialize
let dict=new Map([[["a"],["apple","apricot"]],
    [
        "b",["banana"]
    ],
    ["g",["grapes","guava"]]
])

console.log(dict)
dict.set("d",["dragon fruit"])
console.log(dict)

// find frequency of each word



// find frequency of each word

let sentence = "how many repeating words are there in this sentence which has repeating words";

function findFreq(sentence) {
    let words = sentence.split(" ");  
    let freq = {};                    

    for (let word of words) {
        if (freq[word]) {
            freq[word]++;            
        } else {
            freq[word] = 1;           
        }
    }

    return freq;
}

console.log(findFreq(sentence));

