import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options


    return {
        mode,
        entry: paths.entry,
        output: {// вывод данных
            filename: "[name].[contenthash].js", // кэшируем имя
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        devtool: isDev ? "inline-source-map" : undefined, // middleware, отслежка ошибок
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
