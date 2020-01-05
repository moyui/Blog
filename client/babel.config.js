module.exports = function (api) {
    api.cache(true);

    const presets = [[
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            }
        },
    ], "@babel/react"];
    const plugins = ["@babel/plugin-transform-runtime"];

    return {
        presets,
        plugins
    };
}