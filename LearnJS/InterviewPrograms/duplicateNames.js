// Print duplicate names with their count   --using Object
const users = [
    { name: 'John', age: 30 },
    { name: 'David', age: 25 },
    { name: 'John', age: 35 }
];
const obj = {};
for (const user of users) {
    obj[user.name] = (obj[user.name] || 0) + 1
}
const duplicateNames = [];
for (const name in obj) {
    if (obj[name] > 1) {
        duplicateNames.push(name);
    }
}
console.log(duplicateNames);

// Print duplicate names with their count   --using Map
/*
const users = [
    { name: 'John', age: 30 },
    { name: 'David', age: 25 },
    { name: 'John', age: 35 }
];
const nameCount = new Map();
for (const user of users) {
    // nameCount.set(user.name,(nameCount.get(user.name) || 0) + 1); 
    // If the name already exists in the Map, get its current count and add 1. Otherwise, start with 0 and add 1.
    if (nameCount.has(user.name)) {
        nameCount.set(
            user.name,
            nameCount.get(user.name) + 1
        );
    } else {
        nameCount.set(user.name, 1);
    }
}
const duplicateNames = [];
for (const [name, count] of nameCount) {//destructuring
    if (count > 1) {
        duplicateNames.push(name);
    }
}
console.log(duplicateNames);
*/
/*
I iterate through each user and extract the name. I use a Map where the name 
is the key and its occurrence count is the value. I retrieve the existing count 
using Map.get(). If the name doesn't exist, I use zero as the initial count. 
Then I increment the count and update the Map using Map.set()
*/