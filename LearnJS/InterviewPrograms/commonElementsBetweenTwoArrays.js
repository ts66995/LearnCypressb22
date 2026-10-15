const arr1 = [1, 2, 3, 4, 3, 5];
const arr2 = [3, 4, 5, 6, 7];

function findCommonElements(arr1, arr2) {
    const result = [];

    for (const ele of arr1) {
        if (arr2.includes(ele) && !result.includes(ele)) {
            result.push(ele);
        }
    }
    return result;
}

console.log(findCommonElements(arr1,arr2));
//o/p: [3, 4, 5]
/*
Automation relevance

This can be useful when comparing:

Expected test cases vs executed test cases
User IDs from two API responses
IDs returned by two different endpoints
*/