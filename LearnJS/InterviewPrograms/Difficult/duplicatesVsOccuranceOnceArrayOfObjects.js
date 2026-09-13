let products = [
  { id: 1, name: "dell laptop", price: 60000 },
  { id: 2, name: "lenova laptop", price: 70000 },
  { id: 3, name: "Real Me", price: 18000 },
  { id: 4, name: "Mi TV", price: 20000 },
  { id: 1, name: "dell laptop", price: 60000 },
  { id: 2, name: "lenova laptop", price: 70000 },
  { id: 2, name: "lenova laptop", price: 70000 }
];
let obj = {};
// Count IDs
for (let product of products) {
    obj[product.id]=(obj[product.id]||0)+1
}
let uniqueIds = [];
let duplicateIds = [];
let uniqueProducts = [];
let duplicateProducts = [];
let addedDuplicateIds = new Set();
for (let product of products) {
    // Unique
    if (obj[product.id] === 1) {
        uniqueIds.push(product.id);
        uniqueProducts.push(product);
    }
    // Duplicate
    else {
        if (!addedDuplicateIds.has(product.id)) {
            duplicateIds.push(product.id);
            duplicateProducts.push(product);
            addedDuplicateIds.add(product.id);
        }
    }
}
console.log("Unique IDs:", uniqueIds);
console.log("Duplicate IDs:", duplicateIds);
console.log("Unique Products:", uniqueProducts);
console.log("Duplicate Products:", duplicateProducts);
/*
output:
Unique IDs: [ 3, 4 ]
Duplicate IDs: [ 1, 2 ]
Unique Products: [
  { id: 3, name: 'Real Me', price: 18000 },
  { id: 4, name: 'Mi TV', price: 20000 }
]
Duplicate Products: [
  { id: 1, name: 'dell laptop', price: 60000 },
  { id: 2, name: 'lenova laptop', price: 70000 }
]
*/
