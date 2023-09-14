import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширения при импорте не будем указывать тип файла
    }
}
