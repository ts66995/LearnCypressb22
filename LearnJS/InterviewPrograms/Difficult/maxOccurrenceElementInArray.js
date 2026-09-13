/*
This program finds the element(s) that occur the maximum number of times in an array (or string) and prints
The frequency of each element. The highest frequency.
The element(s) having that highest frequency.
*/
//o/p: [ 'hi', 'hello' ]
// let arr = ['Hi', 'hello', 'x', 'A', 'Hi', 'Hi', 'hello', 'Hello'];
// let arr=[2,3,1,2,4,5,7,3,1,2,3]
let arr="Hello World Welcome to the javascript"
let obj = {}
let maxOccurances = 0
let maxString = []
//adding array elements as object's key and no.of times occurred the
//element in array as object's value
for (ele of arr) {
   // Convert only strings to lowercase.It will work for both strings and numbers
  if (typeof ele === "string") {
    ele = ele.toLowerCase();
  }
  // Ignore spaces
  if (ele === " ") {
    continue;
  }
  // Count occurrences
  obj[ele] = (obj[ele] || 0) + 1
  // Keep track of maximum frequency
    maxOccurances = Math.max(maxOccurances, obj[ele]);
}
console.log(obj)
/*
{ hi: 3, hello: 3, x: 1, a: 1 }
{ '1': 2, '2': 3, '3': 3, '4': 1, '5': 1, '7': 1 }
{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
*/
// //findinding the maximum number of times the object element appeared
// for (ele in obj) {
//   if (obj[ele]> maxOccurances) {
//     maxOccurances = obj[ele]//obj[ele] will return the value of ele i.e 3 for "Hi" and hello
    
//   }
// }
//adding the maximum number of times appeared object element to the maxString[] array
for (ele in obj) {
  if (maxOccurances == obj[ele]) {
    maxString.push(ele)
  }
}
console.log(maxOccurances)//3 --3-3
console.log(maxString) //[ 'Hi', 'hello' ] --[ '2', '3' ] --[ 'l' ]
/*
(obj[ele] || 0) This is the most important part.
The || operator means OR.
obj[ele] || 0 means:If obj[ele] has a truthy value, use it. Otherwise, use 0.
First occurrence
Suppose:
obj = {};
ele = "apple";
Then:obj[ele] is: undefined
So: obj[ele] || 0 becomes:undefined || 0
Result:0
Then: 0 + 1 gives:1
Therefore: obj[ele] = 1;
Now: obj = {
  apple: 1
};
Second occurrence
Now "apple" appears again.
This time: obj[ele] is: 1
So: obj[ele] || 0 becomes: 1 || 0
Since 1 is truthy, the result is: 1
Then:1 + 1 gives: 2
So: obj[ele] = 2;
*/
