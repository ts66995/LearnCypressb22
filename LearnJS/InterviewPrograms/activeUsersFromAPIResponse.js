const users = [
    { id: 101, name: "John", active: true },
    { id: 102, name: "David", active: false },
    { id: 103, name: "Mike", active: true },
    { id: 104, name: "Peter", active: false }
];
function getActiveUsers(users) {
    return users.filter(user => user.active === true);
}

console.log(getActiveUsers(users));
console.log("==============Using for loop================")
function activeUsers(users){
    let activeUsers=[]
    for(let user of users){
        if(user.active===true){
            activeUsers.push(user)

        }
    }
    return activeUsers
}
console.log(activeUsers(users))
/*
Interview explanation

"I use filter() because I want to return multiple objects that satisfy a condition. Here the condition is active === true."

Important interview question

Why not find()?

Because:

filter() → returns multiple matching elements
find()   → returns the first matching element
*/