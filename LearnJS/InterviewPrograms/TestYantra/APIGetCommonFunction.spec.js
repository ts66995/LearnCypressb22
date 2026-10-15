/*
I have multiple HTTP GET requests, and each GET request requires different headers. 
How would you design a common reusable function to handle these GET requests while 
passing the required headers dynamically at runtime?”
*/
import { test, expect, request } from '@playwright/test';
const url = 'https://reqres.in/api/users';
const token = 'your-token';
async function getAPIResponse(apiContext, url, headers = {}) {
    const response = await apiContext.get(url, {
        headers: headers
    });
    return response;
}
test('GET API test', async () => {
    const apiContext = await request.newContext();

    const headers = {
        authentication: `Bearer ${token}`,
        'content-type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'en-US',
        Origin: 'https://example.com',
        'user-agent': 'Playwright-Automation',
        'cache-control': 'no-cache',
        'x-request-id': 'REQ-12345'
    };
    const response = await getAPIResponse(apiContext, 'https://example.com/users', headers);
    expect(response.ok()).toBeTruthy();
});
// For different APIs The same function can be reused:
const response1 = await getAPIResponse(apiContext, url1, headers1);
const response2 = await getAPIResponse(apiContext, url2, headers2);
const response3 = await getAPIResponse(apiContext, url3, headers3);
/*
Interview explanation
"I created a common reusable GET method where the API context, URL, 
and headers are passed as parameters at runtime. Since different APIs can 
have different headers, I don't hardcode the headers inside the common method. 
This allows the same method to be reused across multiple GET endpoints 
and improves maintainability."
*/