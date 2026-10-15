let input="programming"
function removeDuplicateCharacters(input) {
    let result = "";
    for (const char of input) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicateCharacters(input));
//output: progamin
/*
For every character:

Check whether it already exists in result.
If not, add it.
If it already exists, skip it.
*/