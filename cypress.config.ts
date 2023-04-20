import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3005',
    async setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    testIsolation: false,
  },
});
