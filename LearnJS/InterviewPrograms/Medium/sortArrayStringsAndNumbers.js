//Sorting for numbers
let arr = [40, 10, 30, 50, 20];
for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length -i- 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

//Sorting for string
let str = "sreelatha"
let arr1=str.split('')
for (let i = 0; i < arr1.length-1; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
            let temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
        }
    }
}
console.log(arr1.join(''));
/*
"I'm using Bubble Sort. The outer loop performs at most n-1 
passes. The inner loop compares adjacent elements and swaps 
them when they are in the wrong order. After each pass, the 
largest unsorted element moves to the end, so I reduce the inner 
loop range by i. The time complexity is O(n²), and the space 
complexity is O(1)."*/
