/*
o/p:
admin
user
manager
*/

// Sample users, including repeated IDs and roles.
const users = [
    { id: 101, role: "admin" },
    { id: 102, role: "user" },
    { id: 103, role: "admin" },
    { id: 104, role: "manager" },
    { id: 105, role: "user" },
     { id: 105, role: "admin" }
];

// Collects the unique user IDs from the list.
function uniqueUserRole(users){
    let unique=new Set()
    for(let user of users){
        unique.add(user.id) //here if we replace user.role then we can get unique roles
    }
    return unique
}
// Collects the unique roles and duplicate roles.
function duplicateUserIds(users) {
    const unique = new Set();
    const duplicates = new Set();
    for (let user of users) {
        if (unique.has(user.id)) {
            duplicates.add(user.id);
        } else {
            unique.add(user.id);
        }
    }
    return {
        unique,
        duplicates
    }
}
// Display unique & duplicate-roles using function
console.log(duplicateUserIds(users));
// Display unique roles using function
console.log(uniqueUserRole(users))
// unique id using Set/shortcut
console.log([...new Set(users.map(user=>user.id))])
// unique roles using Set/shortcut
console.log([...new Set(users.map(user=>user.role))])

// ============

// const users = [
//     { id: 101, role: "admin" },
//     { id: 102, role: "user" },
//     { id: 103, role: "admin" },
//     { id: 104, role: "manager" },
//     { id: 105, role: "user" }
// ];
// function getUniqueRoles(users) {
//     const roles = new Set();
//     for (const user of users) {
//         roles.add(user.role);
//     }
//     return [...roles];
// }
// console.log(getUniqueRoles(users));
// // o/p [ 'admin', 'user', 'manager' ]

// console.log("----------Shorter version-------------")
// const uniqueRoles = [...new Set(users.map(user => user.role))];
// console.log(uniqueRoles);
/*
Interview explanation

"I extract the role from each object, add it to a Set to automatically 
eliminate duplicates, and convert the Set back to an array."
*/