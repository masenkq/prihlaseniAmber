const path = require('path');

module.exports = {
    entry: './src/js/index.js', // hlavní vstupní soubor
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development', // nebo 'production' pro minifikaci
};
