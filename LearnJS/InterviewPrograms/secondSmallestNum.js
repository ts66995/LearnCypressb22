let arr = [10, 25, 8, 45, 30, 45, 15];
let smallest = Infinity;
let secondSmallest = Infinity;
for (let num of arr) {
    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } 
    else if (num > smallest && num < secondSmallest) {
        secondSmallest = num;
    }
}
console.log("Smallest number:", smallest);//8
console.log("Second smallest number:", secondSmallest);//10