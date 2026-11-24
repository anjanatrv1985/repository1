const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 6000,
  },

 // reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,

    launchOptions: {
      slowMo: 1000,
    },

    // screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
    // trace: 'on'
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop firefox'],
      },
    },
  /*  {
      name: 'Firefox',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },


    {
      name: 'Mobile Safari',
      use: {
        ...devices['Pixel 5'],
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
        
      },
    },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
     */
  ],
 
  reporter: [
    ['list'],
    ['html'],
    ['junit', { outputFile: 'results.xml' }],
    ['json', { outputFile: 'results.json' }],
    ['allure-playwright', { resultsDir: 'my-allure-results' }]
  ],

});