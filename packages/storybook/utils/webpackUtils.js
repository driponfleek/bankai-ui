const getSymLinks = (rootNodeModules, path, fs) => {
    return fs.readdirSync(rootNodeModules).map((folderName) => {
        const fullName = path.join(rootNodeModules, folderName);

        return fs.realpathSync(fullName);
    });
};

const fixStoryBookBabel = (config, symLinks) => {
    const newConfig = { ...config };
    const babelLoaderRule = newConfig.module.rules[0];
    const babelLoader = babelLoaderRule.use[0];

    babelLoader.options.presets = [
        require.resolve('@babel/preset-react'),
        require.resolve('@babel/preset-env'),
    ];

    babelLoaderRule.include.push(...symLinks);

    return newConfig;
};

const fixStoryBookFileLoader = (config) => {
    const newConfig = { ...config };

    newConfig.module.rules = newConfig.module.rules.map((rule) => {
        const ruleClone = { ...rule };
        const isFileLoader =
            ruleClone.loader && ruleClone.loader.indexOf('file-loader') > -1;

        // Adding support for files
        if (isFileLoader) {
            // console.log('ruleClone: ', ruleClone);
            ruleClone.test =
                /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf|zip)(\?.*)?$/;
        }

        return ruleClone;
    });

    return newConfig;
};

const fixStoryBookSass = (config) => {
    // const newConfig = fixStoryBookCSS(config);
    const newConfig = { ...config };

    newConfig.module.rules.push({
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                },
            },
            'sass-loader',
        ],
    });

    return newConfig;
};

module.exports = {
    getSymLinks,
    fixStoryBookBabel,
    fixStoryBookFileLoader,
    fixStoryBookSass,
};
