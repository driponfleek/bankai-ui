/* eslint-disable import/prefer-default-export */
export const copyTextToClipboard = (text) => {
    if (text) {
        navigator.clipboard.writeText(text);
    }
};
