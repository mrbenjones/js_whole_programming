const path = require('path')
const { defaults } = require('jest-config')
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "mjs", "vue"],
    'moduleNameMapper': {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^vue$': 'vue/dist/vue.common.js',
        'app/(.*)$': '<rootDir>$1'
    },
    'transform': {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest'
    }
}
