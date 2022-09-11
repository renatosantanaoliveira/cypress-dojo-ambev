const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  projectId: 'hkmqmd',
  env: {
    allure: true,
  },
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://conexaoqa.herokuapp.com'
  },
});
