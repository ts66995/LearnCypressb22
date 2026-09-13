// 1. Using Spread Operator
const arr1 = [1, 3, 4];
const arr2 = [4, 5, 6];
const result = [...arr1, ...arr2];
console.log(result); //[ 1, 3, 4, 4, 5, 6 ]

// 2. Using concat()
const arr11 = [1, 3, 4];
const arr21 = [4, 5, 6];
const result1 = arr11.concat(arr21);
console.log(result1);
// 3. Using a for loop
const arr12 = [1, 2, 4];
const arr22 = [4, 5, 6];
const result2 = [];
for (let i = 0; i < arr12.length; i++) {
    result2.push(arr12[i]);
}
for (let i = 0; i < arr22.length; i++) {
    result2.push(arr22[i]);
}
console.log(result2);

// Merge and remove duplicates
const arr13 = [1, 2, 4];
const arr23 = [4, 5, 6];
const result3 = [...new Set([...arr13, ...arr23])];
console.log(result3);