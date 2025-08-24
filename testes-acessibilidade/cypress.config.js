const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes de Acessibilidade',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});