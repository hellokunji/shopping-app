module.exports = {
    devServer: {
        inline: true,
        //contentBase: './src',
        port: 3000
    },
    entry: './dev/js/main.js',
    /*
    output: {
        path: '/live/js',
        fileName: '/live/script.js'
        publicPath: '/live/js'
    },
    */
    output: {
        filename: "live/js/app-script.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
                },
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}