module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js',
    },
};