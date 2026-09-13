//PrimeNumberLargestFromArray.js
/*
The below  Although the below largestPrim solution is concise, it's not the most efficient 
because sorting the entire array takes extra time. A better approach is to scan the array 
once, keep track of the largest prime found, and avoid sorting altogether.
The largestPrim() function returns the largest prime number in an array. First, 
it sorts the array in ascending numerical order using sort((a, b) => a - b). Then it uses 
findLast(isPrime), which starts from the end of the sorted array and checks 
each element with the isPrime() function. As soon as it finds a prime number,
it returns it. If no prime number exists in the array, it returns undefined*/
const arr1 = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47]
console.log(largestPrim(arr1)) //97
function largestPrim(arr1) {
  return arr1.sort((a, b) => a - b).findLast(isPrime)
}
const arr = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47]
function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
//efficient program
//  For interviews, this is the preferred approach because
//  it does not sort the array, making it more efficient.
function largestPrim(arr) {
  let largest = 0
  for (let num of arr) {
    if (isPrime(num)) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}
console.log(largestPrim(arr))//97