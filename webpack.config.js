const {join, resolve} = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash:8].${ext}`
const optimization = () => {
    const optimizationConfig = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (!isDev) optimizationConfig.minimizer = [
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ]

    return optimizationConfig
}

const cssLoaders = addition => {
    let defaultLoaders = [MiniCssExtractPlugin.loader, 'css-loader']
    if (addition) defaultLoaders.push(addition)

    return defaultLoaders
}

module.exports = {
    mode: isDev ? 'development' : 'production',
    devServer: {
        hot: true,
        client: {
            logging: 'error'
        }
    },
    devtool: isDev ? 'source-map' : undefined,
    entry: {
        main: join(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: resolve(__dirname, 'docs'),
        filename: fileName('js'),
        clean: true
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.(s[ac]ss)$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ico|md)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            inject: true,
            template: join(__dirname, 'public', 'index.html'),
            favicon: join(__dirname, 'public', 'favicon.ico')
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: resolve(__dirname, 'static'),
                    to: resolve(__dirname, 'docs')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: fileName('css'),
            chunkFilename: `[id].${fileName('css')}`
        }),
        new ForkTsCheckerPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
        alias: {
            '@': resolve(__dirname, 'src'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@components': resolve(__dirname, 'src/components'),
        }
    },
    performance: {
        hints: 'warning'
    }
}