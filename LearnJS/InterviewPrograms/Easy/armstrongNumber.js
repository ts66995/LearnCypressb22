//ArmstrongNumber.js
let num = 153
console.log(isArmNum(num))
function isArmNum(num) {
  let digits = num.toString().split('')
  let noOfDigits = digits.length
  let sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), noOfDigits), 0)
  /*Syntax: 
   array.reduce((accumulator, currentValue) => {
       return something;
   }, initialValue);*/
  return num == sum
}


