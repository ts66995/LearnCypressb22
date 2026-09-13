//RandomNumberWithinRange.js
console.log(RandomNumInRange(1000, 10000))
function RandomNumInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
/*
-Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
Ex:0.12345
0.87654
0.00012
0.99999
It never returns 1.
So, 0 <= Math.random() < 1

-Math.random() * (max - min) + min =>generates a random decimal number between 
min (inclusive) and max (exclusive).
Ex: max=100 min=50
Math.random() returns  0.62

Step 1
max - min
↓
100 - 50 = 50

Step 2
0.62 * 50
↓
31

Step 3
31 + 50
↓
81
Random number generated: 81

If you want an integer instead of a decimal
Use Math.floor():
let random = Math.floor(Math.random() * (max - min) + min);

To include max, use:
(Math.random() * (max - min + 1)) + min
*/