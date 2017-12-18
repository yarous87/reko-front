const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const path = require('path');



module.exports = function (env = { env: 'prod' }) {
    const isProd = env.env === 'prod';

    process.env.NODE_ENV = isProd ? 'production' : 'development';

    const config = {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8081',
                    secure: false
                }
            }
        },
        devtool: 'source-map',
        entry: {
            app: ['./app/index.js']
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/assets/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader'],
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new DefinePlugin({
                'process.env.NODE_ENV': '"development"' // nie dziala na windowsie
            })
        ]
    };

    if (isProd) {
        config.plugins = [
            ...config.plugins,
            new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
            new CopyWebpackPlugin([{ from: './app/index.html', to: 'index.html' }]),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ];
    }

    return config;
};