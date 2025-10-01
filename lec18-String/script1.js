//split()
let string = "mern  stack  course";
console.log(string.split(" "));

//count number of words
let words = "   hi this is vaishnavi and we are learning mern stack"
console.log(words.trim().split(" ").length);
//join ()
let arr = [3, 2, 4, 5];


//

function toggleCase(str) {
    let toggledStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            toggledStr += str[i].toUpperCase();

        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            toggledStr += str[i].toLowerCase();
        } else toggledStr += str[i];


    }
    return toggledStr
}
console.log(toggleCase("HelLo78"));


//write function camelCase to snake_case
function WordCase(str) {
    let wordcaseStr = "";
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (str[i] == str[i].toUpperCase()) {
            wordcaseStr += '_' + str[i].toLowerCase();
        } else wordcaseStr += str[i]
    }
    return wordcaseStr


}
console.log(WordCase("camelCase"))

//snake case to camel case
function snake_case(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        let result += str[i].remove('_', toUpperCase())

    }
}



// 
str = "  How_are_you_in Jungle!  "

console.log(str.trim().indexOf("Jungle"), str.trim().indexOf("Jungle") + 6);
console.log(str.trim().split(" ")[1].split("!")[0]);


//only use replace() and replaceAll( ) take spain as it is

str = "Hi are you in Spain,which city are you in? how's your pain?"


console.log(str.replaceAll("in", "on").replace("Spaon", "Spain"));

//reverse string
function reverseStr(str) {
    let reverse = "";
    let n = str.length;
    for (let i = 0; i < n; i++) {
        reverse += str[n - 1 - i];
    }
    return reverse;
}
console.log(reverseStr("aba"));
//palindrome or not
function palindromeOrNot(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (str[i] != str[n - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindromeOrNot("abc"));

//
function isPalindromeOrNot(str) {
    let newStr = str.replaceAll(" ", "").toLowerCase();
    let n = newStr.length;
    for (let i = 0; i < n; i++) {
        if (newStr[i] != newStr[n - 1 - i]) {
            return false;
        }
    }
    return true;



}
console.log(isPalindromeOrNot("Nurses Run"));



// lastIndexOf()
console.log("stringMehodstring".lastIndexOf("s"));

// write a function to find the first  non repeating charcter

function findNonRepeating(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return "no non_repeating character"
}
console.log(findNonRepeating("stringMethodString"));


//count frequency of each character
function frequencyOfEachChar(str) {
    let freq = {}
    let n = str.length;
    for (let i = 0; i < n; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    }
    return freq;
}

console.log(frequencyOfEachChar("ababd"))


//write function to find frequency of each word v