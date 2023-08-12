const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: { filename: "main.js" },
    mode: "production",
    stats: {
        children: false,
        modules: false,
    },
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
        open: true,
        allowedHosts: "all",
        client: {
            logging: "warn",
        },

    },
};