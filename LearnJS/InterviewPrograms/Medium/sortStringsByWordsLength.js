//SortStringsByWordsLength.js
let arr = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'AAAReactJs']
function sortArrLength(arr) {
  return arr.sort((a, b) => a.length - b.length)
}
console.log(sortArrLength(arr))
//o/p: [ "CSS", "HTML", 'JavaScript', 'ReactJS', 'aqcReactJs' ]
