// Reverse the order of words:
// Input:  "I love JavaScript"
// Output: "JavaScript love I
let str = "I love JavaScript";
let words = str.split(" ");
let result = "";
for (let i = words.length - 1; i >= 0; i--) {
    result = result + words[i] + " ";
}
console.log(result.trim());

// (OR)

let str1 = "I love JavaScript";
let result1= str1.split(" ").reverse().join(" ");
console.log(result1);