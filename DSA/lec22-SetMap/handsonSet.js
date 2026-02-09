/***************************************SET************************************ */

// set is collection of unique value
// no duplicate value allowed
// store value through number,string,objects
/**
 * Methods
 * add()
 * has()
 * delete()
 * clear()
 * size
 * 
 */

// create a set
let set1=new Set();

// add element in set
 set1.add(10);
 set1.add(10);
 set1.add("vaishnavi");
 set1.add({name:"shree"});
 console.log("adding element in set1",set1);

 //checking element
 console.log(set1.has(10))//true
 console.log(set1.has("happy"))//false

 //delete element
 set1.delete("vaishnavi");
 console.log(set1);
 
 // clear
 set1.clear()
 console.log(set1);

 //size
 console.log(set1.size)

 //iterating over the loop
  let numbers=new Set([1,2,3]);
  for(let num of numbers){
    console.log("iterating over the loop",num);

  }
  //

  numbers.forEach(num=>console.log(num));

  //converting set to array
   // using spread operator
   let newSet=new Set();
   console.log([...newSet])

   //using Array.from
   let set2=new Set();
   set2.add(22);
   set2.add(23);
   set2.add(24);
   console.log(Array.from(set2))

   //union
   let setA= new Set([1,2,3]);
   let setB=new Set([3,4,5]);

   console.log("union");
   //using spread operator s
   //let union=new Set([...setA,...setB]);
   //console.log(union)
   
   //union set 
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
   let A= new Set([1,2,3]);
 let B=new Set([3,4,5]);
   console.log(union(A,B));

   // intersection 
   function intersection(setA,setB){
    let intersectionSet=new Set();
    for(let item of setA){
        if(setB.has(item)){
            intersectionSet.add(item);
        }

    }
    return intersectionSet;

   }
   console.log(intersection(A,B));

   //difference
   function difference(setA,setB){
    let differenceSet=new Set();
    for(let item of setA){
        if(!setB.has(item)){
            differenceSet.add(item)
        }
    }
    return differenceSet;
   }
   console.log(difference(A,B));


   //symmetric difference
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

   //objects in set

   let person1={
    name:"vaishnavi",
    age:21,
    address:"pune"

   };
let person2={
    name:"shree",
    age:3,
    address:"pune"
};

let set5=([person1,person2]);
console.log(set5);



