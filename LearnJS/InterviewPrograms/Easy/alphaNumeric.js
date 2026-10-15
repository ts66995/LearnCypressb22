
console.log("----------isAlphaNumeric with characters---------");
function isAlphaNumeric(input) {
    if (input.length === 0) {
        return false;
    }
    for (const char of input) {
        const isUppercase = char >= 'A' && char <= 'Z';
        const isLowercase = char >= 'a' && char <= 'z';
        const isDigit = char >= '0' && char <= '9';

        if (!isUppercase && !isLowercase && !isDigit) {
            return false;
        }
    }
    return true;
}
console.log(isAlphaNumeric("Test123"));   // true
console.log(isAlphaNumeric("Hello@123")); // false
console.log(isAlphaNumeric("Hello 123")); // false

console.log("----------isAlphaNumeric charCodeAt---------");
function isAlphaNumeric1(input) {
    if (input.length === 0) {
        return false;
    }
    for (const char of input) {
        const code = char.charCodeAt(0)//We use charCodeAt(0) because each char variable contains one character during the loop.There is no character at index 1, so charCodeAt(1) returns NaN (Not a Number).
        const isUppercase = code >= 65 && code <= 90;   // A-Z
        const isLowercase = code >= 97 && code <= 122;  // a-z
        const isDigit = code >= 48 && code <= 57;       // 0-9
        if (!isUppercase && !isLowercase && !isDigit) {
            return false;
        }
    }
    return true;
}
console.log(isAlphaNumeric1("Test123"));   // true
console.log(isAlphaNumeric1("Test@123"));  // false
console.log(isAlphaNumeric1("12345"));     // true
console.log(isAlphaNumeric1("Test"));      // true
console.log(isAlphaNumeric1("Test 123"));  // false
console.log(isAlphaNumeric1(""));           // false

console.log("----------isAlphaNumericRegExp---------"); 
function isAlphaNumericRegExp(input) {
    return /^[a-zA-Z0-9]+$/.test(input);
}
console.log(isAlphaNumericRegExp("Test123"));   // true
console.log(isAlphaNumericRegExp("Test@123"));  // false
console.log(isAlphaNumericRegExp("12345"));     // true
console.log(isAlphaNumericRegExp("Test"));      // true
console.log(isAlphaNumericRegExp("Test 123"));  // false
console.log(isAlphaNumericRegExp(""));           // false

/*
^          → Start of string
[a-zA-Z0-9] → Only letters and digits
+          → One or more characters
$          → End of string
^[a-zA-Z0-9]+$/ means the entire input must contain only letters and numbers.
test() returns a boolean."

Interview question: Why does JavaScript use charCodeAt(0) instead of charCodeAt(1)?
Interview answer:
charCodeAt(index) returns the UTF-16 code unit at the specified index. JavaScript uses zero-based indexing, so index 0 represents the first character.
In this program, the for...of loop processes the input one character at a time. Therefore, each char variable contains an individual character, and charCodeAt(0) retrieves its character code.
We then compare that code against numeric ranges to determine whether the character is an uppercase letter, lowercase letter, or digit.
*/