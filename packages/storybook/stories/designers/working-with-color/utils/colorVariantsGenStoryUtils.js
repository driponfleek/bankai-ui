/* eslint-disable import/prefer-default-export */
import {
    genColorVariantsWithMetadata,
    getSanitizedHex,
} from '@driponfleek/bankai-lib-color-utils';

export const getColorSwatchData = (colorMetadata) => {
    const { hex, lch, isDark, tokenId } = colorMetadata ?? {};
    const { l: lightness } = lch ?? {};

    return {
        color: hex,
        id: `${Math.round(lightness)}`,
        isDark,
        lightness,
        mainContent: tokenId?.replace('.', ' '),
        metaList: [hex],
    };
};

export const getColorVariants = (hex, step = 5) => {
    const sanitizedHex = getSanitizedHex(hex);

    return genColorVariantsWithMetadata({
        hex: sanitizedHex,
        step,
        tokenId: 'Variant',
    }).map((variant) => getColorSwatchData(variant));
};
