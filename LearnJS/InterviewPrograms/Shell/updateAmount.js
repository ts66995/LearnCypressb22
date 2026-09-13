/*
Given an array of order objects containing the user, amount, and status, 
write a JavaScript program to update the amount based on the following conditions:

If the amount is greater than or equal to 200, append .00 to the amount.
If the amount is less than 200, append .99 to the amount.
Return the updated array of orders.
You can use map() because you want to modify every order's amount based on a condition
*/
const orders = [
    { user: "Pramodh", amount: 200, status: "completed" },
    { user: "Ravi", amount: 150, status: "pending" },
    { user: "Pramodh", amount: 300, status: "completed" },
    { user: "Anita", amount: 250, status: "completed" },
    { user: "Ravi", amount: 100, status: "completed" }
];

const updatedOrders = orders.map(order => {
    order.amount = order.amount >= 200 ? order.amount + ".00" : order.amount + ".99"
    //   if (order.amount >= 200) {
    //     order.amount = order.amount + ".00";
    //   } else {
    //     order.amount = order.amount + ".99";
    //   }
    return order;
});

console.log(updatedOrders);