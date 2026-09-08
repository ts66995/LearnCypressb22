//PrimeNumberwithinaRange.js
let limit = 100
console.log(primeNumLimit(limit))
function primeNumLimit(limit) {
  let primus = []
  if (limit >= 2) {
    primus.push(2)
  }
  for (i1 = 3; i1 <= limit; i1 = i1 + 2) {
    if (isPrime(i1)) {
      primus.push(i1)
    }
  }
  return primus
}
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
/*
[2, 3, 5, 7, 11, 13, 17, 19,
23, 29, 31, 37, 41, 43, 47, 53,
59, 61, 67, 71, 73, 79, 83, 89,
97]
*/