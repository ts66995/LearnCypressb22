//SortBinaryArray.js
//Sort a binary array so that all zeros come before all ones
arr = [1, 0, 0, 1, 1, 0, 1, 0]
let arrLength = arr.length
let zerosCount = 0
let sortarr = []
//Count the number of zeros in the array.
for (i = 0; i < arrLength; i++) {
  if (arr[i] == 0) {
    zerosCount++
  }
}
//Add the counted number of zeros to the sorted array.
for (i = 0; i < zerosCount; i++) {
  sortarr.push(0)
}
// Fill the remaining positions with ones.
for (i = zerosCount; i < arrLength; i++) {
  sortarr.push(1)
}
console.log(sortarr)
/*o/p: [0, 0, 0, 0, 1, 1, 1, 1]*/