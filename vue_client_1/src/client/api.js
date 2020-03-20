
const authorized = function (username, password) {
    return new Promise(function(resolve, reject) {
        return reject(`Stub ignores authorization of ${username} (${password}`)
    })
}

export { authorized }
