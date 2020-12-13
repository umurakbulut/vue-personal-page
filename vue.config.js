module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();
        svgRule
            .use('html-loader')
            .loader('html-loader');

        config
            .plugin('html')
            .tap((args) => {
                args[0].title = 'John Doe';
                return args;
            });
    },
};