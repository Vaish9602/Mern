// practice question

//Reverse a string – "hello" → "olleh"

console.log("reversed string")

function reverseString(str) {
    let reverse = "";
    let n = str.length;
    for (let i = 0; i < n; i++) {
        reverse += str[n - 1 - i]
    }
    return reverse;
}
console.log(reverseString("hello"));

//Check if a string is a palindrome – "racecar" → true
console.log("Check if a string is a palindrome");

function palindromeOrNot(str) {
    let n = str.length;

    for (let i = 0; i < n; i++) {
        if (str[i] !== str[n - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(palindromeOrNot("racecar"));

//Count vowels and consonants – "hello" → vowels: 2,
console.log("Count vowels and consonants ");

function countVowelConsontants(str) {
    let v = 0;
    let c = 0;
    str = str.toLowerCase()
    for (let char of str) {
        if ("aeiou".includes(char)) {
            v++;

        } else if (char >= 'a' && char <= 'z') {
            c++;
        }
    }
    return { v, c }
}
console.log(countVowelConsontants("education"))

//Convert tooglecase

console.log("tooglecase");

function toggleCaseStr(str) {
    let toggleCase = ""
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            toggleCase += char.toLowerCase()
        } else {
            toggleCase += char.toUpperCase()
        }
    }
    return toggleCase
}
console.log(toggleCaseStr("HAHaasdh"));


// snake cas