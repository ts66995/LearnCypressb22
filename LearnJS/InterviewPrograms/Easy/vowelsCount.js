//VowelsCount.js
//let str = "abcdefghijklmnopqrstuvwxyz"

// Store the text that will be checked for vowels.
let str1 = "SreelAtha";

// Find all vowels in the string, ignoring uppercase/lowercase differences.
let matchedvowels = str1.match(/[aeiou]/gi);
// Display the vowels found in the string.
console.log(matchedvowels); // [ 'e', 'e', 'A', 'a' ]

// Display the total number of vowels.
console.log(matchedvowels.length); // 4
// ==========
let str = "Automation Testing";
console.log("Vowels in the string:");
for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if ( ch === 'a' || ch === 'e' ||ch === 'i' || ch === 'o' || ch === 'u') {
        console.log(ch);
    }
}