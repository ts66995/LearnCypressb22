//Given an array of numbers and a target value, find two numbers whose sum equals the target.
// Ex: const numbers = [2, 7, 11, 15]; const target = 9; o/p: 2 + 7 = 9
//1.Simple approach using nested loops
const numbers = [2, 7, 11, 15];
const target = 9;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
            console.log(numbers[i], numbers[j]); //2,7
            console.log("Indexes:", i, j); //0,1
        }
    }
}
// 2. Optimized approach using Map
const numbers1 = [2, 11, 15,7,];
const target1 = 18;
const map1 = new Map();
for (let i = 0; i < numbers1.length; i++) {
    const complement1 = target1 - numbers1[i];
    if (map1.has(complement1)) {
        console.log(complement1, numbers1[i]);//11 7
        break;
    }
    map1.set(numbers1[i], i);
}
// 3. Return the indexes: A common interview version asks for indexes instead of the values.
const numbers2 = [2, 11, 15,7,];
const target2 = 18;
const map2 = new Map();
for (let i = 0; i < numbers2.length; i++) {
    const complement2 = target2 - numbers2[i];
    if (map2.has(complement2)) {
        console.log([map2.get(complement2), i]);//[ 0, 3 ]
        break;
    }
    map2.set(numbers2[i], i);//here storing value, index i.e 2 in 0th index, 11 in 1st index etc..
}
/*
---------
map.set(key, value);    // Store
map.has(key);           // Check whether key exists
map.get(key);           // Retrieve the value

Map(1) { 2 => 0 } Iteration 1
Iteration 1
i = 0
numbers1[i] = 2
complement1 = 9 - 2
             = 7
Now:

map1.has(7)

Map is currently empty:

Map = {}

So:

7 exists? → NO

Then we execute:

map1.set(2, 0);

Map becomes:

Map = {
    2 → 0
}

-----------
Map(2) { 2 => 0, 11 => 1 }
Iteration 2
i = 1
numbers1[i] = 11

complement1 = 9 - 11
             = -2

Check:

map1.has(-2)

Current Map:

Map = {
    2 → 0
}

So:

-2 exists? → NO

Store 11:

map1.set(11, 1);

Map becomes:

Map = {
    2  → 0,
    11 → 1
}
    ----------
Map(3) { 2 => 0, 11 => 1, 15 => 2 }
Iteration 3
i = 2
numbers1[i] = 15

complement1 = 9 - 15
             = -6

Check:

map1.has(-6)

Current Map:

Map = {
    2  → 0,
    11 → 1
}

So:

-6 exists? → NO

Store 15:

map1.set(15, 2);

Map becomes:

Map = {
    2  → 0,
    11 → 1,
    15 → 2
}
    ---------
2 7
Iteration 4 ⭐
i = 3
numbers1[i] = 7

complement1 = 9 - 7
             = 2

Now check:

map1.has(2)

Current Map:

Map = {
    2  → 0,
    11 → 1,
    15 → 2
}

We find:

2 exists? → YES ✅

Therefore:

console.log(complement1, numbers1[i]);

becomes:

console.log(2, 7);
Output
2 7

Because:

2 + 7 = 9

*/
