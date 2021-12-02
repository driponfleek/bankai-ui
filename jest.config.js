module.exports = {
    coverageThreshold: {
        './packages/components/**/*.js': {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    collectCoverageFrom: ['**/src/*.js'],
    coveragePathIgnorePatterns: [
        '/constants',
        '/const',
        '/dist',
        'node_modules/(?!@epr0t0type)',
        '/mock-data',
        './packages/storybook',
        './packages/lib',
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
    transformIgnorePatterns: ['node_modules/(?!@epr0t0type)'],
    verbose: true,
};
