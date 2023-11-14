# @driponfleek/eslint-config
Reusable Linting configs for JavaScript and React.

## Getting Started

## Installing
```
npm i @driponfleek/eslint-config
```

## Usage
In the root of your project create a `.eslintrc` file and add the following:

```
{
    "extends": [
        "@driponfleek/eslint-config/src/reactLintConfig",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        },
        "requireConfigFile": false
    }
}
```

## Built With
* [eslint](https://eslint.org/)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
* [eslint-plugin-no-null](https://github.com/nene/eslint-plugin-no-null)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
