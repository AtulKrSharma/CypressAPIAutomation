const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    experimentalStudio: false,
    viewportHeight: 768,
    viewportWidth: 1440,
    video: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 5000,
    screenshotOnRunFailure: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      reportFilename: "report",
      overwrite: false,
      html: true,
      json: true,
      charts: false,
    },
  },
});
