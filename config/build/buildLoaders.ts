import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
  // конфигурируем  лоадеры, они нужны чтобы обрабатывать файлы за рамки js (png, jpeg, jpg, css, scss)
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
  }

    const cssLoaders = buildCssLoader(options.isDev)

    const fileLoader = {
        test: /\.(png|jpe?g|gif$)/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ],
                ]
            },
        }
    }

    return [
        babelLoader,
        typescriptLoaders,
        cssLoaders,
        svgLoader,
        fileLoader,
    ]
}
