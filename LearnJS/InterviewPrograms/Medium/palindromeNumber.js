//Palindrome --Number
let num = 121
function isPolindrom(num) {
  let actNum = num
  let revNum = 0;
  while (num > 0) {
    let lastDigit = num % 10
    revNum = (revNum * 10) + lastDigit
    num = Math.floor(num / 10) //num=121/10=>num=Math.floor(12.1)=>num=12 for 2nd iteration
  }
  return actNum === revNum
}
console.log(isPolindrom(num)) //true
/* //Math.floor() returns the largest integer less than or equal to the given number.
In simple words, it removes the decimal part.
console.log(Math.floor(12.9));   //12
console.log(Math.floor(45.8));   //45
console.log(Math.floor(7.1));    //7
console.log(Math.floor(100));    //100
console.log(Math.floor(9/10));   //0
*/