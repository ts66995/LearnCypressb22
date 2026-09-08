//FibonacciSeries.js
let res = [0, 1]
let limit = 10
while (res.length < limit) {
  let nextNum = res[res.length - 1] + res[res.length - 2]
  res.push(nextNum)
}
console.log(res)
//o/p: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]