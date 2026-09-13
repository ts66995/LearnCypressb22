//MissingNumber.js
const arr = [2, 4, 6, 9]
let numOfElements = 10
let missNum = []
let obj = {}
for (ele of arr) {
  obj[ele] = ele //storing each element of arra as key and value in an object
}
console.log(obj) //{ '2': 2, '4': 4, ... }
for (i = 1; i <= numOfElements; i++) {
  if (obj[i] == undefined)//if key is not available then returns undefined.Obj[ele] will return the value
    missNum.push(i)
}

console.log(missNum)//[ 1, 3, 5, 7, 8, 10 ]