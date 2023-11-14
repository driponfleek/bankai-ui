/* eslint-disable import/prefer-default-export */
import {
    genDesignTokens,
    massageConstToDotNotation,
} from '@driponfleek/bankai-lib-theme-utils';

const getColorOnlyTokens = (tokens = {}) => {
    const tokenKeys = Object.keys(tokens);
    const colorTokens = [];

    for (let index = 0; index < tokenKeys.length; index += 1) {
        const data = {};
        const tokenKey = tokenKeys[index];

        if (tokenKey.indexOf('color') > -1) {
            data.token = tokenKey;
            data.color = tokens[tokenKey];
            colorTokens.push(data);
        }
    }

    return colorTokens;
};

export const genTokens = (fieldValues = {}) => {
    const { isDarkMode, ...fieldVals } = fieldValues;
    const presets = {};
    const fieldValKeys = Object.keys(fieldVals);

    for (let index = 0; index < fieldValKeys.length; index += 1) {
        const fieldValKey = fieldValKeys[index];
        presets[massageConstToDotNotation(fieldValKey)] =
            fieldVals[fieldValKey];
    }

    return getColorOnlyTokens(genDesignTokens(presets, { isDarkMode }));
};
