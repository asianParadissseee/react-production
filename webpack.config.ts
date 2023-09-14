import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", 'index.html')
    }
    const PORT = env.port || 3000
    const mode = env.mode || "development"
    const isDev = mode === "development"

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
}
