export const getIsContrastRatioMeta = (item) => {
    if (!item || typeof item !== 'string') {
        return false;
    }

    return item.includes('Contrast Ratio');
};

export const getAbstractedContrastMeta = (item) => {
    const isContrastRatioMeta = getIsContrastRatioMeta(item);
    const contrastRatioRegex = /Contrast Ratio - (\d+(\.\d+)?:1)/;
    const hexColorRegex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/;

    if (!isContrastRatioMeta) {
        return {};
    }

    return {
        bgColor: item.match(hexColorRegex)?.[0],
        contrastRatio: item.match(contrastRatioRegex)?.[1],
    };
};
