import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

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
