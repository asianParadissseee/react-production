import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server"

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // указываем порт
        open: true, // открывает автоматически html в браузере
        historyApiFallback: true // позволяет проксировать запросы через корневую страницу

    }

}
