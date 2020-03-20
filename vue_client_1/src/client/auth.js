const config = require('@/config').default
let authorized
if (config.RUN_LOC === 'local') {
    authorized = require('@/client/local/auth').authorized
} else {
    authorized = require('@/client/engine/auth').authorized
}
export { authorized }