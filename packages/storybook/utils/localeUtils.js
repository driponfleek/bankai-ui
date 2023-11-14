/* eslint-disable import/prefer-default-export */
import strings from '../i18n/en-us.json';

const { bankaiUI: locale } = strings;

export const getLocale = (key) => locale[key];

// export const getLocale = (keys) => {
//     const pathKeys = (keys && keys.split('.')) || [];
//     const reduceCb = (localeObj = {}, key = '') => localeObj[key];
//     const val = pathKeys.reduce(reduceCb, locale);
//     const isString = typeof val === 'string';

//     return isString ? val : undefined;
// };
