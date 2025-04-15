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
    BADGE_TOKEN_NAMES,
    BADGE_TOKEN_DEFAULTS,
} from '../../const/tokens/component/badgeConst';

const {
    BADGE_BG_COLOR,
    BADGE_ICON_COLOR,
    BADGE_TEXT_COLOR,
    BADGE_AFFIRMATIVE_BG_COLOR,
    BADGE_AFFIRMATIVE_ICON_COLOR,
    BADGE_AFFIRMATIVE_TEXT_COLOR,
    BADGE_CAUTIONARY_BG_COLOR,
    BADGE_CAUTIONARY_ICON_COLOR,
    BADGE_CAUTIONARY_TEXT_COLOR,
    BADGE_DANGER_BG_COLOR,
    BADGE_DANGER_ICON_COLOR,
    BADGE_DANGER_TEXT_COLOR,
    BADGE_INFO_BG_COLOR,
    BADGE_INFO_ICON_COLOR,
    BADGE_INFO_TEXT_COLOR,
} = BADGE_TOKEN_NAMES;
const BADGE_VARIANT_TOKEN_NAMES = {
    AFFIRMATIVE: {
        BADGE_AFFIRMATIVE_BG_COLOR,
        BADGE_AFFIRMATIVE_ICON_COLOR,
        BADGE_AFFIRMATIVE_TEXT_COLOR,
    },
    CAUTIONARY: {
        BADGE_CAUTIONARY_BG_COLOR,
        BADGE_CAUTIONARY_ICON_COLOR,
        BADGE_CAUTIONARY_TEXT_COLOR,
    },
    DANGER: {
        BADGE_DANGER_BG_COLOR,
        BADGE_DANGER_ICON_COLOR,
        BADGE_DANGER_TEXT_COLOR,
    },
    INFO: {
        BADGE_INFO_BG_COLOR,
        BADGE_INFO_ICON_COLOR,
        BADGE_INFO_TEXT_COLOR,
    },
};

export const genBadgeTokens = (presets = {}) => {
    const constTokenMap = genConstToDotNotationMap(BADGE_TOKEN_NAMES);
    const {
        [constTokenMap.BADGE_BORDER_RADIUS]:
            borderRadii = BADGE_TOKEN_DEFAULTS.BADGE_BORDER_RADIUS,
    } = presets;

    return { [constTokenMap.BADGE_BORDER_RADIUS]: borderRadii };
};

export const genBadgeColorTokens = ({ sourceColors, variant }) => {
    const { background, text = {}, icon = {} } = sourceColors ?? {};
    const formattedVariant = variant ? `${variant}_` : '';
    const TOKEN_NAMES = variant
        ? BADGE_VARIANT_TOKEN_NAMES[variant]
        : {
              BADGE_BG_COLOR,
              BADGE_ICON_COLOR,
              BADGE_TEXT_COLOR,
          };
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);

    return {
        [constToTokenMap[`BADGE_${formattedVariant}BG_COLOR`]]: background.hex,
        [constToTokenMap[`BADGE_${formattedVariant}ICON_COLOR`]]: icon.hex,
        [constToTokenMap[`BADGE_${formattedVariant}TEXT_COLOR`]]: text.hex,
    };
};

// TODO: Need to refactor this logic to be centralized. It is used
// to generate default banner colors, and the decorative and decorative accent
// colors of semantic colors.
export const genDefaultBadgeColorTokens = ({
    coreColorNeutralSeed,
    preferredTextColors,
    config = {},
}) => {
    const { isDarkMode, variantStep = 1 } = config;
    const { dark: preferredDarkTextColor, light: preferredLightTextColor } =
        preferredTextColors ?? {};
    const canvasAlt = getNewColorByLightnessAdjustment(
        coreColorNeutralSeed,
        isDarkMode ? 20 : 90,
    );
    const { variants = [] } = finalizeColorMetadata(
        genEvaluatedColorMetadata(
            genColorAndVariantsWithMetadata({
                hex: coreColorNeutralSeed,
                tokenId: 'core.neutral.color',
                step: variantStep,
            }),
            genColorMetadata(canvasAlt),
        ),
        false,
        true,
    );
    const { bgColor, remainingVariants } = variants.reduce(
        (acc, variant) => {
            const { tokenId } = variant;
            const accClone = { ...acc };

            if (tokenId.includes('84')) {
                accClone.bgColor = variant;

                return accClone;
            }

            accClone.remainingVariants.push(variant);

            return accClone;
        },
        {
            bgColor: {},
            remainingVariants: [],
        },
    );
    const { recommendedColorForNonText: iconColor } = genEvaluatedColorMetadata(
        {
            baseColor: bgColor,
            variants: remainingVariants,
        },
        bgColor,
    );
    const text = {
        hex: getPrioritizedAppTextColor({
            baseHex: bgColor.hex,
            preferredDarkTextColor,
            preferredLightTextColor,
        }),
    };
    const sourceColors = { background: bgColor, text, icon: iconColor };

    return genBadgeColorTokens({ sourceColors });
};
