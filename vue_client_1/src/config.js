

let localConfig = {
    RUN_ENV: 'development',
    RUN_LOC: 'local',
    TEST_USER: {
        'username': 'test',
        'password': 'test'
    },
    API_SERVER: 'localhost:3000/api/v1',
    AUTH_SERVER: 'localhost:3000/oauth/token'
}

try {
    localConfig = require('../.env.js').localConfig
}
catch (err) {
    console.log('missing')
}

let platformConfig = require(`./config/${localConfig.RUN_ENV}/config`).config
let config = {...localConfig, ...platformConfig}
export default config

