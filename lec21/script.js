function frequencyCounter(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}
let arr = [5, 3, 4, 2, 1];
console.log(frequencyCounter(arr, 4))

//return boolean
function frequencyCounter(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return f;
    alse
}
arr = [5, 3, 4, 2, 1];
console.log(frequencyCounter(arr, 4))


//word searching in string
function findindingString(str, char) {
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === char) {
            return 1

        }

    }
    return -1
}
console.log(findindingString("hello", "e"));
console.log(findindingString("hello", "Z"));

//linear search with objects /arrays of objects
let users = [
    { id: 1, name: "ujwal" },
    { id: 2, name: "ravi" },
    { id: 3, name: "amit" }
];

function findUserByName(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i]
        }
    }
    return null;
}
console.log(findUserByName(users, "ravi"));



// if same name
let users1 = [
    { id: 1, name: "ujwal" },
    { id: 2, name: "ravi" },
    { id: 3, name: "amit" },
    { id: 4, name: "ravi" }
];

function functionUserByName(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return arr[i]
        }
    }
    return null
}
console.log(functionUserByName(users, 4))

//creating map
/* */
let StudentMap = new Map();
StudentMap.set("101", "jay");
StudentMap.set("102", "chirag");
console.log(StudentMap.get("101"));
console.log(StudentMap.has("103"));
StudentMap.delete("102");
console.log(StudentMap);



//frequency counter using Map
arr = [10, 20, 10, 30, 40, 50, 30];

function frequencyCounter(arr) {
    const freqMap = new Map();
    for (let num of arr) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }

    }
    return freqMap;

}
const result = frequencyCounter(arr);
console.log(result);



//using string
function frequencyCounter(mystr) {

    let freqMap = new Map();
    for (let str of mystr) {
        if (freqMap.has(str)) {
            freqMap.set(str, freqMap.get(str) + 1);
        } else {
            freqMap.set(str, 1)
        }
    }
    return freqMap
}
const mystr = "Hello";
let res = frequencyCounter(mystr);
console.log(res);

// set

let fruits = new Set()
fruits.add("Apple");
fruits.add("banana");
fruits.add("Apple");
console.log(fruits);
console.log(fruits.has("banana"));
fruits.delete("Apple");
console.log(fruits)


// checking string is anagram
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent"));


// 

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let frequencyCounter = {};
    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!frequencyCounter[char]) {
            return false;
        }
        frequencyCounter[char] -= 1;
    }
    return true;
}
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))

// set 
let mySet = new Set()
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.size);

// check if value exists in set 
var fruit = new Set(["apple", "banana", "mango", ]);
console.log(fruit.has("apple"));
//delete value
fruit.delete("banana");
console.log(fruit);


//iterate over a set
for (var item of fruits) {
    console.log(item);
}
console.log(fruit)

//remove the duplicates from array


// iterate on set setA and check

//find missing number using set
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 5];

function findMissing(arr1, arr2) {
    let set2 = new Set(arr2); // store all elements of arr2
    let missing = [];

    for (let num of arr1) {
        if (!set2.has(num)) { // check if num is not in arr2
            missing.push(num);
        }
    }

    return missing;
}

console.log(findMissing(arr1, arr2));


// map
// map is key value pair 
//
let marks = new Map();
marks.set("rahul", 90);
marks.set("priya", 85);
marks.set("Amit", 88);
for (let [name, score] of marks) {
    console.log(name, "->", score);
}

//double array
let arr3 = [1, 2, 3];

let doubled = arr3.map(num => num * 2);

console.log(doubled);

// 
let strArr = ['Hi', 'Bye']
let normalized = strArr.map(x => x.toLowerCase());
console.log(normalized);

//find 
function findSum(arr, n, targetSum) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < n; i++) {
        let num = arr[i]
        map.set(num(map.get(num) || 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let complement = targetSum - num;
        if (map.has(complement)) {
            count += map.get(complement)
        }
        if (complement === num) {
            count--;
        }
    }
    return Math.floor(count / 2);

}
//linear search

//Binary search
// Binary Search in JavaScript
function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // target found
        } else if (arr[mid] < target) {
            left = mid + 1; // search in right half
        } else {
            right = mid - 1; // search in left half
        }
    }

    return -1; // target not found
}

// Example usage
arr = [1, 3, 5, 7, 9, 11];
console.log(BinarySearch(arr, 7)); // Output: 3
console.log(BinarySearch(arr, 4)); // Output: -1



// Binary Search - First Occurrence
function firstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // store the index
            right = mid - 1; // keep searching left part
        } else if (arr[mid] < target) {
            left = mid + 1; // search right half
        } else {
            right = mid - 1; // search left half
        }
    }

    return result;
}

// Example usage
arr = [1, 2, 4, 4, 4, 5, 6];
console.log(firstOccurrence(arr, 4)); // Output: 2
console.log(firstOccurrence(arr, 5)); // Output: 5
console.log(firstOccurrence(arr, 7)); // Output: -1

// lowerBound

function lowerBound(arr, target) {
    let left = 0,
        right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left; // index of first >= target
}

arr = [1, 2, 4, 4, 4, 5, 6];
console.log(lowerBound(arr, 4)); // Output: 2
console.log(lowerBound(arr, 3)); // Output: 2 (position where 3 can be inserted)

//upperbound
function upperBound(arr, target) {
    let left = 0,
        right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left; // index of first > target
}

console.log(upperBound(arr, 4)); // Output: 5
console.log(upperBound(arr, 3)); // Output: 2 (position where 3 can be inserted)

//anagram
function binarySearch(arr, target) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

