const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.config");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge([
    commonConfiguration,
    {
        mode: "production",
        output: {
            filename: "js/[name].[contenthash].js",
            environment: {
                arrowFunction: false,
            },
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash].css",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env", { targets: "defaults" }],
                            ],
                        },
                    },
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
    },
]);
