import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"


const config: webpack.Configuration  = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {// вывод данных
        filename: "[name].[contenthash].js", // кэшируем имя
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", 'index.html') // template указывает что html будет использоваться как шаблон
        }), // имплементация с html
        new webpack.ProgressPlugin() // сдежка за сборкой
    ],
    module: {
        rules: [ // конфигурируем  лоадеры, они нужны чтобы обрабатывать файлы за рамки js (png, jpeg, jpg, css, scss)
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширения при импорте не будем указывать тип файла
    },
}

export default config
