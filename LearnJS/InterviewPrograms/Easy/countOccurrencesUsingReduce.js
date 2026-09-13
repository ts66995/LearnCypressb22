// 1: Using reduce() — Recommended
// const numbers = [1, 2, 2, 3, 1, 4, 2, 3, 3, 3]; //o/p: { 1: 2, 2: 3, 3: 4, 4: 1}
const numbers = ["Passed", "Failed", "Passed", "Skipped", "Passed", "Failed"];
// let numbers = "automation";
// numbers=numbers.toLowerCase().split("")
//o/p: { Passed: 3, Failed: 2, Skipped: 1 }
// const count = [...numbers].reduce((result, number) => {
const count = numbers.reduce((result, number) => {
    result[number] = (result[number] || 0) + 1;
   /* if (result[number]) {
        result[number] = result[number] + 1;
    } else {
        result[number] = 1;
    }*/
    return result;
}, {});
console.log(count);
// 2: Shorter Version
/*
const numbers = [1, 2, 2, 3, 1, 4, 2, 3, 3, 3];
const count = numbers.reduce((result, number) => {
    result[number] = (result[number] || 0) + 1;
    return result;
}, {});
console.log(count);
*/
// note: here numbers should be Array. if it is a string Ex: const numbers="automation" then use [...numbers].reduce
// or convert string to array by using numbers.split("")
// I use reduce() to convert the array into an object where each unique value becomes
// a key and its occurrence count becomes the value. If the key already exists,
// I increment its count; otherwise, I initialize it to 1. The time complexity is O(n)."