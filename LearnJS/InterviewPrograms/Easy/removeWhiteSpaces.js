//RemoveWhiteSpaces.js
str = " Hello, world! "
let strWithoutSpace = str.replace(/\s/g, '')
console.log(strWithoutSpace) //Hello,world!

/*
trings are immutable

This is the concept you should remember for interviews.

JavaScript strings are immutable.

That means you cannot directly modify the existing string.

For example:

let str = "Hello";

str[0] = "Y";

console.log(str);

Output:

Hello

The string wasn't changed.

Instead, methods such as replace(), toUpperCase(), toLowerCase(), trim(), etc. return a new string.

For example:

let str = "Hello";

let result = str.toUpperCase();

console.log(str);
console.log(result);

Output:

Hello
HELLO

So:

str
 ↓
"Hello"

result
 ↓
"HELLO"

So conceptually:

let str = " Hello ";

let temp = str.replace(/\s/g, '');

str = temp;

This is roughly what is happening conceptually.
A better demonstration

Try this:

let str = " Hello, world! ";

let str1 = str.replace(/\s/g, '');

console.log("str  :", str);
console.log("str1 :", str1);

Output:

str  :  Hello, world!
str1 : Hello,world!

Here you can clearly see that str wasn't changed.
*/