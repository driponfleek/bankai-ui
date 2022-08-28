import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

const crypto = require('crypto');

global.matchMedia = () => {
    return {};
};

global.scroll = () => {
    return {
        value: () => {},
        writable: true,
    };
};

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr) => crypto.randomBytes(arr.length),
    },
});
