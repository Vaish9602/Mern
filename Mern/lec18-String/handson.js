//boundary Traversal 
function boundaryTraversal(n, m, matrix) {
    for (let j = 0; j < m; j++) {
        console.log(matrix[0][j]);
    }
    for (let i = 0; i < n; i++) {
        console.log(matrix[i][m - 1])
    }
    if (n == 1) return;
    for (let j = m - 2; j >= 0; j--) {
        console.log(matrix[n - 1][j]);

    }
    if (m == 1) return;
    for (let i = n - 2; i >= 1; i--) {
        console.log(matrix[i][0])
    }
}
let matrix1 = [
    [1, 4, 3],
    [2, 7, 9],
    [5, 8, 6],
    [3, 2, 7],
];
boundaryTraversal(4, 3, matrix1)


//transpose matrix
function transpose(mat, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        console.log(mat[i].join(" "));
    }
}
let matrix4 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];
transpose(matrix4, 5);

//Rotate a matrix by 90 degree

function rotateMatrix(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse()
    }
    return matrix
}

let matrix = [
    [7, 2, 3],
    [2, 3, 4],
    [5, 6, 1],
];
console.log(rotateMatrix(matrix));

// string
let str = "vaishnavi";
let str1 = `Vaishnavi`;
let str2 = 'vaishnavi';
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);

//print
console.log(str);

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//string are immutable
str[0] = "y";
console.log(str);
str = "y"
console.log(str);

//count spaces
let words = "hi how was your day";
let space = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") space++;
}
console.log(space)

//methods in string

// includes()
console.log("baloon".includes("oon")); //true
console.log("baloon".includes("ooN")); //false
console.log("hello world".includes("world")); //true
console.log("hello world".includes("World")); //False
console.log("javascript".includes("script")); //true
console.log("javascript".includes("java")); //true  
console.log("javascript".includes("JAVA")); //false

// with position
console.log("baloon".includes("b", 0)); //true
console.log("baloon".includes("b", 1)); //false
console.log("happy".includes("ppy"));


// replace()
console.log("dog dog dog".replace("dog", "cat")); //cat dog dog
console.log("welcome to home to".replace("to", "into")); //welcon\me into home to
console.log("replace example replace".replace("replace", "change")); //change example replace 
console.log("123123".replace("123", "abc")); //abc123
console.log("openAI openai".replace("openai", "ChatGPT")); //chatgpt openai
console.log("sun and moon".replace("moon", "stars")); //sun and stars
console.log("red blue red blue".replace("blue", "green")); //red green red blue 
console.log("good morning good evening".replace("good", "happy")); //happy morning good evening
console.log("happpyyy".replace("p", "t"));
str = "shoes";
console.log(str.replace("s", "d"));

//replaceAll()
console.log("apple apple".replaceAll("apple", "mango")); //mango mango
console.log("hello world world".replaceAll("world", "JS")); //hello js js
console.log("banana".replaceAll("na", "xy")); //baxyxy
console.log("abracadabra".replaceAll("a", "A")); //AbrAcAdAbrA
console.log("dog dog dog".replaceAll("dog", "cat")); //cat cat cat
console.log("welcome to home to".replaceAll("to", "into")); //wecome into home into
console.log("123123".replaceAll("123", "abc")); //abcabc
console.log("red blue red blue".replaceAll("blue", "green")); //red green red green  
console.log("good morning good evening".replaceAll("good", "happy")); //happy morning happy evening

//trim()//remove starting space
console.log("   hello world   ".trim()); //hello world  

console.log("   javascript   ".trim()); //javascrip
console.log("   openAI   ".trim());
console.log("   trim example   ".trim());
console.log("\t  spaced text \n".trim());
console.log("   leading and trailing spaces   ".trim());
console.log("      weeeeeee    happppppppy".trim()); //weeeee    happppppy

//substring
console.log("javascript".substring(4)); //script         
console.log("javascript".substring(0, 4)); //java   
console.log("javascript".substring(-3, 6)); //javasc   
console.log("javascript".substring(6, 2)); //vasc
console.log("hello world".substring(3, 8)); //lo wo
console.log("hello world".substring(8, 3)); //lo wo
console.log("openAI chatGPT".substring(5)); //I chatgpt
console.log("openAI chatGPT".substring(0, 6)); //openai
console.log("123456789".substring(2, 5)); //345
console.log("123456789".substring(5, 2)); //345

//slice
console.log("abhishek".slice(2)); //hishek      
console.log("abhishek".slice(2, 6)); //hish
console.log("abhishek".slice(-2)); //ek
console.log("abhishek".slice(-5, -2)); //ish
console.log("javascript".slice(4)); //script
console.log("javascript".slice(0, 4)); //java
console.log("javascript".slice(-3)); //ipt
console.log("javascript".slice(6, 2)); //
console.log("hello world".slice(3, 8)); //io wo
console.log("hello world".slice(-5, -1)); //worl


//charAt()
console.log("abhishek".charAt(0)); //a 
console.log("abhishek".charAt(3)); //i
console.log("abhishek".charAt(7)); //k
console.log("abhishek".charAt(10)); //
console.log("javascript".charAt(4)); //s
console.log("javascript".charAt(0)); //j
console.log("hello world".charAt(6)); //w
console.log("hello world".charAt(-2)); //negative index ignore

//indexof()
console.log("abhishek".indexOf("a")); //0 
console.log("abhishek".indexOf("h")); //2
console.log("abhishek".indexOf("k")); //7
console.log("abhishek".indexOf("z")); //-1 (not found)
console.log("javascript".indexOf("s")); //4
console.log("javascript".indexOf("java")); //0
console.log("hello world".indexOf("o")); //4
console.log("hello world".indexOf("world")); //6
console.log("hello world".indexOf("x")); //-1(not found)

//toLowerCase()
console.log("ABC123".toLowerCase());

//toUpperCase()
console.log("abs".toUpperCase());