//Reversing the string with Built-in methods
function revStrBuiltin(str) {
  var revStr1 = str.split('').reverse().join('')
  return revStr1
}
console.log(revStrBuiltin("Sreelatha Tharigonda"))
//o/p:adnogirahT ahtaleerS


//OR

let str = "Sreelatha Tharigonda"
let revStr = ''
function revString(str) {
  for (i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}

  console.log(revString(str))
