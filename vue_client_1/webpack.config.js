const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            'app': path.resolve(__dirname),
            '@': path.join(path.resolve(__dirname),'src')
        }
    }
}
