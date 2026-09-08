const arr = [[1, 2], [3, 4], [5, 6]];
const result = arr.reduce((acc, current) => {
    return acc.concat(current);
}, []);
console.log(result);

const arr1 = [[1, 2], [3, [4, 5]], [6, 7]];
const result1 = arr1.flat(2);
console.log(result1);

const fruits = [
    ["Apple", "Banana"],
    ["Mango", "Orange"],
    ["Grapes", "Pineapple"]
];
const singleArray = fruits.flat();
console.log(singleArray);

//============
const arr2 = [[1, 2], [3, [4, 5]], [6, 7]];
function flatten(arr) {
    return arr.reduce((acc, current) => {
        if (Array.isArray(current)) {
            return acc.concat(flatten(current));
        }
        return acc.concat(current);
    }, []);
}

const result2 = flatten(arr2);
console.log(result2);