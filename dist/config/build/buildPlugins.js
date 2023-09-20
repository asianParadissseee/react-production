import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildPlugins(_a) {
    var paths = _a.paths, isDev = _a.isDev;
    return [
        new HtmlWebpackPlugin({
            template: paths.html // template указывает что html будет использоваться как шаблон
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS__DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(), //чтобы не перезагружать страницу при изменении кода
    ];
}
