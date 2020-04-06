const {defaults} = require('jest-config');

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    moduleNameMapper: {
        "^app/(.*)$": "<rootDir>/$1",
        "@util/(.*)$": "<rootDir>/serial/$1"
    }
};
