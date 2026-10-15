const testResults = [
    { name: "Login", status: "passed" },
    { name: "Payment", status: "failed" },
    { name: "Search", status: "passed" },
    { name: "Logout", status: "failed" },
    { name: "Profile", status: "passed" }
];
function getFailedTests(testResults) {
    const failedTests = [];

    for (const test of testResults) {
        if (test.status === "failed") {
            failedTests.push(test.name);
        }
    }

    return failedTests;
}

console.log(getFailedTests(testResults));
/*

o/p:
[
    "Payment",
    "Logout"
]
    */
// Shorter approach using filter() + map()
const failedTests = testResults
    .filter(test => test.status === "failed")
    .map(test => test.name);

console.log(failedTests);
/*
Interview point

Be prepared to explain why we use:

filter → select failed tests
map    → extract their names
    */