let str1 = "listen".split('').sort(); // ['e','i','l','n','s','t']
console.log(binarySearch(str1, 's')); // true
console.log(binarySearch(str1, 'a')); // false


// *************************Sets***************************
// set
//sets store the unique value
let myset = new Set() // initialize empty set
console.log(myset);

// adding value to the set
myset.add('this');
myset.add('this');
myset.add('My name');
myset.add(false);
myset.add(true);
myset.add(20);
console.log(myset); // remove the duplicate value store only unique value
console.log(myset.size)

// accessin element in set using has();
console.log(myset.has(20)); // it gives true
console.log(myset.has(43)); //it gives false

//delete element set

myset.delete('this');
console.log(myset) // two this are deleted

//iterarting a set

for (let item of myset) {
    console.log('item is', item)
}


// convert set into array
// Method 1: Using spread operator
let arrary1 = [...myset]
console.log(arrary1)

// Method 2: Using Array.from()
let array2 = Array.from(myset);
console.log(array2)

//// Method 3: Using forEach
let array3 = [];
myset.forEach(value => array3.push(value));
console.log(array3)


// questions on set 
//Remove duplicates from an array using Set
function removeDuplicate(arr) {
    let set = new Set(arr)
    arr = Array.from(set)
    return arr;
}
arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(arr))


//Check if all elements in an array are unique
function checkUniqueElement(arr) {
    let set = new Set(arr)


    if (arr.length === set.size) {
        return true
    } else {
        return false
    }
}
arr = [1, 2, 3, 4, 2];
console.log(checkUniqueElement(arr))


//Count unique characters in a string
function countUniqueChar(str) {
    let set = new Set(str)
    return set.size;

}
let str = "programming";
console.log(countUniqueChar(str))


//Find intersection of two arrays using Set
function intersectionTwoArrays(arr1, arr2) {
    let set2 = new Set(arr2);
    let result = []
    for (let num of arr1) {
        if (set2.has(num)) {
            result.push(num)
        }
    }
    return result;
}
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]
console.log(intersectionTwoArrays(arr1, arr2))

// Find union of two arrays using Set
function unionOfTwoArrays(arr1, arr2) {
    let set = new Set([...arr1, ...arr2])
    return Array.from(set)



}
arr1 = [1, 2, 3];
arr2 = [3, 4, 5];
console.log(unionOfTwoArrays(arr1, arr2))

//Find difference of two arrays (A - B)
// differen a-b means only  a not in B
//  difference  b-a means only b not in a

function differenceOfTwoArrays(arr1, arr2) {
    let set1 = new Set(arr1)
    let set2 = new Set(arr2);
    let result = []
    for (let num of arr1) {
        if (!set2.has(num)) {
            result.push(num)
        }
    }
    return result;
}
arr1 = [1, 2, 3, 4];
arr2 = [3, 4, 5, 6];
console.log(differenceOfTwoArrays(arr1, arr2))


//Find first repeating element in an array using Set
function findFirstReapeatElement(arr) {
    let set = new Set();
    for (let num of arr) {
        if (set.has(num)) {
            return num;

        } else {
            set.add(num);
        }
    }
    return null;
}
arr = [10, 5, 3, 4, 3, 5, 6];
console.log(findFirstReapeatElement(arr))

//Check if two strings are anagrams using Set
function anagramString(str1, str2) {
    if (str1.length !== str2.length) return false;

    let set1 = new Set(str1);
    let set2 = new Set(str2);
    if (set1.size !== set2.size) return false;

    for (let char of set1) {
        let count1 = str1.split(char).length - 1;
        let count2 = str2.split(char).length - 1;
        if (count1 !== count2) return false;



    }
    return true
}

str1 = "listen";
str2 = "silent";
console.log(anagramString(str1, str2))

/**Find all unique pairs in an array that sum to K (using Set)

arr = [1, 5, 7, -1, 5];
k = 6;
// Output: [ [1,5], [7,-1] ]*/

function findUniquePair(arr, k) {
    let seen = new Set();
    let output = new Set();
    for (let num of arr) {
        let target = k - num;
        if (seen.has(target)) {
            let pair = [Math.min(num, target), Math.max(num, target)]
            output.add(pair.toString());
        }
        seen.add(num);
    }
    // Convert string pairs back to arrays
    return [...output].map(str => str.split(',').map(Number));
}

// Example usage
arr = [1, 5, 7, -1, 5];
let k = 6;

console.log(findUniquePair(arr, k));




/*

Find missing number in range using Set

arr = [1, 2, 4, 5];  // numbers from 1 to 5
// Output: 3*/

function findMissingNumber(arr, n) {
    let set = new Set(arr)
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            return i
        }
    }
    return null;

}

arr = [1, 2, 4, 5];
let n = 5;
console.log(findMissingNumber(arr, n));


// *************************Maps*****************************
// maps store the key value pair
const myMap = new Map()
console.log(myMap)

const key1 = 'mystr',
    key2 = {},
    key3 = function() {};

// Setting map values 
myMap.set(key1, 'this is a string')
myMap.set(key2, 'this is a blank obj')
myMap.set(key3, 'this is an empty funcion')
console.log(myMap)

// getting the values from a map
let value1 = myMap.get(key3);
console.log(value1)

//get the size of the map
console.log(myMap.size)

// you can loop using for...of  to get keys and values 
for (let [key, value] of myMap) {
    console.log(key, value)
}

// get only keys s
for (let key of myMap.keys()) {
    console.log('key is ', key)
}

//get only values
for (let value of myMap.values()) {
    console.log('value is', value)
}

// you can loop through map using for each loop
myMap.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
})


// converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

//converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log(myKeysArray)

// converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log(myValuesArray)