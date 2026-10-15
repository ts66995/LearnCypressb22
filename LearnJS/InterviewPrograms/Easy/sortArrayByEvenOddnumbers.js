//SortArrayByEvenOddnumbers.js
nums = [9, 8, 6, 5, 2, 4, 1, 10]
console.log(nums.sort((a, b) => {
  if (a % 2 != b % 2) {//one element is even and another element is odd
    return a % 2 == 0 ? -1 : 1//1st numer is even(a%2==0) then swapping is not required
  } else {
    return a > b ? 1 : -1//if a>b then (ex:9>8), then swapping required
  }
}))
//+ve(1) or zero then swapping not required negative or -1 then swapping required
//o/p: [2, 4, 6, 8,10, 1, 5, 9]
//Sorting the array of numbers
// console.log(nums.sort((a, b) => a-b))
nums.sort((a,b)=>(a%2)-(b%2)||a-b)
const nums = [9, 8, 6, 5, 2, 4, 1, 10];
nums.sort((a, b) => (a % 2) - (b % 2) || a - b);//[2, 4, 6, 8,10, 1, 5, 9] //Even → ascending → Odd → ascending.
console.log(nums);
/*
nums.sort((a, b) => (a % 2) - (b % 2) || b - a);//Even → descending → Odd → descending. [10, 8, 6, 4,2, 9, 5, 1]
nums.sort((a, b) => (b % 2) - (a % 2) || a - b);//Odd → ascending → Even → ascending[1, 5, 9,  2, 4, 6, 8, 10]
nums.sort((a, b) => (b % 2) - (a % 2) || b - a);//Odd → descending → Even → descending [9, 5, 1, 10,8, 6, 4,  2]
*/
/*
if a - b is 
"a % 2 returns 0 for even numbers and 1 for odd numbers. Therefore, (a % 2) - (b % 2) 
makes even numbers come before odd numbers. If both numbers have the same parity, 
this expression returns 0, so || a - b is evaluated and sorts those numbers in ascending order."

(a % 2) - (b % 2) || a - b If the left side produces 0, JavaScript evaluates the right side.
(a % 2) - (b % 2) This determines whether even or odd numbers should come first.
Even → 0
Odd  → 1
a = 9
b = 8
Then: (9 % 2) - (8 % 2)
becomes:1 - 0= 1
A positive result means b comes before a.So:8, 9 Even comes before odd.
if both are even?
Suppose:
a = 8
b = 6
Then:(8 % 2) - (6 % 2)
becomes: 0 - 0 = 0
Now we need another rule to decide the order.
That's where this comes in:
a - b So: 8 - 6 = 2
Positive → 6 comes before 8.
Therefore:6, 8
What does || mean here?
The complete expression is:
(a % 2) - (b % 2) || a - b
The important concept is:
If the left side produces 0, JavaScript evaluates the right side.
So:0 || a - b
uses: a - b
Therefore:(a % 2) - (b % 2)is the primary sorting condition.
And:a - b is the secondary sorting condition.
*/