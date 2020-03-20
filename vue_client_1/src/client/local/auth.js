
const authorized = function(username, password) {
    return new Promise(
        (resolve) => {
            let roll = Math.random()
            if (roll < 0.90) {
                return resolve({
                    success: false
                })
            }
            else {
                return resolve({
                    username: username,
                    password: password,
                    success: true,
                    token: 'aaa',
                    lifetime: 9600,
                    expires: new Date().getTime() + 9600
                })
            }
        }
    )
}

export { authorized }