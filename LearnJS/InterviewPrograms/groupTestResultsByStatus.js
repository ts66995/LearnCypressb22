const testResults = [
    { name: "Login", status: "passed" },
    { name: "Payment", status: "failed" },
    { name: "Search", status: "passed" },
    { name: "Logout", status: "failed" },
    { name: "Profile", status: "passed" }
];

const groupByStatus=testResults.reduce((result,testResult)=>{
    let status=testResult.status
    if(!result[status]){
        result[status]=[]
    }
    result[status].push(testResult)
    return result
},{})
console.log(groupByStatus);
console.log("============Using for loop===============");
function groupByStatus1(testResults) {
    const result = {};
    for (const testResult of testResults) {
        if (!result[testResult.status]) {
            result[testResult.status] = [];
        }
        result[testResult.status].push(testResult);
    }
    return result;
}
console.log(groupByStatus1(testResults));

/*
o/p:
{
  passed: [
    { name: 'Login', status: 'passed' },
    { name: 'Search', status: 'passed' },
    { name: 'Profile', status: 'passed' }
  ],
  failed: [
    { name: 'Payment', status: 'failed' },
    { name: 'Logout', status: 'failed' }
  ]
}

I use the test status as a dynamic object key. If that status doesn't exist, I initialize an empty array. Then I push the test result into the corresponding group."

Automation use

This can be used for generating a custom regression summary:

Passed Tests
Failed Tests
Skipped Tests
Blocked Tests
*/