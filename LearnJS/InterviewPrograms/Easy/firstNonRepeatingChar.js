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
// Last non-repeated character
/* for (let i = arr.length - 1; i >= 0; i--) {
     if (obj[arr[i]] === 1) {
         console.log("Last non-repeated character: " + arr[i]);*/
                found = true;
                break;
            }
        }

        // If no non-repeated character is found
        if (!found) {
            // console.log("There is no non-repeated character.");
            console.log("all are repeated character.");
        }

