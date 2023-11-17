const react = require('@vitejs/plugin-react-swc');
const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');
const { build } = require('vite');
const { libInjectCss } = require('vite-plugin-lib-inject-css');
const process = require('node:process');

const cwd = process.cwd();
const FORMAT_EXTENSION = {
    es: '.js',
    cjs: '.cjs',
};

(async () => {
    const packageJson = JSON.parse(
        readFileSync(resolve(cwd, 'package.json'), 'utf8'),
    );
    const { peerDependencies = [] } = packageJson;
    await build({
        plugins: [react(), libInjectCss()],
        build: {
            rollupOptions: {
                external: Object.keys(peerDependencies ?? {}),
            },
            lib: {
                entry: resolve(cwd, 'index.js'),
                formats: ['es', 'cjs'],
                fileName(format) {
                    return `${packageJson.name.split('/')[1]}${
                        FORMAT_EXTENSION[format]
                    }`;
                },
            },
        },
    });
})();
