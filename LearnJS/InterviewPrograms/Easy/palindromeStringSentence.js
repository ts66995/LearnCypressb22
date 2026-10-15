//Palindrome --String
let str = "Aman, a plan, a canal, Panama"
str = str.toLowerCase().replace(/[^a-z0-9]/g, '')//Remove characters that are not lowercase letters or digits. Easy trick: When ^ is the first character inside [], think NOT. When it appears outside [] at the beginning of the regex, think START.
function isPolindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
if (isPolindrome(str)) {
  console.log("polindrom")
} else {
  console.log("not polindrom")
}

(OR)
let revStr = ''
function revString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}
if (str == revString(str)) {
  console.log("polindrom")
} else {
  console.log("not polindrom")
}

/*
str.replace(/[^a-z0-9]/g, '')
Match anything that is not a lowercase letter (a-z)
or a digit (0-9)

It matches: 
Spaces " " Commas , Dots . Exclamation marks !
@ # % & ( ) etc.

/[^a-z]/ → Matches anything other than a lowercase letter.
/^[a-z]/ → Matches a lowercase letter at the beginning of the string.
The symbol ^ means NOT or NOT within the specified character set because it appears immediately after the opening square bracket [.

^ Has Two Meanings in Regex

The meaning of ^ depends on its position.

Case 1: ^ inside square brackets at the beginning

/[^a-z]/

Means NOT a lowercase letter.

console.log("hello123".replace(/[^a-z]/g, ''));

Output:

hello

Here, digits are removed because they are not lowercase letters.

Case 2: ^ at the beginning of a regular expression, outside square brackets

/^hello/

Means the string must start with hello.

console.log(/^hello/.test("hello world"));

Output:

true
console.log(/^hello/.test("say hello"));

Output:

false
Remember This for Interviews
/[^a-z]/ → Matches anything other than a lowercase letter.
/^[a-z]/ → Matches a lowercase letter at the beginning of the string.
/[a-z]/ → Matches a lowercase letter anywhere in the string.

Easy trick: When ^ is the first character inside [], think NOT. When it appears outside [] at the beginning of the regex, think START.
*/