//Given number is prime or not
let num = 97
console.log(isPrime(num))
function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}