import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type webpack from 'webpack'
import { buildPlugins } from './config/build/buildPlugins'
import { buildLoaders } from './config/build/buildLoaders'
import { buildResolvers } from './config/build/buildResolvers'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }
    const PORT = env.port || 3000
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
}
