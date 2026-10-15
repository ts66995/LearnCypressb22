//finds the longest consecutive sequence that appears continuously in the array
// O/p: Longest consecutive subsequence: [ 1, 2, 3, 4, 5, 6 ]
const numbers = [2, 4, 1, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8];
let currentStart = 0;
let currentLength = 1;
let longestStart = 0;
let longestLength = 1;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1] + 1) {
        currentLength++;
    } else {
        currentStart = i;
        currentLength = 1;
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
        longestStart = currentStart;
    }
}
const result = numbers.slice(longestStart,longestStart + longestLength);
console.log("Longest consecutive subsequence:", result);
/*
Interview explanation

The key logic is:

numbers[i] === numbers[i - 1] + 1

This checks whether the current number is exactly 1 greater than the previous number.

For example:

1 → 2 → 3 → 4 → 5 → 6

Each number satisfies the condition, so the sequence continues.

When we reach:

6 → 8

the condition fails because 8 !== 7, so we reset the sequence.

Complexity:

Time: O(n)
Space: O(1) excluding the result array.

============
This program finds the longest consecutive sequence that appears continuously in the array, where each next number must be exactly 1 greater than the previous number.

For your input:

[2, 4, 1, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8]

the longest continuous sequence is:

[1, 2, 3, 4, 5, 6]
1. Initial variables
let currentStart = 0;
let currentLength = 1;

let longestStart = 0;
let longestLength = 1;

There are two sequences we need to track:

Current sequence
currentStart
currentLength

These track the consecutive sequence we are currently checking.

Longest sequence
longestStart
longestLength

These store the longest consecutive sequence found so far.

For example:

numbers = [2, 4, 1, 2, 3, 4, 5, 6, ...]
             ↑
        current sequence
2. The for loop
for (let i = 1; i < numbers.length; i++) {

We start from index 1 because we need to compare the current element with the previous element.

For example:

index:    0  1  2  3  4
numbers: [2, 4, 1, 2, 3]
             ↑
             i

At i = 1:

numbers[i]       // 4
numbers[i - 1]   // 2
3. Checking consecutive numbers
if (numbers[i] === numbers[i - 1] + 1) {

This is the most important condition.

It asks:

Is the current number exactly 1 greater than the previous number?

For example:

Previous = 2
Current  = 3

Check:

3 === 2 + 1
3 === 3

So the condition is true.

Therefore:

currentLength++;

The current consecutive sequence becomes longer.

Example

Suppose we have:

1, 2, 3, 4, 5, 6

When checking:

2 compared with 1 → consecutive
3 compared with 2 → consecutive
4 compared with 3 → consecutive
5 compared with 4 → consecutive
6 compared with 5 → consecutive

So:

currentLength
1 → 2 → 3 → 4 → 5 → 6
4. What happens when numbers are NOT consecutive?
else {
    currentStart = i;
    currentLength = 1;
}

Suppose we have:

2, 4

We check:

4 === 2 + 1

which becomes:

4 === 3

False.

Therefore, the previous sequence has ended.

We start a new sequence from the current index:

currentStart = i;
currentLength = 1;
5. Understanding currentStart

Suppose:

numbers = [2, 4, 1, 2, 3, 4, 5, 6]

The sequence:

1, 2, 3, 4, 5, 6

starts at index 2.

index:     0  1  2  3  4  5  6  7
numbers:  [2, 4, 1, 2, 3, 4, 5, 6]
                ↑
          currentStart = 2

So:

currentStart = 2;

And its length is:

1, 2, 3, 4, 5, 6
-----------------
       6 numbers

Therefore:

currentLength = 6;
6. Checking whether current sequence is the longest
if (currentLength > longestLength) {
    longestLength = currentLength;
    longestStart = currentStart;
}

Suppose we have found:

currentLength = 6

and currently:

longestLength = 3

Then:

6 > 3

is true.

So we update:

longestLength = 6;
longestStart = currentStart;

Now the program remembers:

"The longest sequence I have found starts at this index and has 6 elements."

7. Let's trace the important part

Input:

const numbers = [2, 4, 1, 2, 3, 4, 5, 6, 8, 9, 5, 6, 7, 8];

The important consecutive sequences are:

2
4
1, 2, 3, 4, 5, 6
8, 9
5, 6, 7, 8

Their lengths are:

2                         → 1
4                         → 1
1,2,3,4,5,6              → 6
8,9                       → 2
5,6,7,8                  → 4

Therefore:

Longest = 1,2,3,4,5,6
Length  = 6
8. Now let's understand slice()

Your final line is:

const result = numbers.slice(longestStart, longestStart + longestLength);

This is used to extract the longest sequence from the original array.

The syntax is:

array.slice(start, end)

Important:

slice() includes the start index but does NOT include the end index.

Simple example
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);

Output:

[20, 30, 40]

Why?

index:     0   1   2   3   4
numbers:  [10, 20, 30, 40, 50]
                ↑           ↑
              start        end

slice(1, 4) means:

Take index 1
Take index 2
Take index 3
STOP before index 4

So:

[20, 30, 40]
9. Applying slice() to your program

The longest sequence is:

[1, 2, 3, 4, 5, 6]

It starts at index 2.

index:     0  1  2  3  4  5  6  7
numbers:  [2, 4, 1, 2, 3, 4, 5, 6]
                ↑
          longestStart

Therefore:

longestStart = 2;

And:

longestLength = 6;

So:

numbers.slice(longestStart, longestStart + longestLength);

becomes:

numbers.slice(2, 2 + 6);

which becomes:

numbers.slice(2, 8);

Remember that slice() excludes index 8.

Therefore it takes:

index 2 → 1
index 3 → 2
index 4 → 3
index 5 → 4
index 6 → 5
index 7 → 6

Result:

[1, 2, 3, 4, 5, 6]
10. Complete flow in simple terms

You can explain this in an interview like this:

"I iterate through the array from the second element and compare each element with the previous element. If the current element is exactly one greater than the previous element, I increase the current sequence length. If it is not consecutive, I reset the current sequence starting from the current index. Whenever the current sequence becomes longer than the previously recorded longest sequence, I update the longest start index and length. Finally, I use slice() with the start index and end index to extract the longest consecutive subsequence."

One important point about slice()

The formula:

longestStart + longestLength

is used because the second argument of slice() is an exclusive end index.

For example:

longestStart = 2;
longestLength = 6;

Therefore:

slice(2, 8)

means:

Start at index 2
Take 6 elements
Stop before index 8

So we get:

1, 2, 3, 4, 5, 6
Interview shortcut to remember
array.slice(start, end)

Start → included
End → excluded

And in your program:

slice(longestStart, longestStart + longestLength)

means:

"Start from where the longest sequence begins and extract exactly longestLength elements."
*/