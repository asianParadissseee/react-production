import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширения при импорте не будем указывать тип файла
        preferAbsolute: true, // абсолютные пути
        modules: [
            options.paths.src, 'node_modules'
        ],
        alias: {},
        mainFiles: ['index']
    }
}
