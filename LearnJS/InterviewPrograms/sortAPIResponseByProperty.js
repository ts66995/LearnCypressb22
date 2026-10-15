const users = [
    { id: 103, name: "Mike" },
    { id: 101, name: "John" },
    { id: 102, name: "David" }
];
//Sort by id.
const sortedUsers = [...users].sort((a, b) => a.id - b.id);
console.log(sortedUsers);

//Sort by id.
const sortedUsersByName=users.sort((a,b)=>a.name.localeCompare(b.name))
console.log(sortedUsersByName);
/*
o/p:
[
    { id: 101, name: "John" },
    { id: 102, name: "David" },
    { id: 103, name: "Mike" }
]

Why use [...users]?

Because:

users.sort(...)

modifies the original array.

Using:

[...users].sort(...)

creates a shallow copy first.


);
    */

// Sort by name
const sortedUsers1 = [...users].sort((a, b) =>a.name.localeCompare(b.name))
