//DuplicatesFromArrayObjectsRemove.js
// o/p: Unique IDs as Array: [ 1, 2, 3, 4 ]
// Duplicate IDs as Array: [ 1, 2 ]
let products = [
  { id: 1, name: "dell laptop", price: 60000 },
  { id: 2, name: "lenova laptop", price: 70000 },
  { id: 3, name: "Real Me", price: 18000 },
  { id: 4, name: "Mi TV", price: 20000 },
  { id: 1, name: "dell laptop", price: 60000 },
  { id: 2, name: "lenova laptop", price: 70000 },
  { id: 2, name: "lenova laptop", price: 70000 }
]
let uniqueIds = new Set();
let duplicateIds = new Set();
let uniqueProducts = [];
let duplicateProducts = [];

for (let product of products) {
  if (uniqueIds.has(product.id)) {
    if (!duplicateIds.has(product.id)) {
      duplicateIds.add(product.id);
      duplicateProducts.push(product);
    }
  } else {
    uniqueIds.add(product.id);
    uniqueProducts.push(product);
  }
}
console.log("Unique IDs as Array:", [...uniqueIds]);//[ 1, 2, 3, 4 ]
console.log("Unique IDs as Set:", uniqueIds); //Set(4) { 1, 2, 3, 4 }
console.log("Unique Products:", uniqueProducts);
console.log("Duplicate IDs as Array:", [...duplicateIds]);
console.log("Duplicate Products as Set:", duplicateProducts);
/*
Unique IDs as Array: [ 1, 2, 3, 4 ]
Unique IDs as Set: Set(4) { 1, 2, 3, 4 }
Unique Products: [
  { id: 1, name: 'dell laptop', price: 60000 },
  { id: 2, name: 'lenova laptop', price: 70000 },
  { id: 3, name: 'Real Me', price: 18000 },
  { id: 4, name: 'Mi TV', price: 20000 }
]
Duplicate IDs as Array: [ 1, 2 ]
Duplicate Products as Set: [
  { id: 1, name: 'dell laptop', price: 60000 },
  { id: 2, name: 'lenova laptop', price: 70000 }
]

*/


/*
If the interviewer asks, "Why are you storing product.id in the Set instead of the whole object?", you can answer:
"Set compares objects by their reference, not by their contents. Even if two objects have the same id, name, and price, they are different object instances in memory, so Set treats them as different values. By storing the id (a primitive value), we can correctly identify duplicates based on the product ID."
*/
// let unIds = []
// let dupIds = []
// let dupProducts = [];

// let unPrds = products.filter((p) => {
//   let flag = unIds.includes(p.id)
//   if (flag) {
//     dupIds.push(p.id)
//     dupProducts.push(p);
//     return false
//   } else {
//     unIds.push(p.id)
//     return true
//   }
// })

// console.log("Unique IDs:", unIds);
// console.log("Unique Products:", unPrds);
// console.log("Duplicate IDs:", dupIds);
// console.log("Duplicate Products:", dupProducts);

//o/p: [ 1, 2, 3, 4]
/*
Unique IDs: [ 1, 2, 3, 4 ]
Unique Products: [
  { id: 1, name: 'dell laptop', price: 60000 },
  { id: 2, name: 'lenova laptop', price: 70000 },
  { id: 3, name: 'Real Me', price: 18000 },
  { id: 4, name: 'Mi TV', price: 20000 }
]
Duplicate IDs: [ 1, 2 ]
Duplicate Products: [
  { id: 1, name: 'dell laptop', price: 60000 },
  { id: 2, name: 'lenova laptop', price: 70000 }
]
*/