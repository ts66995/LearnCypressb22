//FactorialofNumber.js
let num1:number = 5;

function fact(n:number):number {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(num1))
//o/p: 120
