/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { execSync } = require('child_process');

// Get destination passed as a param to scripts.
const destination = process.argv[2];
// Get if this is unlink
const isUnlink = process.argv[3] && process.argv[3] === 'unlink';

// Exit with error if destination is not provided.
if (!destination) {
    console.log('\n');
    console.error(chalk.redBright('(ﾉಠдಠ)ﾉ︵┻━┻'));
    console.error(
        chalk.redBright.bold(
            'No symlink destination found. You must provide a symlink destination to set up symlinks.',
        ),
    );
    console.log('\n');

    process.exit(1);
}

// Get parent directory. This should contain both EP UI and the app
// that user will symlink to.
const parentDir = path.resolve(__dirname, '../../');

// Get Destination Path
const destinationPath = path.join(parentDir, destination);
const destinationPathIsValid = fs.existsSync(destinationPath);

// Exit with error if destination path does not exist.
if (!destinationPathIsValid) {
    console.log('\n');
    console.error(
        chalk.redBright('.,.,.,∵゜⊂-o(´･ω･｀o)三(o´･ω･｀)o-⊃゜∵.,.,.,'),
    );
    console.error(
        // TODO: Provide link to documentation on how to set up destination.
        chalk.redBright.bold(
            'The symlink destination you provided cannot be found on your machine. Please check and try again.',
        ),
    );
    console.log('\n');

    process.exit(1);
}

// Get paths to directories containing packages that
// need to be symlinked.
const componentsDirPath = path.resolve(__dirname, '../packages/components');
const libDirPath = path.resolve(__dirname, '../packages/lib');
const lintingDirPath = path.resolve(__dirname, '../packages/linting');

// Utility function for getting the sub-directories
// found in a given path.
const getSubDirs = (parentDirPath) => {
    return parentDir ? fs.readdirSync(parentDirPath) : undefined;
};

// Get Sub-Folder names from parent directories.
const componentsSubFolders = getSubDirs(componentsDirPath).filter(
    (folderName) =>
        folderName !== '--boilerplate--' && folderName !== '.DS_Store',
);
const libSubFolders = getSubDirs(libDirPath);
const lintingSubFolders = getSubDirs(lintingDirPath);

// Utility function for generating the paths to
// sub-directories.
const getSubDirsPaths = (parentDirPath, subDirs = []) => {
    return subDirs.map((folderName) => `${parentDirPath}/${folderName}`);
};

// Get sub-directory paths.
const componentsSubDirsPaths = getSubDirsPaths(
    componentsDirPath,
    componentsSubFolders,
);
const libSubDirsPaths = getSubDirsPaths(libDirPath, libSubFolders).filter(
    (folderName) => folderName !== '.DS_Store',
);
const lintingSubDirsPaths = getSubDirsPaths(
    lintingDirPath,
    lintingSubFolders,
).filter((folderName) => folderName !== '.DS_Store');

// Create List of all paths to be symlinked
const allSymLinkPaths = [
    ...componentsSubDirsPaths,
    ...libSubDirsPaths,
    ...lintingSubDirsPaths,
];

// Create Symlinks
const createSymlinks = () => {
    let packageNameList;
    allSymLinkPaths.forEach((symLinkPath) => {
        // Create path to package.json
        const pkgJSONPath = `${symLinkPath}/package.json`;
        // Get contents of package.json
        const pkgJSON = JSON.parse(fs.readFileSync(pkgJSONPath, 'utf8'));
        // Get package name
        const pkgName = pkgJSON.name;
        // console.log('pkgName: ', pkgName);
        console.log(chalk.green.bold(`Creating symlink for ${pkgName}`));
        execSync(`cd ${symLinkPath} && yarn link`);

        if (!packageNameList) {
            packageNameList = pkgName;
        } else {
            packageNameList = `${packageNameList} ${pkgName}`;
        }
    });

    execSync(`cd ${destinationPath} && yarn link ${packageNameList}`);
};

// Remove Symlinks
const removeSymlinks = () => {
    allSymLinkPaths.forEach((symLinkPath) => {
        // Create path to package.json
        const pkgJSONPath = `${symLinkPath}/package.json`;
        // Get contents of package.json
        const pkgJSON = JSON.parse(fs.readFileSync(pkgJSONPath, 'utf8'));
        // Get package name
        const pkgName = pkgJSON.name;
        // console.log('pkgName: ', pkgName);
        console.log(chalk.green.bold(`Removing symlink for ${pkgName}`));
        execSync(`cd ${destinationPath} && yarn unlink ${pkgName}`);
        execSync(`cd ${symLinkPath} && yarn unlink`);
    });
};

if (!isUnlink) {
    createSymlinks();
} else {
    removeSymlinks();
}

const setUpMsg = 'Finished setting up symlinks.';
const unlinkMsg = 'Finished removing symlinks.';
const finishedMsg = isUnlink ? unlinkMsg : setUpMsg;
console.log('\n');
console.log(chalk.green('(∩^o^)⊃━☆ﾟ.*･｡ﾟ.*･｡ﾟ.*･｡ﾟ.*･｡ﾟ'));
console.log(chalk.green.bold(finishedMsg));
console.log('\n');
process.exit(0);
