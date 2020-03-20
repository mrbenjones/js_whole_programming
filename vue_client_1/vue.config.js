const path = require('path')
module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                'app': path.resolve(__dirname)
            }
        }
    }
}
