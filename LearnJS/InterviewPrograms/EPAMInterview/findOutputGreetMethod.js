/*
output of 
const company = {
    name: "Alliance",
    greet() {
        console.log(this.name);
    }
};
const greetMethod = company.greet;
greetMethod(); // undefined
*/
// working code
const company = {
    name: "Alliance",
    greet() {
        console.log(this.name);
    }
};
company.greet() //Alliance
//error Code
const company1 = {
    name1: "Alliance",
    greet1() {
        console.log(this.name1);
    }
};
const greetMethod1 = company1.greet1;
// const greetMethod1 = company1.greet1.bind(company1);//To make this program working change above line
greetMethod1(); // undefined

/*
Why does company.greet() print Alliance but greetMethod() print undefined?"
A good answer is:
"this depends on the way a function is invoked. When I call company.greet(),this 
refers to the company object. When I assign the method to greetMethod and call 
it as a standalone function, it is no longer called with company as its receiver,
so this does not refer to company. We can use bind(company) if we want to preserve 
the object context."

working code:
const greetMethod = company.greet.bind(company);
greetMethod();
*/



