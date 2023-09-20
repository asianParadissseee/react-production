export function buildResolvers(options) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src, "node_modules"
        ],
        alias: {},
        mainFiles: ["index"]
    };
}
