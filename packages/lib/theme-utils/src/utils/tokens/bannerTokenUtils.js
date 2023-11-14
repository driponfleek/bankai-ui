import {
    genEvaluatedColorMetadata,
    genColorAndVariantsWithMetadata,
    genColorMetadata,
    getNewColorByLightnessAdjustment,
} from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    getPrioritizedAppTextColor,
    finalizeColorMetadata,
} from '../helperUtils';
import {
    BANNER_TOKEN_NAMES,
    BANNER_AFFIRMATIVE_COLOR_TOKEN_NAMES,
    BANNER_CAUTIONARY_COLOR_TOKEN_NAMES,
    BANNER_DANGER_COLOR_TOKEN_NAMES,
    BANNER_DEFAULT_COLOR_TOKEN_NAMES,
    BANNER_INFO_COLOR_TOKEN_NAMES,
    BANNER_TOKEN_DEFAULTS,
} from '../../const/tokens/component/calloutsConst';

const { BANNER_BORDER_RADIUS } = BANNER_TOKEN_NAMES;
const BANNER_VARIANT_TOKEN_NAMES = {
    BANNER_AFFIRMATIVE_COLOR_TOKEN_NAMES,
    BANNER_CAUTIONARY_COLOR_TOKEN_NAMES,
    BANNER_DANGER_COLOR_TOKEN_NAMES,
    BANNER_DEFAULT_COLOR_TOKEN_NAMES,
    BANNER_INFO_COLOR_TOKEN_NAMES,
};

export const genBannerTokens = (presets = {}) => {
    const constToTokenMap = genConstToDotNotationMap(BANNER_TOKEN_NAMES);
    const {
        [constToTokenMap[BANNER_BORDER_RADIUS]]:
            borderRadii = BANNER_TOKEN_DEFAULTS.BANNER_BORDER_RADIUS,
    } = presets;

    return { [constToTokenMap[BANNER_BORDER_RADIUS]]: borderRadii };
};

export const genBannerColorTokens = ({ sourceColors, variant }) => {
    const { background = {}, text = {}, icon = {} } = sourceColors ?? {};
    const formattedVariant = variant ? `${variant}_` : '';
    const TOKEN_NAMES =
        BANNER_VARIANT_TOKEN_NAMES[
            `BANNER_${variant || 'DEFAULT'}_COLOR_TOKEN_NAMES`
        ];
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);

    return {
        [constToTokenMap[`BANNER_${formattedVariant}BG_COLOR`]]: background.hex,
        [constToTokenMap[`BANNER_${formattedVariant}ICON_COLOR`]]: icon.hex,
        [constToTokenMap[`BANNER_${formattedVariant}TEXT_COLOR`]]: text.hex,
    };
};

export const genDefaultBannerColorTokens = ({
    coreColorNeutralSeed,
    preferredTextColors,
    config = {},
}) => {
    const { isDarkMode, variantStep = 2 } = config;
    const { dark: preferredDarkTextColor, light: preferredLightTextColor } =
        preferredTextColors ?? {};
    const bgColor = getNewColorByLightnessAdjustment(
        coreColorNeutralSeed,
        isDarkMode ? 20 : 90,
    );
    const { recommendedColor: icon } = finalizeColorMetadata(
        genEvaluatedColorMetadata(
            genColorAndVariantsWithMetadata({
                hex: bgColor,
                tokenId: 'core.neutral.color',
                step: variantStep,
            }),
            genColorMetadata(bgColor),
        ),
        false,
        true,
    );
    const background = {
        hex: bgColor,
    };
    const text = {
        hex: getPrioritizedAppTextColor({
            baseHex: bgColor,
            preferredDarkTextColor,
            preferredLightTextColor,
        }),
    };
    const sourceColors = { background, text, icon };

    return genBannerColorTokens({ sourceColors });
};
