//wap to check a string is palindrome or not 
console.log("-----wap to check a string is palindrome or not  ------------");

// str = "Mahesh"
str = "mom"
revstr = str.split("").reverse().join("")
/*
//anagram code
str1=str1.split("").sort().join("")
str2=str2.split("").sort().join("")
now compare str1==str2
*/


if(str == revstr){

    console.log("Given string is a palindrome")
}
else{

    console.log("Given string is not a palindrome")
}