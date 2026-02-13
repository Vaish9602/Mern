//print in js
console.log("js practicing");

//variable declaration 

let  age=23;
age=24;
// let age=12; this is not allowed

// redeclaration is not allowed reassign  is allowed  it is block level scope

const q= 10;
//q=34; reassign is not allowed
//const q=12; redeclaration not allowed
// redeclaration is not allowed  reassign not allowed it is block level scope

var val= 12;
val=12;// reassign is allowed
var val=13;// redeclaration  is allowed
//it is function level scope

// example
 if(true){
    let a=12;// block level scope
    const b=10;// block level scope
    var c= 20;// function level scope
 }
 //console.log(a)// reference  error //this depend on the block
 //console.log(b);//reference error //this depend on the block
 console.log(c);// output is 20  //this is function level scope

 // data type in js 

 //primitive data type
 /**primitive data type store the single value and immutable means data cannot  be change
  * number
  * string
  * boolean 
  * undefined
  * null
  * bigInt
  * symbol
  * 
  */

 //number
 let num=10;
 num=10.10;
 num=NaN;
 num= Infinity;
console.log(typeof num)//number

//string
let str="string"
str="123";
console.log(typeof str);//string

//boolean 
let isTrue=true;
let isFalse= false;
console.log(typeof isTrue);// boolean

//undefined
//variable declare but not assign

let x;
console.log(typeof x)//undefined;

//null
//null treat as 0
let y=null;
console.log(typeof y)//object

// bigInt
let big=123456788888888987654n;
console.log(typeof big);// bigInt

//symbol
let id= Symbol("id")
console.log(typeof id)// symbol

/*Non primitive data type -> store multiple value and mutable can be changed value
object
array
function*/

//object

let obj={
    name:"vaishnavi",
    age:22

};
console.log(typeof obj);//object

//array
let arr=[1,2,3,4,5];
console.log(typeof arr)// object

//function
function simple(arr){
    return arr;
}
console.log(typeof simple)//function

/**************************************Operators in Js****************************************** */


/**Arithmetic operator
 * +,-,*,/,**,%
 */

//Multiplication Table Generator for a Given Number - JS
for(let i=1;i<=10;i++){
    console.log("8 X ",i,"=",8*i);
}


//JavaScript Float Variable Reassignment - JS
let A=10.45
A=20.55;
console.log(A)

//Calculate Average Product Rating - JS
function calculateAverageRating(){
let rating1=10.5;
let rating2=12.5;
let rating3=12.15;
let sum= (rating1+rating2+rating3);
let avg=Math.floor(sum/3);
return avg;
}
console.log(calculateAverageRating());

//Printing Messages in Different Languages
console.log("Hello, World.");
console.log("Hello, JavaScript.")

//Basic Variable Addition - JS
let a=10;
let b=20;
let c1=a+b;
console.log(c1)
// Quotient and Remainder Calculation - JS
a=1042;
b=7;
let que=Math.floor(a/b);
let rem= a%b;
console.log(que,rem);
//Printing a Concatenated String
a=10;
console.log("My num is" , a)

//Circle Area and Perimeter Calculation - JS
let r=4;
let pi=3;
let area= pi*r*r;
let Perimeter=2*pi*r;
console.log(area)
console.log(Perimeter)
//Celsius to Fahrenheit 2 - JS
 c=32;
let  f=(c*(9/5))+32;
console.log(f.toFixed(6))

//Basic Arithmetic Operations - JS
A=8;
let B=3;
console.log(A+B);
console.log(A-B);
console.log(A*B)
console.log(Math.floor(A/B))
console.log(A%B)


//Agent Binod - JS
let agentName="Binod"
console.log("Hi my name is Agent",agentName )
//Temperature Conversion - JS
c=25;
f=(c*(9/5))+32;
console.log(f)



//precedence + associativity
/**rules
 * pereference
 * () brackets
 * power
 *   multiply division
 *  plus minus
 * 
 * associativity
 * () left to right
 * ** right to left
 *   multiply division left to right
 *   plus minus  left to right
 
 */
 a = 10 + 6 * 2 - 8 / 4;
console.log(a);//20

 b = 20 - 5 - 3 * 2;
console.log(b);//9

 c = 2 ** 3 ** 2;
console.log(c);//512
let d = 100 / 5 / 2 + 3 ** 2;
console.log(d);//19

const e = ("5" + 5) * 2 ** 3 - 20 / 4;
console.log(e);//435
console.log("5" + 5);

 f = 18 / 3 * 2 ** 2 - 4;
console.log(f);//20

let g = 30 - 10 + 5 * 2 ** 3 / 4;
console.log(g);//30
let z;
 x, y;
x = y = 5 + 5 * 2;
console.log(x, y, z);//15 15 undefined

 a = 4 + 6 * 2 ** 3 / 4 - 5;
console.log(a);//11

 b = 50 - 20 / 5 + 3 ** 2 * 2;
console.log(b);//64

const c = ("12" + 3) * 2 ** 2 - 18 / 3;
console.log(c);//486
console.log("12" + 3);

 d = 2 ** 2 ** 3 / 4 + 10;
console.log(d);//74

 x, y;
x = y = 8 + 4 * 3 - 2 ** 2;
console.log(x, y);//16 16














