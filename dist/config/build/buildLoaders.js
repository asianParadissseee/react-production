import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };
    // конфигурируем  лоадеры, они нужны чтобы обрабатывать файлы за рамки js (png, jpeg, jpg, css, scss)
    var typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    var cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: function (resPath) { return Boolean(resPath.includes(".module.")); },
                        localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                    },
                }
            },
            "sass-loader",
        ],
    };
    var fileLoader = {
        test: /\.(png|jpe?g|gif$)/i,
        use: [
            {
                loader: "file-loader"
            }
        ]
    };
    var babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    ["i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true
                        }
                    ],
                ]
            },
        }
    };
    return [
        babelLoader,
        typescriptLoaders,
        cssLoaders,
        svgLoader,
        fileLoader,
    ];
}
