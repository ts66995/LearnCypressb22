// Write a program for reverse each word in the string, but keep the word order same
// str = "I love JavaScript"
//output = "I evol tpircSavaJ"
//ReverseStringWords.js
let str = "I love JavaScript";
function revWords(str) {
  let revStr1 = ''
  let revWords = ''
  let arrWords = str.split(' ')
  for (ele of arrWords) {
    revWords = revString(ele)
    revStr1 += ' ' + revWords
  }
  return revStr1
}
console.log(revWords(str))
function revString(str) {
  let revStr = ''
  for (i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}

//OR
let strWordRev = "welcome to our Automation book";
let output = strWordRev
  .split(" ")                    // Step 1: split into words
  .map(word => 
    word.split("")               // Step 2: split word into characters
        .reverse()               // Step 3: reverse characters
        .join("")                // Step 4: join back
  )
  .join(" ");                    // Step 5: join words back
console.log(output);//emoclew ot ruo noitamotuA koob