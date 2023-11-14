module.exports = {
    transform: {
        // '^.+\\.(t|j)sx?$': [
        '^.+\\.(js|jsx)$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                    parser: {
                        syntax: 'ecmascript',
                        jsx: true,
                        decorators: false,
                        dynamicImport: true,
                    },
                },
            },
        ],
    },
    coverageThreshold: {
        './packages/components/**/*.js': {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    collectCoverageFrom: ['**/src/*.js', '!**/__tests__/**'],
    coveragePathIgnorePatterns: [
        '/constants',
        '/const',
        '/dist',
        'node_modules/(?!@driponfleek)',
        '/mock-data',
        './packages/storybook',
        './packages/lib/?!(app-utils|data-validation-utils|date-time-utils|react-unit-test-utils|style-utils)',
        './packages/linting',
        'rollup.config.js',
        './packages/*/index.js',
        './packages/*/rollup.config.js',
    ],
    moduleNameMapper: {
        '\\.(less|css|scss)$': '<rootDir>/__mocks__/styleMock.js',
        'dnd-core': 'dnd-core/dist/cjs',
        '^react-dnd$': 'react-dnd/dist/cjs',
        'react-dnd-html5-backend': 'react-dnd-html5-backend/dist/cjs',
    },
    roots: ['packages', '__mocks__'],
    setupFilesAfterEnv: ['<rootDir>/scripts/jest/setup.js'],
    testEnvironment: 'jest-environment-jsdom-global',
    transformIgnorePatterns: ['node_modules/(?!@driponfleek)'],
    verbose: true,
};
