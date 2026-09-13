//VowelsCount.js
//let str = "abcdefghijklmnopqrstuvwxyz"

// Store the text that will be checked for vowels.
let str = "SreelAtha";

// Find all vowels in the string, ignoring uppercase/lowercase differences.
let matchedvowels = str.match(/[aeiou]/gi);

// Display the vowels found in the string.
console.log(matchedvowels); // [ 'e', 'e', 'A', 'a' ]

// Display the total number of vowels.
console.log(matchedvowels.length); // 4