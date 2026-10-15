//Palindrome --String
// String to check for palindrome
const str = "madam";
// Returns true if the given value reads the same forward and backward
function isPalindrome(str) {
  // Compare characters from both ends toward the center
  for (let i = 0; i < str.length / 2; i++) {
    // Return false if matching characters are different
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  // All compared characters match
  return true;
}
// Display whether the string is a palindrome
if (isPalindrome(str)) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}

/*
I compare characters from both ends of the string. 
I start from index 0 and compare it with the last index 
using length - 1 - i. I continue this comparison only for 
half of the string because the other half is already covered 
by these comparisons. If any pair doesn't match, I immediately 
return false. If the loop completes without finding a mismatch, 
I return true. Therefore, the function determines whether 
the given string is a palindrome."
for (let i = 0; i < value.length / 2; i++) {
value.length = 5 (5 / 2 = 2.5)
So the loop runs for:
i = 0
i = 1
i = 2
But notice something important: because we only need to check the first half of the string, 
we don't actually need to compare every character.

if (value[i] !== value[value.length - 1 - i]) {
i = 0 then Left side:value[i] becomes: value[0] which is:m
Right side:value[value.length - 1 - i]
Substitute the values: value[5 - 1 - 0] =>value[4] which is: m
So we're comparing:m !== m That's: false. So it won't enter inside for loop. Therefore, we don't return false.Until both 
left and right side characters are matching it won't enter inside if block and won't return false. After completion of comparing 
finally it will return true.
When both the characters are not matching ex: hello h!==o that time it will enter in side if condition and returns false


String:  m  a  d  a  m
Index:   0  1  2  3  4

         ↑           ↑
        [0]         [4]

            ↑   ↑
           [1] [3]

               ↑
              [2]

              
| `i` | Left           | Right calculation | Right          | Comparison |
| --: | -------------- | ----------------- | -------------- | ---------- |
|   0 | `value[0]` = m | `5-1-0 = 4`       | `value[4]` = m | m = m      |
|   1 | `value[1]` = a | `5-1-1 = 3`       | `value[3]` = a | a = a      |
|   2 | `value[2]` = d | `5-1-2 = 2`       | `value[2]` = d | d = d      |

*/
//OR
let str1 = "Hello"
let revStr1=''
for(let i=str1.length-1;i>=0;i--){
    revStr1+=str1[i]
}

if(str1==revStr1){
    console.log("Polindrom")
}else{
     console.log("not Polindrom")
}