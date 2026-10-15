const users = [
    { id: 101, name: "John" },
    { id: 102, name: "David" },
    { id: 103, name: "Mike" },
    { id: 101, name: "Sam" },
    { id: 102, name: "Peter" }
];
function findDuplicateIds(users) {
    const seen = new Set();
    const duplicates = new Set();

    for (const user of users) {

        if (seen.has(user.id)) {
            duplicates.add(user.id);
        } else {
            seen.add(user.id);
        }
    }
    // console.log(seen);
    return [...duplicates];
}

console.log(findDuplicateIds(users));

/*
Output
[101, 102]
Why use Set?

Because a Set stores only unique values.

seen
101
102
103

When 101 appears again:

seen.has(101)

returns true.

So we know it is a duplicate.

Automation scenario

Very useful when validating:

"An API should never return duplicate customer IDs."
*/