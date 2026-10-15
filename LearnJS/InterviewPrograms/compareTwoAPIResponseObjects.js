const response1 = {
    id: 101,
    name: "John",
    role: "admin"
};
const response2 = {
    id: 101,
    name: "John",
    role: "admin"
};
// const response2 = {
//     id: 101,
//     name: "John",
//     role: "admin1"
// };
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(compareObjects(response1, response2));

/*
I first compare the number of properties. Then I iterate through the keys of the first object and compare corresponding values in the second object."

⚠️ This is a shallow comparison. It doesn't correctly compare nested objects.

For example:

{
    user: {
        name: "John"
    }
}

For nested JSON, we need a recursive/deep comparison.
*/