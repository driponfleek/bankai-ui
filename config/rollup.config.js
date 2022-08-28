import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import external from 'rollup-plugin-peer-deps-external';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import visualizer from 'rollup-plugin-visualizer';
import postcssBaseConfig from './postcssBaseConfig';

const getBabelConfigURL = () => {
    const rollupPath = require.main.filename;
    const nodeModsIdx = rollupPath.indexOf('node_modules');
    const projectRootPath = rollupPath.substring(0, nodeModsIdx);
    const babelConfigPath = path.resolve(
        path.join(projectRootPath, 'babel.config.js'),
    );

    return babelConfigPath;
};

const pluginsBase = [
    babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        configFile: getBabelConfigURL(),
    }),
    external(),
    resolve(),
    visualizer(),
    commonjs({ requireReturnsDefault: 'auto' }),
    json(),
];

export default (opts) => {
    const { input, packageJSON } = opts;

    const config = [
        // CommonJS
        {
            input,
            output: {
                file: packageJSON.main,
                format: 'cjs',
                sourcemap: true,
            },
            plugins: [
                ...pluginsBase,
                styles({ ...postcssBaseConfig, minimize: true }),
                terser({
                    mangle: {
                        keep_fnames: true,
                    },
                }),
            ],
        },
        // ESM
        {
            input,
            preserveModules: true,
            output: {
                dir: 'dist/esm/',
                format: 'esm',
                sourcemap: true,
                preserveModulesRoot: '.',
            },
            plugins: [
                ...pluginsBase,
                styles({ ...postcssBaseConfig, minimize: true }),
                terser({
                    mangle: {
                        keep_fnames: true,
                    },
                }),
            ],
        },
    ];

    return config;
};
