const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src/index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8080
    },
    //模块加载器配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,        
                            name:'images/[name].[ext]',
                            esModule: false,
                        }
                    },
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: ['babel-loader']
            },
            {
                test:/\.s[ac]ss$/i,
                use:['style-loader', 'css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        })
    ],
}