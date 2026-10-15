"use strict";
//O/p: Longest consecutive subsequence: [ 1, 2, 3, 4, 5, 6 ]
const numbers1 = [
    2, 4, 1, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8
];
let currentStart1 = 0;
let currentLength1 = 1;
let longestStart1 = 0;
let longestLength1 = 1;
for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] === numbers1[i - 1] + 1) {
        currentLength1++;
    }
    else {
        currentStart1 = i;
        currentLength1 = 1;
    }
    if (currentLength1 > longestLength1) {
        longestLength1 = currentLength1;
        longestStart1 = currentStart1;
    }
}
const result1 = numbers1.slice(longestStart1, longestStart1 + longestLength1);
console.log("Longest consecutive subsequence:", result1);
