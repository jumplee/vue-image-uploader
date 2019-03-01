
var path = require('path')
var baseConfig={
    entry: './src/index.js',

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    'presets': [
                        "es2015"
                    ]
                }
            }
        },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //   sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        // })
    ]
}
var exportConfig={}
if(process.env.NODE_ENV === 'production'){
    var buildConfig={
        output: {
            filename: 'vueUploader.min.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'VueUploader',
            // libraryTarget: 'umd'
        },
        mode:'production',
    }
    Object.assign(exportConfig,baseConfig,buildConfig)
}else{
    var devConfig={
        output: {
            filename: 'vueUploader.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'VueUploader',
            // libraryTarget: 'umd'
        },
        mode:'development',
    }
    Object.assign(exportConfig,baseConfig,devConfig)
}
module.exports = exportConfig
