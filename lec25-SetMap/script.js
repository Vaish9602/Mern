 /**================================================Sets=============================================== */
 set0=new Set();
 //add element
 //has method
 //delete
 //clear()
 //iterarting
 //converting set to array
//using spread operator
//using Array.from()
//union  difference intersection 


/**function union(firstSet,secondSet){
    for(let item of secondSet){
        firstSet.add(item)
    }
    return unionSet;
}


//intersection
function intersection(firstSet,seconSet){
    const intersectionSet=new Set();
    for(let item of secondSet){
    intersection.add(item)
    }
    return intersection;
}


//creating union of two sets using spread operator

const unionSet=new Set([...firstSet,...secondSet])
console.log(unionSet);

 */



let person1={
    name:"vaishnavi",
    city:"pune"
}

let person2={
    name:"shree",
    city:"baramati"
}

let personSet= new Set([person1 ,person2]);
let personSet2= new Set([person1 ,person1]);
let personSet3= new Set([person1 ,{
    name:"vaishnavi",
    city:"pune"
}])
console.log(personSet);
console.log(personSet2);
console.log(personSet3);




const setString=new Set([..."firefox"])
const setString2= new Set([..."Firefox"])
console.log(setString);
console.log(setString2);

console.log(set0.values())