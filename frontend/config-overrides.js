const path = require('path')

module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@Components': path.resolve(__dirname, 'src/Components'),
        '@Icons': path.resolve(__dirname, 'src/Icons'),
        '@Pages': path.resolve(__dirname, 'src/Pages'),
    }
    return config
}
