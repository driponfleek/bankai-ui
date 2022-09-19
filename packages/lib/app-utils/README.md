# @epr0t0type/bankai-lib-app-utils
Utilities for common bootstrapping of React applications, MFEs, Webpack and more.

## Installing
```
npm i @epr0t0type/bankai-lib-app-utils
```

## Usage

### Utils for Modifying Create React App Configs
Utilities that help fix symlinks and babel for Create React App without the need to eject. Create a `config-overrides.js` in the root of your CRA project and add the following:

```
// config-overrides.js
const fs = require('fs');
const path = require('path');
const reactAppRewired = require('react-app-rewired');
const { override, addDecoratorsLegacy, disableEsLint } = require('customize-cra');
const { fixBabelLoader, getSymLinks } = require('@epr0t0type/bankai-lib-app-utils');

const { paths } = reactAppRewired;

// Path to your root node_modules folder
const rootNodeModules = path.resolve(
    paths.appPath,
    'node_modules',
);

const symLinks = getSymLinks(rootNodeModules, path, paths, fs);

module.exports = {
    webpack: override(
        addDecoratorsLegacy(),
        disableEsLint(),
        fixBabelLoader(symLinks),
    ),
};
```

Then in your CRA app's `package.json` replace the reference to `react-scripts` with `react-app-rewired`. (EX: `react-scripts start` -> `react-app-rewired start`).

Make sure to have [customize-cra](https://github.com/arackaf/customize-cra) and [react-app-rewired](https://github.com/timarney/react-app-rewired) in your project. Reference their documentation for more information.

## License
[MIT](../../../LICENSE)
