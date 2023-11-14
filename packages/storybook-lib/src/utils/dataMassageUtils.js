import reactElementToJSXString from 'react-element-to-jsx-string';

export const getMassagedColorData = (color, colorName) => {
    const colorKeys = Object.keys(color);
    const {
        compatibleTextColors,
        compatibleNonTextColors,
        isA11yReadable,
        isA11yUICompatible,
        isDark,
        contrast,
    } = color;
    const hasFlags = colorKeys.indexOf('isA11yReadable') > -1;
    const hasCompatIdArray = !!compatibleTextColors;
    const { hex, id, lightness } = color ?? {};

    return {
        id,
        color: hex,
        contrast,
        ...(hasCompatIdArray && {
            compatibleTextColors,
            compatibleNonTextColors,
        }),
        ...(hasFlags && { isA11yReadable, isA11yUICompatible }),
        isDark,
        lightness,
        mainContent: colorName,
        metaList: [hex],
    };
};

export const getMassagedColorVariantData = (
    variants = [],
    colorName = undefined,
) => {
    return variants.map((variant = {}) => {
        const { lightness } = variant;
        const prefix = `${colorName} `;

        return getMassagedColorData(
            variant,
            `${colorName ? prefix : ''}Variant ${lightness}`,
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
