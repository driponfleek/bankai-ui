/* eslint-disable import-x/prefer-default-export */
export const copyTextToClipboard = (text) => {
    if (text) {
        navigator.clipboard.writeText(text);
    }
};
