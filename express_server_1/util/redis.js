const redis = require('redis')
let client = undefined
const getClient = function () {
    client = client || redis.createClient(6380)
    return client
}

const set = function (key, value) {
    getClient().set(key, value)
}

const get = function (key) {
    return new Promise(
        function(resolve, reject) {
            getClient().get(key, function(err, reply) {
                if (err){ return reject(err)}
                return resolve(reply)
            })
        }
    )
}

const closeClient = function () {
    client.end()
    client = undefined
    return true
}

module.exports = {set, get, closeClient}

