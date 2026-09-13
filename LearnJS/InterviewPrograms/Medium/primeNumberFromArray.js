//PrimeNumberFromArray.js
const arr = [2, 3, 4, 5, 11, 6, 7, 8, 9, 10]
console.log(findPrimeFromArr(arr))

function findPrimeFromArr(arr) {
  return arr.filter(isPrime)
}
function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) { //If the remainder is 0, the number is divisible by i
      return false
    }
  }
  return true
}
//o/p: [ 2, 3, 5, 11, 7 ]
/*
Factors always occur in pairs. For example, the factors of 36 are (1,36), (2,18), (3,12), 
(4,9), and (6,6). The square root of 36 is 6, and every factor larger than 6 has a 
corresponding factor smaller than 6. Therefore, if a number has any divisor greater 
than its square root, its paired divisor must already have been checked before reaching 
the square root. That's why checking divisibility only up to Math.sqrt(num) is sufficient. 
This reduces the time complexity from O(n) to O(√n), making the prime-check algorithm 
much more efficient.
*/
// Print Prime Numbers from 10 to 100
let rangePrime=[]
for (let num = 10; num <= 100; num++) {
    if (isPrime(num)) {
       // console.log(num);
       rangePrime.push(num)
    }
}
d