
var  str = "Girish"
var  str2 = 'Mahesh'

var  str3 = `Shiva`

var x = `shiva's place is "bangalore"`

finalstr = str+" "+str2
console.log(finalstr)//Girish Mahesh

 str4 = `first person ${str} second person ${str2}`


 console.log(str4)//first person Girish second person Mahesh


 st1 = str.concat(str2)

 console.log(st1)//GirishMahesh


 console.log(20 -"Mahesh")//NaN


 st2 = "This is a Javascript class"

 console.log(st2.length)//26

 console.log(st2[1])//h

 console.log(st2.charAt(0))//T


 arr = ["raju", "mahesh", 2,4,5,7]

 arr[1] = 9

 console.log(arr)//[ 'raju', 9, 2, 4, 5, 7 ]

 st4 = "Raju"

 st4[0]= "r"

 console.log(st4)//Raju=> JavaScript strings are immutable. That means you cannot directly change an individual character of a string using its index.

 console.log("==============")
 st5 = "THIS is JavaScript Class"

 st6 = st5.toLowerCase()
 st7 = st5.toUpperCase()

 console.log(st7)//THIS IS JAVASCRIPT CLASS

 //trim() - remove white space in the beginning and at the end of the string 

 st8 = "    java      script    "

 console.log(st8)//    java      script  

 st9 = st8.trim()

 
 console.log(st9)//java      script

  st5 = "THIS is JavaScript Class"

  if(st5.includes("ript")){//Specified string is present

    console.log("Specified string is present")
  }
  else{
    console.log("Specified string is not present")
  }

    st5 = "THIS is JavaScript Class"

    st8 = st5.substr(0,4)
    console.log(st8)//THIS


   st7 =  "Raju\nMah\tesh"

   console.log(st7)
//Raju
// Mah	esh

//    const b = new String('hello');

//    b="hello"


   st1 = Number('₹9,999'.replace('₹', "").replace(",",""))
   console.log(st1)//9999

   st2 = Number('₹9,231'.replace('₹', "").replace(",",""))
   console.log(st2)//9231

   total = st1+st2 

   console.log(total)//19230

  // Number("10") // 10

// split("")

st11 = "Rekha"

arr = st11.split("k")

console.log(arr)//[ 'Re', 'ha' ]
