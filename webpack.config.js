const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    resolve: {
        alias: {
            '@':path.resolve(__dirname, 'assets')
        }
    },
    entry: './assets/js/script.js',

    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: 'bundle.js',
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.(css|scss)$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ],
      },

};

