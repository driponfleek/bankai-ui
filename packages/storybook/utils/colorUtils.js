import {
    getColorCorrelationsData,
    getColorSeedData,
} from '@epr0t0type/bankai-lib-color-utils';

export const getColorAndVariantCompat = (colorHex, id, variants) => {
    return getColorCorrelationsData(
        {
            ...getColorSeedData(colorHex),
            id,
        },
        variants,
    );
};

export default {};
