let arr = "automation";
// let arr = "aabb";
let obj = {};
// Count occurrences
for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1
}
// Find first non-repeated character
let found = false;
for (let ele of arr) {
    if (obj[ele] === 1) {
        console.log("First non-repeated character: " + ele);
        found = true;
        break;
    }
}

// If no non-repeated character is found
if (!found) {
    // console.log("There is no non-repeated character.");
    console.log("all are repeated character.");
}

