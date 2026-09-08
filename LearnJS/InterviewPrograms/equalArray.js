// //EqualArray.js
let arr1 = [500, 200, 100]
let arr2 = [500, 200, 100]
//let arr2=[300, 200,100]
function isArraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false
    }
  }
  return true
}
console.log(isArraysEqual(arr1, arr2))
//Optimized method
const arr1 = [500, 200, 100];
const arr2 = [500, 200, 100];
function areEqualArrays(firstArray, secondArray) {
    return (
        firstArray.length === secondArray.length &&
        firstArray.every((value, index) => value === secondArray[index])
    );
}
console.log(areEqualArrays(arr1, arr2));
// Syntax: array.every(callback)
/*array.every((value, index, array) => {
    // condition
});*/
// every() checks whether all elements of the first array satisfy a condition. 
// Here, it compares each element of firstArray with the element at the same index 
// in secondArray. If all comparisons are true, every() returns true; otherwise, 
// it returns false.
// Also, the firstArray.length === secondArray.length check is important 
// because two arrays with different lengths shouldn't be considered equal even 
// if the elements that overlap happen to match.