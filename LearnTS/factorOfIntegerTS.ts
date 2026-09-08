let num: number = 50;
let counter: number = 0;
console.log(`Factors for the number ${num} are:`);
for (let i: number = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        console.log(i);
        counter++;
        // Avoid printing/counting the same factor twice
        // If the two factors are different, print the second factor. If they are the same, don't print it again.
        if (i !== num / i) { //if i=2,num=50 then 2!=50/2=>2!=25=>true=> Print 50/2 i.e 25, if i=6,num=36 6!=36/6=>6!=6=>false=> don't print 6 and don't increment counter i.e 10
            console.log(num / i);
            counter++;
        }
    }
}
console.log(`No. of factors for the number ${num} are: ${counter}`);

/*
Why Math.sqrt(num)?
For 50: √50 ≈ 7.07 So we only check: 1, 2, 3, 4, 5, 6, 7
When we find a factor, we get its paired factor using: num / i
For example:
i = 2 paired factor is 50 / 2 = 25
i = 5 paired factor is 50 / 5 = 10
So instead of checking all 50 numbers, we only check up to √50.
Interview point: The original solution is O(n), while this optimized solution is O(√n)

Why do we need this condition?
if (i !== num / i) {
    console.log(num / i);
    counter++;
}

Consider a perfect square, such as 36.
Its factors are:
1, 2, 3, 4, 6, 9, 12, 18, 36
When:
i = 6
we calculate:
num / i
= 36 / 6
= 6

So the condition becomes:
if (6 !== 6)
That's false.
Therefore, we don't print 6 again and we don't increment the counter again.
Without this condition, we would get:
6
6
and incorrectly count 6 twice.
Think of it as factor pairs
For 36:
1 × 36
2 × 18
3 × 12
4 × 9
6 × 6   ← same factor
The condition:
i !== num / i
basically says:
"If the two factors are different, print the second factor. If they are the same, don't print it again."
*/