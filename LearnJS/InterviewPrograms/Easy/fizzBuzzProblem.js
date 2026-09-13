//FizzBuzzProblem.js
/*Write a JavaScript program to print numbers from 1 to 100 with the following conditions:
If the number is divisible by 3, print "Fizz".
If the number is divisible by 5, print "Buzz".
If the number is divisible by both 3 and 5, print "FizzBuzz".
Otherwise, print the number itself.
*/
let num = 100
for (i = 1; i <= num; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz")
  } else if (i % 3 == 0) {
    console.log("fizz")
  } else if (i % 5 == 0) {
    console.log("buzz")
  } else {
    console.log(i)
  }
}