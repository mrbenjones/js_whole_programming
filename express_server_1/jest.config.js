const {defaults} = require('jest-config');

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    moduleNameMapper: {
        "^app/(.*)$": "<rootDir>/$1",
        "@util/(.*)$": "<rootDir>/util/$1"
    }
};
