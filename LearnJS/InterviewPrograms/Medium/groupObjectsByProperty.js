/*Problem:
Given an array of objects:
const employees = [
    { name: "John", department: "QA" },
    { name: "David", department: "Dev" },
    { name: "Mike", department: "QA" },
    { name: "Sarah", department: "Dev" },
    { name: "Tom", department: "HR" }
];

Group the employees based on the department property.
Expected Output
{
    QA: [
        { name: "John", department: "QA" },
        { name: "Mike", department: "QA" }
    ],
    Dev: [
        { name: "David", department: "Dev" },
        { name: "Sarah", department: "Dev" }
    ],
    HR: [
        { name: "Tom", department: "HR" }
    ]
}
*/

// 1: Using reduce() — Recommended
const employees = [
    { name: "John", department: "QA" },
    { name: "David", department: "Dev" },
    { name: "Mike", department: "QA" },
    { name: "Sarah", department: "Dev" },
    { name: "Tom", department: "HR" }
];

const groupedEmployees = employees.reduce((result, employee) => {
    const department = employee.department;
    if (!result[department]) {
        result[department] = [];
    }
    result[department].push(employee);
    return result;
}, {});
console.log(groupedEmployees);
/*
How it works 
Initially: result = {}
First employee:{ name: "John", department: "QA" }
QA doesn't exist: result["QA"] = [];
Then: result["QA"].push(employee);
Now:
{
    QA: [
        { name: "John", department: "QA" }
    ]
}
When Mike comes:{ name: "Mike", department: "QA" }
QA already exists, so we simply push:result["QA"].push(employee);
*/
// Why would you use reduce() here?", answer:
// "reduce() is useful because I'm transforming an array into a single grouped object. Each object's 
// property becomes a key in the result, and the corresponding objects are collected into an array

// 2: Using Object.groupBy
const employees1 = [
    { name: "John", department: "QA" },
    { name: "David", department: "Dev" },
    { name: "Mike", department: "QA" },
    { name: "Sarah", department: "Dev" },
    { name: "Tom", department: "HR" }
];
const groupedEmployees1 = Object.groupBy(
    employees1,
    employee1 => employee1.department
);
console.log(JSON.stringify(groupedEmployees, null, 2));
// console.log(groupedEmployees1);//Object.groupBy() returns an object with a null prototype, 
// so Node.js may display [Object: null prototype]. 
// This is expected behavior and does not indicate an error.
// Object.groupBy() is a modern JavaScript method used to group elements 
// of an array based on a particular property or condition.
//The callback determines which group each element belongs to.
// Take each employee and use their department as the group name.