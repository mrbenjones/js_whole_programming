const config = require('app/config')

const {Client, Pool} = require('pg')

let dbclient = Object(
    {
        pool: undefined,
        getPool: function(){
            console.log('get pool')
            try {
                dbclient.pool = global.pool || new Pool(
                    {
                        user: config.db_user,
                        host: config.db_host,
                        database: config.db_database,
                        password: config.db_password,
                        port: config.db_port
                    }
                )
            } catch (err){
                console.err(`Could not connect with ${config}.`)
            }
            return dbclient.pool
        }
    }
)


const queryPromise = function(query, inParams) {
    return dbclient.getPool().query(query, inParams).then(
        result => {return result.rows}
    )
}

const destroyPool = function() {
    console.log('destroy pool')
    dbclient.pool.end()
}

module.exports = {queryPromise, destroyPool}
