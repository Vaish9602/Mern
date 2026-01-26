//Create a Set with numbers 1 to 5 and print all elements.
let set=new Set([1,2,3,4,5]);
console.log(set);

//Add elements to a Set and check if a particular value exists.
console.log(set.has(2));

//Remove an element from a Set and print the updated Set.
set.delete(3);
console.log(set);

//Find the size of a Set.
console.log(set.size);

//Convert a Set into an array.
console.log([...set])

console.log(Array.from(set))

//Create a Set from a string and count unique characters.
let str=new Set("Vaishnavi");
console.log(str.size);

//Remove duplicate elements from an array using Set.
let arr=[1,2,2,3,3,2,4,5];
let newSet=[...new Set(arr)]
console.log(newSet);

//Check whether two Sets contain the same elements (Set equality).
function isSetEquality(setA,setB){
    if(setA.size!== setB.size){
        return false;

    }
    for(let value of setA){
        if(!setB.has(value)){
            return false;
        }
    }
    return true;
}
let A=new Set([1,2,3]);
let B=new Set([2,4,5]);
let c=new Set([3,2,1]);
console.log(isSetEquality(A,B));
console.log(isSetEquality(A,c));


//Find the union of two Sets.
function union(setA,setB){
    let unionSet=new Set();
    for(let item of setA){
        unionSet.add(item)
    }
    for(let item of setB){
        unionSet.add(item)
    }
    return unionSet;
}
let A1=new Set([1,2,3]);
let A2=new Set([3,4,5]);
console.log(union(A1,A2));

//Find the intersection of two Sets.
function intersection(setA,setB){
    let intersectionSet=new Set();
    for(let value of setA){
        if(setB.has(value)){
            intersectionSet.add(value);
        }
    }
    return intersectionSet;
}
console.log(intersection(A1,A2));

//Find the difference of two Sets (A − B).
function difference(setA,setB){
    let differenceSet=new Set();
    for(let value of setA){
        if(!setB.has(value)){
            differenceSet.add(value)
        }
    }
    return differenceSet;
}
console.log(difference(A1,A2));

//Find the symmetric difference between two Sets.
function symmetricDifference(setA,setB){
    let symmetricDifferenceSet=new Set();
    for(let value of setA){
        if(!setB.has(value)){
            symmetricDifferenceSet.add(value);
        }
    }
    for(let value of setB){
        if(!setA.has(value)){
            symmetricDifferenceSet.add(value);
        }
    }
    return symmetricDifferenceSet;
}
console.log(symmetricDifference(A1,A2));

//Iterate through a Set and print the square of each number.
let numbers=new Set([1,2,3,4,5]);
for(let num of numbers){
    console.log(num*num);
}


//Convert an array of objects into a Set, then check if a specific object reference exists.
let person1={
    name:"abc",
    age:12,
    address:"pune"
};
let person2={
    name:"xyz",
    age:15,
    address:"pune"
};
let personSet= new Set([person1,person2]);
console.log(personSet.has(person1));

//Given a Set of strings, convert each string to uppercase and store in a new Set.
let str1= new Set(["vaishnavi","shree","vishnu"]);
let upper=new Set();
for(let value of str1){
    upper.add(value.toLocaleUpperCase())
}
console.log(upper)



//Given two Sets of objects, find common elements (same references).

function findCommon(setA,setB){
    let common=new Set();
    for(let value of setA){
        if(setB.has(value)){
            common.add(value)
        }
    }
    return common;
}
let obj1 = { name: "vaishnavi", add: "pune" };
let obj2 = { name: "shree", add: "pune" };
let pSet=new Set([obj1,obj2]);
let oSet=new Set([obj2]);// obj2 reference is same
console.log(findCommon(pSet,oSet));


//Check if a Set contains an object with a specific property value (e.g., name="Vaishnavi").
let obj = { name: "vaishnavi", age: 21 };
let mySet = new Set([obj]);

function hasName(set, value) {
    for (let item of set) {
        if (item.name === value) {
            return true;
        }
    }
    return false;
}

console.log(hasName(mySet, "vaishnavi")); // true
console.log(hasName(mySet, "shree"));      // false


//Merge multiple Sets (more than two) into one Set without using spread operator.
function merge(setA,setB,setC){
    let mergeSet=new Set();
    for(let value of setA){
        mergeSet.add(value)
    }
     for(let value of setB){
        mergeSet.add(value)
    }
     for(let value of setC){
        mergeSet.add(value)
    }
    return mergeSet;
}
let setA=new Set([1,2,3]);
let setB=new Set([2,4,5]);
let setC=new Set([6,7,8]);
console.log(merge(setA,setB,setC))

//Check if an array has duplicates using a Set.
console.log("array has duplicate");
function findDuplicate(arr){
    let set=new Set();
    let duplicate= new Set();
    for(let num of arr){
        if(set.has(num)){
            duplicate.add(num)
        }else{
            set.add(num);
        }

      
      }
      return duplicate;
    }
    

console.log(findDuplicate([1,2,3,2,1,2]));

//Find the first non-repeating element in a string/array.
function findFirstNonRepeating(arr) {
    let seen = new Set();
    let repeated = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            repeated.add(num); // already seen → mark as repeated
        } else {
            seen.add(num); // first time seeing it
        }
    }

    // Find the first element in original order that is not repeated
    for (let num of arr) {
        if (!repeated.has(num)) {
            return num; // first non-repeating
        }
    }

    return null; // if all elements repeat
}

console.log(findFirstNonRepeating([1, 2, 3, 2, 1, 4])); // 3
console.log(findFirstNonRepeating("swiss".split(""))); // w


//panagram using set
function isPangram(str) {
    // Convert string to lowercase and remove non-alphabet characters
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    
    // Create a set of characters
    let letters = new Set(str);
    
    // If the set has 26 letters, it's a pangram
    return letters.size === 26;
}

// Examples
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello World")); // false
