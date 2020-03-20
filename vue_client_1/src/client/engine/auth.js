
const authorized = function(username, password) {
    return new Promise(
        (resolve, reject) => {
                return reject(`Not authorized ${username}:${password}`)
        }
    )
}

export { authorized }