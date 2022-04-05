/* eslint-disable no-void */
/* eslint-disable no-param-reassign */
/*
    Utilities for modifying Create React App configs without ejecting.
    Reference: 
    * https://github.com/timarney/react-app-rewired
    * https://github.com/arackaf/customize-cra
*/

function findBabelLoader(config) {
    const babelLoaderFilter = (rule) =>
        rule.loader &&
        rule.loader.includes('babel') &&
        rule.options &&
        rule.options.plugins;
    let loaders = config.module.rules.find((rule) =>
        Array.isArray(rule.oneOf),
    ).oneOf;

    let babelLoader = loaders.find(babelLoaderFilter);

    if (!babelLoader) {
        loaders = loaders.reduce(
            (ldrs, rule) => ldrs.concat(rule.use || []),
            [],
        );
        babelLoader = loaders.find(babelLoaderFilter);
    }

    return babelLoader;
}

const fixBabelLoader = (symLinks) => {
    return (config) => {
        const babelLoader = findBabelLoader(config);

        if (!babelLoader.exclude) {
            babelLoader.exclude = [/node_modules/];
        } else if (Array.isArray(babelLoader.exclude)) {
            babelLoader.exclude.push(/node_modules/);
        } else {
            const currentExclude = babelLoader.exclude;
            babelLoader.exclude = [currentExclude, /node_modules/];
        }
        const { include } = babelLoader;
        const includes = [include].concat(symLinks);
        babelLoader.include = includes;

        return config;
    };
};

const getSymLinks = (rootNodeModules, pathParam, paths, fsParam) => {
    const { base } = pathParam.parse(paths.appPath);
    // Used to retain folders for scoped packages
    const scopedPkgFolders = [];
    // Get first level of folders that are not scoped packages
    const folders = fsParam
        .readdirSync(rootNodeModules)
        .filter((folderName) => {
            // Check to see if it is a scoped package.
            const isScopedPkg = folderName.startsWith('@');

            // Track scoped package folder names by adding to
            // scopedPkgFolders array.
            if (isScopedPkg) {
                scopedPkgFolders.push(folderName);
            }

            // Filter out any folder name that is scoped as it cannot
            // contain a symbolic link.
            return !isScopedPkg;
        });

    // If there any scoped package folders, get their sub-folders and add
    // them to the folders array so we can check them for symlinks
    if (scopedPkgFolders.length > 0) {
        scopedPkgFolders.forEach((folderName) => {
            // Get full path to the scoped folder.
            const pathToScopedPkg = pathParam.join(rootNodeModules, folderName);
            // Get the relative path to the scoped package. Ex: '@fluid/buttons'
            const pathsToScopedPkgs = fsParam
                .readdirSync(pathToScopedPkg)
                .map((subFolderName) => {
                    return pathParam.join(folderName, subFolderName);
                });
            // Add scoped packages to folders list
            pathsToScopedPkgs.forEach((scopedPkg) => {
                folders.push(scopedPkg);
            });
        });
    }

    // Return final list of symlinks
    return folders
        .filter((folderName) => {
            const fullName = pathParam.join(rootNodeModules, folderName);

            return (
                fsParam.lstatSync(fullName).isSymbolicLink() &&
                folderName !== base
            );
        })
        .map((folderName) => {
            const fullName = pathParam.join(rootNodeModules, folderName);

            return fsParam.realpathSync(fullName);
        });
};

module.exports = {
    fixBabelLoader,
    getSymLinks,
};
