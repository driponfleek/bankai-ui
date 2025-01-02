/* eslint-disable import/prefer-default-export */
export const sanitizeDataForSemanticColorOnly = (data = {}) => {
    const result = {};
    const dataKeys = Object.keys(data);

    for (let index = 0; index < dataKeys.length; index += 1) {
        const dataKey = dataKeys[index];

        if (dataKey.includes('semantic.color')) {
            result[dataKey] = data[dataKey];
        }
    }

    return result;
};
