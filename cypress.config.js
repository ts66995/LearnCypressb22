const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
  allowCypressEnv: false,
  e2e: {
    video: false,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    // defaultCommandTimeout:2000,
    // pageLoadTimeout:120000,
    // viewportWidth:1000,
    // viewportHeight:660,
    watchForFileChanges:false,
    // retries: {
    //   runMode: 2,// in cli mode re-execute TCs 2 more times for failed TCs(Total 3 times)
    //   openMode: 1// in UI/Test Runner mode re-execute TCs 1 more time for failed TCs(Total 2 times)
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  "compilerOptions": {
    "types": ["cypress"]
  },
  "include": [
    "node_modules/cypress",
    "cypress/**/*.js" //if you are working with type script then use as : cypress/**/*.ts
  ]
});
