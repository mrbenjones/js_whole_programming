
let config = {
    db_host: 'lcoalhost',
    db_user: 'root',
    db_password: '',
    db_port: 5432,
    db_database: 'wjs'
}

try{
    config = require('app/.env.js')
} catch (err){
    console.log('using default config')
}


module.exports = config


