#!/usr/bin/env node

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { build } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import process from 'node:process';

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
