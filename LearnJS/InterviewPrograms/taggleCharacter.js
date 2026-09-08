input="Lion Tiger"
//output="lION tIGER"
let output=""
for(let ch of input){
    if(ch>='A' && ch<='Z'){
        output+=ch.toLowerCase()
    }else if(ch>='a' && ch<='z'){
         output+=ch.toUpperCase()
    }else{
        output+=ch// Space or special characters
    }
}
console.log(output)


//(or)
let str = "Lion Tiger";
let result = "";
for (let ch of str) {
    let ascii = ch.charCodeAt(0);
    // Uppercase (A-Z)
    if (ascii >= 65 && ascii <= 90) {
        result += String.fromCharCode(ascii + 32);
    }
    // Lowercase (a-z)
    else if (ascii >= 97 && ascii <= 122) {
        result += String.fromCharCode(ascii - 32);
    }
    // Space or special characters
    else {
        result += ch;
    }
}
console.log(result);

/*
To convert Uppercase → Lowercase, add 32
To convert Lowercase → Uppercase, subtract 32.

charCodeAt(): Returns the ASCII (Unicode) value of a character.
console.log("A".charCodeAt(0)); =>65
console.log("a".charCodeAt(0)); =>97
console.log("Z".charCodeAt(0)); =>90
console.log("z".charCodeAt(0)); =>122

String.fromCharCode():Converts an ASCII value back into a character.
console.log(String.fromCharCode(65)); =>A
console.log(String.fromCharCode(97)); =>a
*/