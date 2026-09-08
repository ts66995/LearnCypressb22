
console.log("-----adding the element push and unshift ------------");

var arr = [1,3,4,5,6]

var arr2 = ["Raju", 30, "bangalore",  undefined]


console.log(arr2[7])

console.log(arr2.length)

console.log(arr2[2])

console.log(arr2[arr2.length-2])

// adding the element push and unshift 
//push - to add element at the end of the array
//unshift - to add element at the biginning of the array

var arr3 = ["Raju", 30, "bangalore"]

arr3.push("Mahesh")

arr3.unshift("Shiva")

console.log(arr3)

console.log("-----remove the element pop and shift ------------");
// remove the element pop and shift 
//pop - to remove 1 element at the end of the array
//shift - to remove 1 element at the biginning of the array


var arr4  = ["Shiva" ,"Raju", 30, "bangalore", "Mahesh"]

arr4.pop()
arr4.shift()

console.log(arr4)

//sort() - sort elements in acending order 

arr5 = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

arr6 = arr5.sort()

console.log(arr6)

arr7 = [4,9,6,7,2,1]

arr8 = arr7.sort()
console.log(arr8)

console.log(arr8.reverse())

arr9 = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

arr9[1]= "girish"

console.log(arr9)

console.log("-----includes - to check whether element is present or not ------------");
//includes - to check whether element is present or not 

console.log(arr9.includes("Raju"))

if(arr9.includes("Rekha")){

    console.log("element is present")
}
else {

    console.log("element is not present")
}

console.log(arr9.indexOf("pradeep"))


getelements = [3,5,6,7,8]

sortedarr = getelements.sort().reverse()

getelements === sortedarr 

//concat
console.log("-----concat ------------");
getelements1 = [3,5,6,7,8]

strarr = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

finalarr = getelements1.concat(strarr)

console.log(finalarr)

strarr = [3,5,6,7,8,"shiva", "Arun", "pradeep", "mahesh", "Raju"]

console.log("-----slice ------------");

// arr10 = strarr.slice(3)

// console.log(arr10)

console.log("-----splice ------------");

arr11 = strarr.splice(3,5)


console.log(arr11)


newarr = ["shiva", "Arun", "pradeep", "mahesh", "Raju"]

str = newarr.join("")

console.log(str)

str2 = "Thimma raju"

arr12 = str2.split("")

console.log(arr12)

//======================================================
console.log("-----write a JS program to reverse a string ------------");

//write a JS program to reverse a string 

str = "Shivakumar Is from Bangalore"

revstr = str.split("").reverse().join("")

console.log(revstr)

//wap to check a string is palindrome or not 
console.log("-----wap to check a string is palindrome or not  ------------");

str = "Mahesh"
revstr = str.split("").reverse().join("")


if(str == revstr){

    console.log("Given string is a palindrome")
}
else{

    console.log("Given string is not a palindrome")
}

//wap to check strings are anagram or not
console.log("-----wap to check strings are anagram or not  ------------");
str1 = "girish" 

str2 = "rajesh"

str3 = str1.split("").sort().join("")
str4 = str2.split("").sort().join("")

if(str3 == str4){

    console.log("Anagrams")
}
else{

    console.log("not Anagrams")
}

console.log("-----Write a program for reverse each word in the string, but keep the word order same ------------");
// Write a program for reverse each word in the string, but keep the word order same
// str = "Shivakumar Is from Bangalore"
//output = "ramukavihS sI morf erolagnaB"

let strWordRev = "Shivakumar Is from Bangalore";

let output = strWordRev
  .split(" ")                    // Step 1: split into words
  .map(word => 
    word.split("")               // Step 2: split word into characters
        .reverse()               // Step 3: reverse characters
        .join("")                // Step 4: join back
  )
  .join(" ");                    // Step 5: join words back

console.log(output);

console.log("----Count how many times each character appears in a string.-------------");
console.log("Method 1: Using Object-----");

let strChars = "banana";

let count = {};

for (let i = 0; i < strChars.length; i++) {
  let char = strChars[i];

  if (count[char]) {
    count[char]++;   // increment if exists
  } else {
    count[char] = 1; // initialize
  }
}

console.log(count); //{ b: 1, a: 3, n: 2 }
console.log("Method 2: Using for...of (Clean Code)");
let strChars2 = "banana";
let count2 = {};

for (let char of strChars2) {
  count2[char] = (count2[char] || 0) + 1;
}

console.log(count2);

console.log("Method 3: Ignore Spaces (Real-time scenario)");
let strChars3 = "hello world";
let count3 = {};

for (let char of strChars3) {
  if (char === " ") continue;

  count3[char] = (count3[char] || 0) + 1;
}

console.log(count3);

console.log("Method 4: Case-Insensitive");
let strChars4 = "Banana".toLowerCase();
let count4 = {};

for (let char of strChars4) {
  count4[char] = (count4[char] || 0) + 1;
}

console.log(count4);
