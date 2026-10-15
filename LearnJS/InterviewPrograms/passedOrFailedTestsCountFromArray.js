const testResults = [
    { name: "Login", status: "passed" },
    { name: "Payment", status: "failed" },
    { name: "Search", status: "passed" },
    { name: "Logout", status: "failed" },
    { name: "Profile", status: "passed" }
];
function countTestResults(testResults) {
    let passed = 0;
    let failed = 0;

    for (const testResult of testResults) {
        if (testResult.status === "passed") {
            passed++;
        } else if (testResult.status === "failed") {
            failed++;
        }
    }

    return {
        passed,
        failed
    };
}

console.log(countTestResults(testResults))
/*
o/p: 
{
    passed: 3,
    failed: 2
}
    "I iterate through the test-result objects and 
    maintain separate counters based on the status. Finally, I return both counts as an object."

    Real-time scenario

Imagine your CI pipeline returns:

500 test results

You can use this logic to produce:

Passed: 450
Failed: 45
Skipped: 5
*/
