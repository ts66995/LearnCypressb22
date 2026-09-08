console.log(areAnagrams("mary", "army"))
function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  if (str1.length !== str2.length) {
    return false
  }
  function strArr(str) {
    let charArr = []
    for (let i = 0; i < str.length; i++) {
      charArr.push(str[i])
    }
    return charArr
  }
  function sortArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      //After every pass, one largest element reaches its correct position.
      for (let j = 0; j < arr.length - i - 1; j++) {
        //Because after every pass, the last element is already sorted.
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    return arr
  }
  function joinArr(arr) {
    let resStr = ''
    for (let i = 0; i < arr.length; i++) {
      resStr += '' + arr[i]
    }
    return resStr
  }
  let strArr1 = strArr(str1)
  let sortArr1 = sortArr(strArr1)
  let joinArr1 = joinArr(sortArr1)
  let strArr2 = strArr(str2)
  let sortArr2 = sortArr(strArr2)
  let joinArr2 = joinArr(sortArr2)
  return joinArr1 === joinArr2
}