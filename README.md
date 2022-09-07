# TYPESCRIPT / PLAYWRIGHT POC 

This is a boilerplate project for running Playwright using Typescript

This project uses Environment files that need to be created prior to test execution with the following names:


| Name | Description |
| ----------- | ----------- |
| USERNAME | The Switch ID used for signing into any Egress Platform |
| PASSWORD | The password used to sign into the USERNAME variable |
| API_LOGIN | Standard Egress API Auth Username |
| API_PASSWORD | Standard Egress API Auth Password |
| BASE_URL | URL To be used during test execution |


## Running The Tests

1. Install the latest LTS Node version
2. from Terminal, run 'npm install' to install depedencies
3. create your local .env file and fill in the variables listed in the above table
4. (optional) install the VSCODE Test Runner plugin
5. either run the command 'npx playwright test' or use the provided npm script 'npm run runner'
6. have fun watching the tests pass!
