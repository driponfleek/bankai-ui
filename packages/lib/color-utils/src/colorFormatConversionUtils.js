export const convertHexToRGB = (hex) => {
    // https://medium.com/javascript-in-plain-english/convert-hex-to-rgb-with-javascript-4984d16219c3
    const sanatizedHex = hex.replace('#', '');
    const aRgbHex = sanatizedHex.match(/.{1,2}/g);

    return {
        r: parseInt(aRgbHex[0], 16),
        g: parseInt(aRgbHex[1], 16),
        b: parseInt(aRgbHex[2], 16),
    };
};

export const convertRGBToHex = (rgb) => {
    const { r, g, b } = rgb || {};
    const checkIfNeedsZeroPrefix = (val) =>
        val.length === 1 ? `0${val}` : val;
    const convertToHex = (val) => {
        return checkIfNeedsZeroPrefix(val.toString(16));
    };

    return `#${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`;
};

export const convertHexToHSL = (hex) => {
    const rgb = convertHexToRGB(hex) || {};
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    let l = (max + min) / 2;

    if (max === min) {
        // eslint-disable-next-line
        h = s = 0;
    } else {
        const diff = max - min;
        s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

        // eslint-disable-next-line
        switch (max) {
            case r:
                h = (g - b) / diff + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / diff + 2;
                break;
            case b:
                h = (r - g) / diff + 4;
                break;
        }

        h /= 6;
    }

    h = Math.round(360 * h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
};

export const convertHSLToHex = (hsl = {}) => {
    // https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
    const l = hsl.l / 100;
    const a = (hsl.s * Math.min(l, 1 - l)) / 100;
    const getHex = (n) => {
        const k = (n + hsl.h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

        // Convert to Hex and prefix "0" if needed
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0');
    };

    return `#${getHex(0)}${getHex(8)}${getHex(4)}`;
};
