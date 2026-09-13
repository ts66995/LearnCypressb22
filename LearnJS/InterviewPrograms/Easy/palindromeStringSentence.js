//Palindrome --String
let str = "Aman, a plan, a canal, Panama"
str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
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
*/