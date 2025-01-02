import { getNewColorByLightnessAdjustment } from '@driponfleek/bankai-lib-color-utils';
import { massageConstToDotNotation } from './dataMassageUtils';
import { genConstToDotNotationMap } from './dataGenUtils';
import { BUTTON_STYLES } from '../const/btnStylesConst';
import {
    BUTTON_TOKEN_DEFAULTS,
    BUTTON_TOKEN_NAMES,
} from '../const/tokens/component/buttonsConst';
import {
    BANNER_TOKEN_DEFAULTS,
    BANNER_TOKEN_NAMES,
} from '../const/tokens/component/calloutsConst';
import {
    CORE_COLOR_NEUTRAL_SEED,
    CORE_COLOR_NEUTRAL_SEED_DEFAULT,
} from '../const/tokens/core/coreColorsConst';
import {
    SEMANTIC_COLOR_TOKEN_NAMES,
    SEMANTIC_COLOR_TOKEN_DEFAULTS,
} from '../const/tokens/semantic/semanticColorsConst';

const {
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = SEMANTIC_COLOR_TOKEN_NAMES;
const { BUTTON_BORDER_RADIUS, BUTTON_BORDER_WIDTH, BUTTON_FONT_WEIGHT } =
    BUTTON_TOKEN_NAMES;
const semanticColorConstToTokenMap = genConstToDotNotationMap(
    SEMANTIC_COLOR_TOKEN_NAMES,
);
const btnConstToTokenMap = genConstToDotNotationMap(BUTTON_TOKEN_NAMES);

export const getEvaluateForTextComplianceDefaults = () => ({
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE]]: false,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_BRAND]]: true,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY]]: false,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR]]: true,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE]]: true,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO]]: false,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY]]: true,
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_SECONDARY]]: true,
});

export const getThemePresetDefaults = (isDarkMode = false) => ({
    // Neutral Seed
    [massageConstToDotNotation(CORE_COLOR_NEUTRAL_SEED)]:
        CORE_COLOR_NEUTRAL_SEED_DEFAULT,
    // Semantic Colors
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_ACCENT_PRIMARY]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_ACCENT_PRIMARY],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_AFFIRMATIVE],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_BRAND]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_BRAND],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND]]: isDarkMode
        ? getNewColorByLightnessAdjustment(
              SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_CANVAS_BRAND],
              50,
          )
        : SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_CANVAS_BRAND],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_CAUTIONARY],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_ERROR],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_DESTRUCTIVE],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_INFO],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_PRIMARY],
    [semanticColorConstToTokenMap[SEMANTIC_COLOR_SECONDARY]]:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_SECONDARY],
    // Components
    // -- Buttons
    [btnConstToTokenMap[BUTTON_BORDER_RADIUS]]:
        BUTTON_TOKEN_DEFAULTS.BUTTON_BORDER_RADIUS,
    [btnConstToTokenMap[BUTTON_BORDER_WIDTH]]:
        BUTTON_TOKEN_DEFAULTS.BUTTON_BORDER_WIDTH,
    [btnConstToTokenMap[BUTTON_FONT_WEIGHT]]:
        BUTTON_TOKEN_DEFAULTS.BUTTON_FONT_WEIGHT,
    // -- Banners
    [massageConstToDotNotation(BANNER_TOKEN_NAMES.BANNER_BORDER_RADIUS)]:
        BANNER_TOKEN_DEFAULTS.BANNER_BORDER_RADIUS,
});

export const getUIConfigsDefaults = () => ({
    avatar: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND],
    },
    badgeAffirmative: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    },
    badgeCautionary: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    },
    badgeDanger: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR],
    },
    badgeInfo: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO],
    },
    bannerAffirmative: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    },
    bannerCautionary: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    },
    bannerDanger: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR],
    },
    bannerInfo: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO],
    },
    btnPrimary: {
        style: BUTTON_STYLES.FLAT,
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    btnPrimaryDestructive: {
        style: BUTTON_STYLES.FLAT,
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE],
    },
    btnSecondary: {
        style: BUTTON_STYLES.GHOST,
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_SECONDARY],
    },
    btnSecondaryDestructive: {
        style: BUTTON_STYLES.GHOST,
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE],
    },
    calloutAffirmative: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    },
    calloutCautionary: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    },
    calloutDanger: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR],
    },
    calloutInfo: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO],
    },
    dnd: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    },
    dndDenied: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR],
    },
    formInputs: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    formMenus: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    link: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    loadingIconAccent: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_ACCENT_PRIMARY],
    },
    loadingIconPrimary: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    loadingIconSecondary: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_SECONDARY],
    },
    tabs: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    toasterAffirmative: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    },
    toasterCautionary: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
    },
    toasterError: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_ERROR],
    },
    toasterInfo: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO],
    },
    toggleInputs: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
    toggleSwitch: {
        sourceColorToken:
            semanticColorConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
    },
    tooltipIcon: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_INFO],
    },
    universalFocus: {
        sourceColorToken: semanticColorConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
    },
});
