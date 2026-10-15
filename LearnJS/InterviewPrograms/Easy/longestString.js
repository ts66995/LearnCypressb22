//LongestString.js
console.log("without using sort")
let arr = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'ReactJs']
let maxLength = arr[0].length
let maxStrings = []
//find maximum length of the elements available
for (ele of arr) {
  let curLength = ele.length
  if (curLength >maxLength) {
    maxLength = curLength
  }
}
//add element to the array which element length is maximum
for (ele of arr) {
  if (ele.length == maxLength) {
    maxStrings.push(ele)
  }
}
console.log(maxLength) //10
console.log(maxStrings) //[ 'JavaScript', 'ReactJs' ]


console.log("-------------Using sort-----------")
let arr1 = ['HTML', 'CSS', 'JavaScript', 'TypeScript',  'ReactJs', 'ReactJs'];
const sortedArr = arr1.sort((a, b) => a.length - b.length);// [ 'CSS', 'HTML', 'ReactJs', 'ReactJs', 'JavaScript', 'TypeScript' ]
let maxLength1 = sortedArr[sortedArr.length - 1].length;//Last element or longest element size
console.log(maxLength1);
let result = sortedArr.filter(ele => ele.length === maxLength1);
console.log(result);

