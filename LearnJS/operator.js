
var x = 20

var y = 40


console.log(x+y)//60

var stu1 = 20
var stu2 = "70"

console.log(stu1+stu2)//2070

console.log(40+20+"20"+30+40)//60203040

//-, /, *, %

var k = 51

var l = 3

console.log(k%l)//0

//+ , -, / , *, % - arithemetic operators 

//comparision operators will return boolean values 

// == ===, > , < , >=, <= 

// ==  it will compare only 2 values but not datatypes 

// === it will compare not only values but also datatypes
console.log(10=="10")//true
console.log(10==="10")//false


console.log(27<=27)//true

//Logical Operators 

//&& || !

// AND 

// 0  0  0

// 1  0  0

// 0  1  0 

// 1  1  1


// OR 

// 0  0  0

// 1  0  1

// 0  1  1 

// 1  1  1

// NOT 

// 0  1

// 1  0

console.log((10==="10")||(45<34))//false

console.log((10==="10")&&(45<34))//false

console.log(!(10=="10"))//false
/*
// Assignment 

// =
// ++

// --
// +=
// -+

x= 5
//x++ // x= x+1

x-- //x = x-1
console.log(x)//4

y = 5

y *= 4 // y = y*4

console.log(y)//20


//Ternary operator


stu1 = "Monika"

stu2 = "Hema"

//condition  ? value1 : value2

z = 10==="10" ? stu1 : stu2

console.log(z)//Hema

num1 = 40

num2 = undefined

console.log(num1+num2)//NaN

//NaN  -- not a number */