//o/p: true
const expected = {
    id: 101,
    user: {
        name: "John",
        role: "admin"
    }
};

const actual = {
    id: 101,
    user: {
        name: "John",
        role: "admin"
    }
};

console.log(deepEqual(expected, actual));

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
/*
Interview explanation

"For nested API responses, I use a recursive deep comparison. 
I first compare primitive values, then verify that both values 
are objects, compare their keys, and recursively compare each corresponding property."
*/

/*
Quick Interview Revision Table
#	Problem	Main JavaScript Concept
1	Remove duplicate characters	String + includes()
2	Sort without sort()	Nested loops + swapping
3	Common elements	Array + includes()
4	Count passed/failed	Objects + loops
5	Extract failed names	filter() + map()
6	Group by status	Dynamic object keys
7	Compare API objects	Object.keys()
8	Duplicate IDs	Set
9	Unique API values	Set + map()
10	Active users	filter()
11	Sort API response	sort() + comparator
12	Compare JSON	JSON.stringify()
13	Deep JSON comparison	Recursion
*/