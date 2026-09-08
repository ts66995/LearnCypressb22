let arr = [1, 2, 3, 4, 5, 1, 2, 6];
// let arr = "Automation"
let obj = {};
// Count occurrences
for (let ele of arr) {
  obj[ele] = (obj[ele] || 0) + 1
}
let unique = [];
let duplicates = [];
// Find unique and duplicate elements
for (let ele in obj) {
  if (obj[ele] === 1) {
    //  unique.push(ele);//for characters
    unique.push(Number(ele)); //for Numbers
  } else {
    // duplicates.push(ele);//for characters
    duplicates.push(Number(ele));//for Numbers
  }
}
console.log("Count:", obj);//{ '1': 2, '2': 2, '3': 1, '4': 1, '5': 1, '6': 1 }
console.log("Unique:", unique);//[ 3, 4, 5, 6 ]
console.log("Duplicates:", duplicates);//[ 1, 2 ]