import reactElementToJSXString from 'react-element-to-jsx-string';

export const getMassagedColorData = (color, colorName) => {
    const {
        hex,
        tokenId,
        evalsAgainstBGColor = {},
        compatibleTextColors,
        compatibleNonTextColors,
        isDark,
        lch,
    } = color;
    const evalKeys = Object.keys(evalsAgainstBGColor);
    const { isA11yReadable, isA11yUICompatible, wcagContrast } =
        evalsAgainstBGColor ?? {};
    const hasFlags = evalKeys.indexOf('isA11yReadable') > -1;
    const hasCompatIdArray = !!compatibleTextColors;
    const { l: lightness } = lch ?? {};

    return {
        tokenId,
        color: hex,
        contrast: wcagContrast,
        ...(hasCompatIdArray && {
            compatibleTextColors,
            compatibleNonTextColors,
        }),
        ...(hasFlags && { isA11yReadable, isA11yUICompatible }),
        isDark,
        lightness,
        lch,
        mainContent: colorName,
        metaList: [hex],
    };
};

export const getMassagedColorVariantData = (
    variants = [],
    colorName = undefined,
) => {
    return variants.map((variant = {}) => {
        const { tokenId } = variant;
        const prefix = `${colorName} `;

        return getMassagedColorData(
            variant,
            `${colorName ? prefix : ''}Variant ${tokenId}`,
        );
    });
};

export const getCodeStrFromReactComponents = (components, ops) => {
    if (!components) {
        return '';
    }

    const options = {
        skip: 0,
        showFunctions: false,
        enableBeautify: true,
        showDefaultProps: false,
        filterProps: (value) => value !== undefined,
        ...ops,
    };

    return components
        .map((comp) => reactElementToJSXString(comp, options))
        .join('\n')
        .replace(/function\s+noRefCheck\(\)\s+\{\}/g, '() => {}');
};
