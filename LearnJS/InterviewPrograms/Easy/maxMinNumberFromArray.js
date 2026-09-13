//MaxMinNumberFromArray.js
console.log("-----Max-------")
const arr = [2, 4, 6, 2, 1, 9, 5]
let maxNo = arr[0]
for (ele of arr) {
  if (ele > maxNo) {
    maxNo = ele
  }
}
console.log(`Maximum number: ${maxNo}`) //9
console.log("-----Min-------")
let minNo = arr[0]
for (ele of arr) {
  if (ele < minNo) {
    minNo = ele
  }
}
console.log(`Minimum number: ${minNo}`) //1
let nums = [2, 3, 4, 5, 13, 4, 7, 8, 2];
let maxNum = nums.reduce((max, ele) => ele > max ? ele : max, nums[0])
let minNum = nums.reduce((min, ele) => ele < min ? ele : min, nums[0])
console.log(`Maximum number: ${maxNum}`) //13
console.log(`Minimum number: ${minNum}`) //2
//If the current element is greater than the current maximum, make it the new maximum.
