const mobileAndroidUA =
    'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Mobile Safari/537.36';

const mobileIOSUA =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';

const setUA = (uaString) => {
    Object.defineProperty(window.navigator, 'userAgent', {
        value: uaString,
        configurable: true,
    });
};

module.exports = {
    mobileAndroidUA,
    mobileIOSUA,
    setUA,
};
