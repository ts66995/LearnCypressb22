// Problem: Convert a nested array into a single-level array.
// Example: const arr = [1, [2, 3], [4, [5, 6]]];
// Expected output: [1, 2, 3, 4, 5, 6]
// 1. Using flat() ⭐ The easiest approach:
const arr = [1, [2, 3], [4, [5, 6]]];
const result = arr.flat(Infinity);
console.log(result);
Output: [1, 2, 3, 4, 5, 6]
// Why Infinity?
// arr.flat(1): flattens only one level.
// arr.flat(2): flattens two levels.
// arr.flat(Infinity): flattens all levels, regardless of how deeply nested the array is.
// 2. Using Recursion ⭐ Interview Approach
const arr1 = [1, [2, 3], [4, [5, 6]]];
function flatten(arr1,flatArr=[]) {
    for (let element of arr1) {
        if (Array.isArray(element)) {
            flatten(element,flatArr);
        } else {
            flatArr.push(element);
        }
    }
    return flatArr
}
// flatten(arr1);
console.log(flatten(arr1)); //o/p: [1, 2, 3, 4, 5, 6]
//Here, every recursive call receives the same flatArr reference.
// How recursion works
// Initially: [1, [2, 3], [4, [5, 6]]]
// We process: 1  It's not an array, so: result.push(1);
// Next: [2, 3]  It's an array: if (Array.isArray(element)) 
// So we call: flatten([2, 3]);
// Then: 
// 2 → result
// 3 → result
// Next:
// [4, [5, 6]]
// Again recursion happens:
// 4 → result
// [5, 6] → recursion
// 5 → result
// 6 → result

// Finally:
// [1, 2, 3, 4, 5, 6]