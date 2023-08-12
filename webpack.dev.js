const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: { filename: "main.js" },
    mode: "development",
    stats: {
        children: false,
        modules: false,
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: "./dist",
        port: 3001,
        hot: true,
        allowedHosts: "all",
        client: {
            logging: "info",
        },
    },
};