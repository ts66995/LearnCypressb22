let arr = "Automation";

let found = false;
let obj = {};

for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
}
// Last non-repeated character
for (let i = arr.length - 1; i >= 0; i--) {
    if (obj[arr[i]] === 1) {
        console.log("Last non-repeated character: " +arr[i]);
        found = true;
        break;
    }
}

if (!found) {
    console.log("no unique character");
}