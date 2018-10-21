const jestConfig = require('../../jest.config');
module.exports = {
    ...jestConfig,
    "rootDir": "../..",
    // setup coverage to collect from all typescript files that are not in node modules and test
    // if you want to debug jest in vs code this must be turned off
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/**/*.{ts,tsx}",
        // "!**/node_modules/**",
        // "!**/test/**",
        // "!**/lib/**"
    ]
}