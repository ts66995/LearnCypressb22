// const  student = {

//     place : "Bangalore",
//     course: "Cypress",
//     durataion: 6 

// }

// console.log(student.place)
// console.log(student.durataion)

// //or 

// console.log(student['place'])
// console.log(student['durataion'])

// student['place'] = "Hyderabad"

// console.log(student.place)

// delete student['durataion']

// console.log(student.durataion)

// console.log(student.firstname)

// student['firstname'] = "Raju"

// student['lastname'] = "G"

// console.log(student)

// //es6  for in 

// const menuitems ={

//     menu1 : "Admin",
//     menu2 : "PIM",
//     menu3: "Leave",
//     menu4: "Time",
//     menu5 : "Recruitment",
//     menu6: "My Info",
//     menu7 : "Performance",
//     menu8 : "Dashboard",
//     menu9: "Buzz",
//     menu10: "Claim",
//     menu11: "Maintenance",
//     menu12: "Directory"
// }

// for(let ele in menuitems){

//     console.log("started loop")

//     console.log(menuitems[ele])

//     console.log(menuitems)

//     console.log("end loop")
// }


let person = {
    firstname: "Sreelatha",
    lastname: "Tharigonda",
    age: 50,
    weight: 60,
   // key:"abc"
}
//console.log("----------for/in   loop for objects---------------")
for (let key in person) {
    console.log(key)//firstname=>prints only properties of person
    console.log(person[key])//Sreelatha=> prints only values of person
    console.log(person.key)//undefined===>not working printing 'undefined'//Dot notation is used when the property name is fixed, 
    // whereas bracket notation is used when the property name is dynamic or stored in a variable. Using dot notation 
    // with a variable name results in undefined because JavaScript looks for a literal property with that name.
// if I have property as "key" then its value will be printed for person.key. Ex: abc
    //Objectname.propertyvalue

    console.log(`Property: ${key}, Value: ${person[key]}`); //Property: firstname, Value: Sreelatha
    console.log(`Property: ${key}, Value: ${person.key}`);//Property: firstname, Value: undefined
    console.log("----------------current iteration completed------------------")
}

/*o/p:
firstname
Sreelatha
undefined
Property: firstname, Value: Sreelatha
Property: firstname, Value: undefined
----------------current iteration completed------------------
lastname
Tharigonda
undefined
Property: lastname, Value: Tharigonda
Property: lastname, Value: undefined
----------------current iteration completed------------------
age
50
undefined
Property: age, Value: 50
Property: age, Value: undefined
----------------current iteration completed------------------
weight
60
undefined
Property: weight, Value: 60
Property: weight, Value: undefined
----------------current iteration completed------------------

*/