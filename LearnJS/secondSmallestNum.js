// So the patterns are opposites:
// Maximum  → -Infinity
// Minimum  →  Infinity
// Why Infinity? Because every normal number is smaller than Infinity.
// For example: -20 < 10 < 100 < Infinity

// let arr = [100, 25, 179, 78, 45, 30, 45, 15];
let arr = [-10, -5, -20, -3, -8];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num of arr) {

    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num > smallest) {
        secondSmallest = num;
    }
}

console.log("Smallest number:", smallest);
console.log("Second Smallest number:", secondSmallest);

/*
[10, 25, 8, 45, 30, 45, 15]
Number	Largest	SecondLargest
       -Inf     -Infinity
10	    10	    -Infinity
25	    25	    10          25>10 true then 2nd=10, largest=25  
8	    25	    10          8>25 false then 8>10 && 8<25 not satfsied. Nothing will happen. Numbers for laargest and 2nd largest will be as it is
45	    45	    25          45>25 true then 2nd=25, largest=45
30	    45	    30          30>45 false then 30>25 && 30<45 => true then 2ndlargest=30
45	    45	    30          45>45 false then 45>30 && 45<45 => false then Nothing will happen
15	    45	    30          15>45 false then 45>30 && 45<15 => false then Nothing will happen
*/