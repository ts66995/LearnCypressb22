//LongestString.js
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