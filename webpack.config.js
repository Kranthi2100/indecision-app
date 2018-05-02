const Path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output:{
        path: Path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    //devtool:'cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer:{
        contentBase: Path.join(__dirname, 'public')
    }
}
