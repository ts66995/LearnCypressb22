//FactorialofNumber.js
let num = 5
function fact(n) {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(num))
//o/p: 120