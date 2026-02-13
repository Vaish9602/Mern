 /**================================================Sets=============================================== */
 //A Set is a collection of unique values.
 //No duplicates are allowed.
 //Can store any type: primitive values (number, string) or objects ({}).
 /**Methods:

add(value) → add element

has(value) → check element

delete(value) → remove element

clear() → remove all elements

size → number of elements */

//This creates an empty Set.**
 set0=new Set();


 //Adding elements**
 set0.add(1);
 set0.add(2);
 set0.add(3);
 set0.add(1);//duplicate will not be added
 console.log(set0)
 console.log(set0.size)
//Use add(value) to add elements.
//Duplicates are ignored automatically.


//Checking for an element**
console.log(set0.has(1)) // true
console.log(set0.has(4))//false
//has(value) returns true if the element exists.

//Deleting elements**
set0.delete(1);//remove 1
console.log(set0)
//delete(value) removes a specific element.

//Clearing a set**
set0.clear();
console.log(set0);
//clear() removes all elements.

//Iterating over a Set**
console.log("Iterating over a Set**")
let numbers=new Set([1,2,3]);
//for of loop
for(let num of numbers){
    console.log(num);
}

// for each method
console.log("for each method")
numbers.forEach(num=>console.log(num));

//Converting Set to Array
console.log("Converting Set to Array")
let numSet=new Set([1,2,3]);

//using spread operator
console.log("using spread operator")
let arr1=[...numSet];
console.log(arr1);

//using Array.from()
console.log("using Array from")
let arr2=Array.from(numSet);
console.log(arr2);


//Set operations**


//Union (combine two sets)**
console.log(" find union set")
let setA=new Set([1,2,3]);
let setB=new Set([3,4,5]);
let unionSet=new Set([...setA, ...setB]);
console.log(unionSet);

//without spread operator
console.log("find union without spread operator")
 function union(setA,setB){
    let unionSet=new Set();

    // add all elements from setA
    for(let item of setA){
        unionSet.add(item)
    }
    //add all elements from setB
    for(let item of setB){
        unionSet.add(item)

    }
    return unionSet;
 }
 let A= new Set([1,2,3]);
 let B=new Set([3,4,5]);
 console.log(union(A,B));

 //Intersection (common elements)**
 let intersectionSet= new Set([...setA].filter(x=>setB.has(x)))
 console.log(intersectionSet);

 //without spread operator
 console.log("intersection");
 function intersection(setA,setB){
    let intersection=new Set();
    for(let item of setA){
        if(setB.has(item)){
            intersection.add(item);
        }

    }
    return intersection;

 }
 console.log(intersection(A, B));


 //Difference (elements in setA but not in setB)

 console.log("Difference (elements in setA but not in setB)");
 function difference(setA,setB){
    let differenceSet= new Set();
     for(let item of setA){
        if(!setB.has(item)){
            differenceSet.add(item)
        }
     }
     return differenceSet;
 }
 console.log(difference(A,B));

 //Symmetric Difference-Elements that are in A or B but not in both**
 console.log("Symmetric Difference-Elements that are in A or B but not in both**")

 function symmetricDifference(setA,setB){
    let symmetricDifferenceSet=new Set();
     for(let item of setA){
        if(!setB.has(item)){
            symmetricDifferenceSet.add(item)
        }
    }
        for(let item of setB){
            if(!setA.has(item)){
                symmetricDifferenceSet.add(item)

            }

 }
 return symmetricDifferenceSet;


 }
 console.log(symmetricDifference(A,B))


 //Sets with objects**


let person1= { 
    name:"Vaishnavi",
    age:21,
    address:"pune"

};

let person2={
    name:"shree",
    age:3,
    address:"pune"

};

//// Adding objects
let personSet= new Set([person1,person2]);
console.log(personSet);

// Duplicate object by reference
let personSet2 = new Set([person1, person1]);
console.log(personSet2); // Only one object, duplicates ignored

//// Different object with same content
let personSet3 = new Set([person1, { name: "Vaishnavi" }]);
console.log(personSet3); // Two objects because references are different

//Sets with strings**
let strSet = new Set([..."hello"]); // each character becomes an element
console.log(strSet); // Set {'h', 'e', 'l', 'o'} - duplicates removed

let strSet2 = new Set([..."Hello"]); // case-sensitive
console.log(strSet2); // Set {'H', 'e', 'l', 'o'}



