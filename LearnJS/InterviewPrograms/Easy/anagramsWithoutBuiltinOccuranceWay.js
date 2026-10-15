function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  // obj characters in first string
  for (let ele of str1) {
    obj[ele] = (obj[ele] || 0) + 1;
    // if (obj[ele]) {//1st time of the character it will return undefined and obj[char] will 
    //                 //be assigned to 1 next time onwards counter will be incremented by 1
    //   obj[ele] = obj[ele] + 1;
    // } else {
    //   obj[ele] = 1;
    // }
  }//o/p: {a: 1, d: 1, b: 2, c: 2}
  // Consume characters from second string
  for (let ele of str2) {
    // Character doesn't exist or count is already zero
    if (!obj[ele]) {
      return false;
    }
    obj[ele]--;//o/p:  d → 1 → 0   a → 1 → 0   c → 2 → 1 → 0 b → 2 → 1 → 0  
               //Everything reaches 0 then strings are Anagrams else not anagrams
  }
  return true;
}
console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("mary", "army")); // true
console.log(areAnagrams("acbbdc", "ccbbad")); // true

/*
alternate way
function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // Length check
    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};
    // Count characters from first string
    for (let char of str1) {
        if (count[char]) {
            count[char] = count[char] + 1;
        } else {
            count[char] = 1;
        }
    }

    // Check characters from second string
    for (let char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
     console.log(count)
    return true;
}
    */

// I first build a frequency map for the characters in the first string, then traverse the second string and decrement the corresponding counts; if a character is missing or its count is already zero, the strings are not anagrams."
// This approach is O(n) time and O(k) space, where k is the number of distinct characters.
/*
logical OR (||) operator
A||B=> If A is truthy, return A; otherwise, return B.
undefined || 0 => Since undefined is falsy, JavaScript returns the value on the right if.e 0
count['m'] = (count['m'] || 0) + 1; => count['m'] = (1 || 0) + 1;
Think of || as a fallback

This is the easiest way to remember it:

value || defaultValue

means:

"Give me value; if it doesn't have a truthy value, give me defaultValue."

Examples:

console.log(undefined || 0); // 0
console.log(null || 0);      // 0
console.log(false || 0);     // 0
console.log(0 || 0);         // 0
console.log(5 || 0);         // 5
console.log("Hello" || 0);   // Hello
Truthy and Falsy

JavaScript considers these values falsy:

false
0
""
null
undefined
NaN

Almost everything else is truthy.


*/

