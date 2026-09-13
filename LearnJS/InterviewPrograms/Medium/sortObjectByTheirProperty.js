let employees = [
    { name: "John", age: 35 },
    { name: "David", age: 25 },
    { name: "Sreelatha", age: 30 },
    { name: "Priya", age: 28 }
];
// Sortby Age
employees.sort((a, b) => a.age - b.age);
console.log(employees);
/* o/p:
[
  { name: 'David', age: 25 },
  { name: 'Priya', age: 28 },
  { name: 'Sreelatha', age: 30 },
  { name: 'John', age: 35 }
]*/
//Sort by Name
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);
/*o/p
localeCompare() compares two strings according to language-sensitive alphabetical 
ordering and returns a negative, zero, or positive value that can be used by sort()
[
    { name: "David", age: 25 },
    { name: "John", age: 35 },
    { name: "Priya", age: 28 },
    { name: "Sreelatha", age: 30 }
]
    */
let employees1 = [
    { name: "John", salary: 80000 },
    { name: "David", salary: 50000 },
    { name: "Sreelatha", salary: 90000 },
    { name: "Priya", salary: 70000 }
];
// Sort by Salary
employees1.sort((a, b) => a.salary - b.salary);
console.log(employees1);
/*o/p
[
    { name: "David", salary: 50000 },
    { name: "Priya", salary: 70000 },
    { name: "John", salary: 80000 },
    { name: "Sreelatha", salary: 90000 }
]
    */
   let names = ["Sreelatha", "David", "John", "Priya"];
names.sort((a, b) => a.localeCompare(b));
console.log("Ascending : "+names);
names.sort((a, b) => b.localeCompare(a));
console.log("Descending : "+names);
/*o/p
Ascending : David,John,Priya,Sreelatha
Descending : Sreelatha,Priya,John,David
*/

/*
Interview Pattern ⭐
Remember: 
// Number property - ascending
array.sort((a, b) => a.property - b.property);
// Number property - descending
array.sort((a, b) => b.property - a.property);
// String property - ascending
array.sort((a, b) => a.property.localeCompare(b.property));
*/
/*
localeCompare() is a JavaScript string method used to compare two strings alphabetically.
It is especially useful when sorting an array of objects by a string property, such as name, city, or department.
Basic example
let a = "David";
let b = "John";
console.log(a.localeCompare(b));
Result:-1
This means David comes before John alphabetically.
What does the result mean?
a.localeCompare(b)
returns:
Result	Meaning
Negative =>	a comes before b
0  =>	a and b are equivalent for comparison
Positive =>	a comes after b
For example:
console.log("Apple".localeCompare("Banana"));  // negative
console.log("Apple".localeCompare("Apple"));   // 0
console.log("Banana".localeCompare("Apple"));  // positive

For numbers:
arr.sort((a, b) => a - b);
because subtraction works with numbers.
For strings:names.sort((a, b) => a.localeCompare(b));
because strings cannot meaningfully be subtracted.
So remember:
Numbers → a - b
Strings → a.localeCompare(b)
*/