//split()
//The split() method is used to break (split) a string into parts, based on a separator
let string = "mern stack  course";
console.log(string.split(" "))

let string2 = "mern stackaacourse";
console.log(string.split("aa"))
console.log(string2.split(""))
console.log(string.split())

//count word
let word = "  hi this is vaishnavi and we are learning mern stack ";
console.log(word.trim().split(" ").length);
// count charcter
let char = "  hi this is vaishnavi and we are learning mern stack ";
console.log(char.trim().split('').length);

//join()
let arr = [3, 2, 4, 5];
console.log("sum of arr:[", arr.join(" "), "] is:", 14);
console.log(arr.join(" "), 14);

//toggleCase
function toggleCase(str) {
    let n = str.length;
    let toggledStr = "";
    for (let i = 0; i < n; i++) {
        if (str[i] === str[i].toLowerCase()) {
            toggledStr += str[i].toUpperCase();
        } else {
            toggledStr += str[i].toLowerCase();
        }


    }
    return toggledStr;
}
console.log(toggleCase("Happy"));

//camelCase to snake_case
function camelCase(str) {
    let n = str.length;
    let camelCaseStr = '';
    for (let i = 0; i < n; i++) {
        if (str[i] == str[i].toUpperCase()) {
            camelCaseStr += "_" + str[i].toLowerCase();

        } else {
            camelCaseStr += str[i];
        }
    }
    return camelCaseStr
}
console.log(camelCase("camelCase"))


// snake_case to camelCase
function snakeCaseToCamelCase(str) {
    let n = str.length;
    let snakeCasestr = ''
    for (let i = 0; i < n; i++) {
        if (str[i] === "_") {
            i++;
            snakeCasestr += str[i].toUpperCase();


        } else {
            snakeCasestr += str[i];
        }
    }
    return snakeCasestr;
}
console.log(snakeCaseToCamelCase("sd_asd"));

// extract jungle
str = "   How_are_you_in_jungle!  ";
console.log(str.trim().substring(str.trim().indexOf("jungle"), str.trim().indexOf("jungle") + 6))

//Remove the extra spaces at the start and end of the string.
str = "   Hello World!   ";
console.log(str.trim())

//Replace all underscores _ in the string with spaces.
str = "How_are_you_today";
console.log(str.replaceAll("_", " "));
//Convert all lowercase letters to uppercase in the string.
str = "hello world";
console.log(str.toUpperCase());

//Count the number of characters in the string excluding spaces.
str = "Count these characters";
console.log(str.replace(/ /g, "").length)

//Extract the substring "World" from the string using string methods.
str = "Hello World!";
console.log(str.substring(str.indexOf("World"), str.indexOf("World") + 5))

console.log(str.slice(6))
console.log(str.slice(-6, -1))

//Split the string into individual words using string methods.
str = "Split these words into array";
console.log(str.split(""))

//Remove Special Characters
str = "Hello@World!2025";
console.log(str.replace(/[^a-zA-Z0-9]/g, ""))

//heck Prefix/Suffix

//estion:
//eck if the string starts with "Hello" and ends with "!".

str = "Hello World!";
console.log(str.startsWith("Hello"))
console.log(str.endsWith("!"))

//explore parseInt() & parseFloat() methods
//parseInt()

//used  parse a string and return an integer.
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42   (stops at 'p')
console.log(parseInt("3.14")); // 3    (decimal part ignored)
console.log(parseInt("abc123")); // NaN  (doesn’t start with number)

// With radix
console.log(parseInt("101", 2)); // 5   (binary → decimal)
console.log(parseInt("1A", 16)); // 26  (hex → decimal)

//parseFloat()

//used  parse a string and return a floating-point number.
console.log(parseFloat("42")); // 42
console.log(parseFloat("42.56")); // 42.56
console.log(parseFloat("42.56px")); // 42.56 (stops at 'p')
console.log(parseFloat("3.14abc")); // 3.14
console.log(parseFloat("abc3.14")); // NaN

/* only use replace() & replaceAll() method and replace "in" with "on" in below string 
Note: Spain should remain as is
*/

str = "Hi are you in Spain, which city are you in? How's your pain?";
console.log(str.replaceAll("in", "on").replace("Spaon", "Spain"));

//reverse string
function reverse(str) {
    let reverse = '';
    let n = str.length;
    for (let i = 0; i < n; i++) {
        reverse += str[n - 1 - i];

    }
    return reverse;
}
console.log(reverse("hello"));

//check string is palindrome or not
function isPalindrome(str) {

    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (str[i] != str[n - 1 - i]) {
            return false;
        }
    }
    return true

}
console.log(isPalindrome("aba"));
console.log(isPalindrome("abc"));

/* check if a string is palindrom or not, ignore cases (upper/lower) & spaces */
str = "Nurses Run";
console.log(isPalindrome(str.toLowerCase().replaceAll(" ", "")))

// find the length of longest word
str = "Pune is the most loved city for its weather";

function longestLength(str) {
    let words = str.split(" ");
    let maxLen = 0;
    for (let word of words) {
        if (word.length > maxLen) {
            maxLen = word.length;
        }

    }
    return maxLen;
}

console.log(longestLength(str));


//lastiIndexOf() method
console.log("stringMethodstring".lastIndexOf("s"))
console.log("hello".lastIndexOf("l"))

//write a function to find the first non-repeating character in a string 
function nonRepeatingChar(str) {

    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i]

        }


    }
    return null;


}
console.log(nonRepeatingChar("stringMethodstring"))
console.log(nonRepeatingChar("aaaabbbb"));

/* write a function to count the frequency of each character */
function frequencyOfEachChar(str) {
    let freq = {}
    let n = str.length;
    for (let i = 0; i < n; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }
    return freq
}
console.log(frequencyOfEachChar("aaaabbbbbc"))

//
function frequencyOfEachChar(str) {
    let freq = {}
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1
    }
    for (let char in freq) {
        console.log(char + ":" + freq[char])
    }
}
frequencyOfEachChar("aaaabbbbbc")


//Write a function to find frequency of each word from the given string 
function frequencyOfWord(str) {
    let freq = {};
    let words = str.split(" ");
    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }
    for (let word in freq) {
        console.log(word + ":" + freq[word]);
    }
}
frequencyOfWord("abd ghj abd ghi ghj abc abd")