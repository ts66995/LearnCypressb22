//RandomStringWithSpecifiedNoofcharacters.js
let limit = 5
function randomstring(limit) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charsLength = chars.length
  let ranStr = ''
  for (i = 1; i <= limit; i++) {
    ranChar = chars.charAt(Math.floor(Math.random() * charsLength))
    ranStr += ranChar
  }
  return ranStr
}
console.log(randomstring(limit))