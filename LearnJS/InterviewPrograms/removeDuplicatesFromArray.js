let arr = [10, 20, 10, 30, 20, 40, 30]; //o/p: [10, 20, 30, 40]
let unique = [];
for (let num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}
console.log(unique)

// (OR)

let unique1 = [...new Set(arr)];
console.log(unique)