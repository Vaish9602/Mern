/**DOm basics */
// document Object model
// dom is tree like structure of entire webpage
//when webpage loads the browser converts your html page into dom tree that javascript read and modify
/**
 * Accessing elements
 * getElementById method
 * getElementByClassName
 * getElementBy TagName
 * querySelector()
 * querySelectorAll()
 * 
 * //updating element
 * element.innerHTML=new html content
 * innerText
 * textContent
 * 
 * element.attribute= new value
 * element.style.property= new style
 * element .setAttribute(attributeName,value)
 */


console.log("this is our main file")
let contentPara=document.getElementById("content");
console.log({contentPara})

console.log(document.getElementsByClassName("outer"))
console.log(document.getElementsByTagName("p"))

contentPara.style.fontFamily="arial"
contentPara.style.fontSize="24px"

let cont =document.getElementById("container");

Array.from(cont.children).forEach(element=>{
    console.log(element)

});



for(let child of cont.children){
    console.log(child);
}


/** dom traversal methods


// 1. document.getElementById
// console.log(document.getElementById("content"));
// 2. document.getElementsByClassName
// 3. document.querySelector
 */

console.log(document.querySelector("#content"));


console.log(document.querySelector("#container p"))
console.log(document.querySelectorAll("#container span"))


console.log(document.querySelector(".outer li p"))

let para=document.querySelector(".outer p");

console.log("text content",para.textContent)
console.log("inner text",para.innerText)
console.log("inner html",para.innerHTML)
// this all used to modified the content of the data



//gets element with name attribute =firstName
let inputElement = document.querySelector(`input[name='firstName']`)
console.log(inputElement)


let allColumns = document.querySelectorAll("#age-table td");
console.log(allColumns);

// for (let column of allColumns) {
//     if (column.textContent.includes("Age")) {
//         // console.log(column)
//         return column
//         break;
//     }
// }

document.getElementById("content").setAttribute("data-value", 2)
































