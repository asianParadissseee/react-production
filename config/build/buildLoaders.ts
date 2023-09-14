import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {


// конфигурируем  лоадеры, они нужны чтобы обрабатывать файлы за рамки js (png, jpeg, jpg, css, scss)
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                    },
                }
            },
            "sass-loader",
        ],
    }

    return [
        typescriptLoaders,
        cssLoaders
    ]
}