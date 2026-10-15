const expected = {
    id: 101,
    name: "John",
    role: "admin"
};
const actual = {
    id: 101,
    name: "John",
    role: "admin"
};

function compareJSON(expected, actual) {
    return JSON.stringify(expected) === JSON.stringify(actual);
}

console.log(compareJSON(expected, actual));

//o/p: true

true
/*
But there is an important interview limitation.

This:

JSON.stringify(expected) === JSON.stringify(actual)

can fail if the property order is different.

For example:

const expected = {
    id: 101,
    name: "John"
};

const actual = {
    name: "John",
    id: 101
};

The objects contain the same data, but their property order can produce different JSON strings.

Therefore, for a senior automation interview, don't simply say JSON.stringify() is a complete deep-comparison solution.
*/

// Deep Compare JSON Objects
function deepEqual(obj1, obj2) {

    if (obj1 === obj2) {
        return true;
    }

    if (
        typeof obj1 !== "object" ||
        typeof obj2 !== "object" ||
        obj1 === null ||
        obj2 === null
    ) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {

        if (!Object.hasOwn(obj2, key)) {
            return false;
        }

        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}