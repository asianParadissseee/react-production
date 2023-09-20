import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths,isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html// template указывает что html будет использоваться как шаблон
        }), // имплементация с html
        new webpack.ProgressPlugin(), // сдежка за сборкой
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"

        }),
        new webpack.DefinePlugin({
            __IS__DEV__: JSON.stringify(isDev),

        })

    ]
}
