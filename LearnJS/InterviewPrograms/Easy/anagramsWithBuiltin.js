console.log("-----anagram program with bui;t-in methods  ------------");
// str1 = "girish" 
// str2 = "rajesh"
str1 = "listen"
str2 = "silent"
str3 = str1.split("").sort().join("")
str4 = str2.split("").sort().join("")
if (str3 == str4) {
    console.log("Anagrams")
}
else {
    console.log("not Anagrams")
}