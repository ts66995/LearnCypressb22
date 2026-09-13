//Method 1: Using Arithmetic Operators (Most Common)
let a1 = 10;
let b1 = 20;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("a1 =", a1);
console.log("b1 =", b1);

//Method 2: Using Multiplication & Division
let a2= 10;
let b2= 20;

a2 = a2 * b2;
b2 = a2 / b2;
a2 = a2 / b2;

console.log(a2, b2);
//Method 3: Using XOR Bitwise Operator (Interview Favorite)
let a3 = 10;
let b3 = 20;

a3 = a3 ^ b3;
b3 = a3 ^ b3;
a3 = a3 ^ b3;

console.log(a3, b3);
// Method 4: Using Array Destructuring (Modern JavaScript)
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);