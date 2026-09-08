"use strict";
let num = 50;
let counter = 0;
console.log(`Factors for the number ${num} are:`);
for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        console.log(i);
        counter++;
        // Avoid printing/counting the same factor twice
        if (i !== num / i) {
            console.log(num / i);
            counter++;
        }
    }
}
console.log(`No. of factors for the number ${num} are: ${counter}`);
// If the two factors are different, print the second factor. If they are the same, don't print it again.
/*
Why Math.sqrt(num)?
For 50: √50 ≈ 7.07 So we only check: 1, 2, 3, 4, 5, 6, 7
When we find a factor, we get its paired factor using: num / i
For example:
i = 2 paired factor is 50 / 2 = 25
i = 5 paired factor is 50 / 5 = 10
So instead of checking all 50 numbers, we only check up to √50.
Interview point: The original solution is O(n), while this optimized solution is O(√n)
*/ 
