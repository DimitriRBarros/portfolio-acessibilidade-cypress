import 'cypress-axe';
import 'cypress-plugin-tab';

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
  },
})