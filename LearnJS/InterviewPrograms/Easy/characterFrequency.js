//character frequency
// const arr = [1, 2, 3, 4, 5, 1, 2, 6];
// let arr = "Automation"
// arr=arr.toLowerCase()
const arr = ["Passed", "Failed", "Passed", "Skipped", "Passed", "Failed"];
const obj = {};
// Count occurrences
for (const ele of arr) {
  obj[ele] = (obj[ele] || 0) + 1
  /*if (obj[ele]) {
    obj[ele] = obj[ele] + 1;
  } else {
    obj[ele] = 1;
  }*/
}

for (let ele in obj) {
  console.log(ele + " " + obj[ele])
}