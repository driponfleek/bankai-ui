import {
    SEMANTIC_COLOR_TOKEN_NAMES,
    SEMANTIC_COLOR_TOKEN_DEFAULTS,
    CORE_COLOR_NEUTRAL_SEED,
    CORE_COLOR_NEUTRAL_SEED_DEFAULT,
} from '@driponfleek/bankai-lib-theme-utils';

const {
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = SEMANTIC_COLOR_TOKEN_NAMES;

// TODO: Need more fields for future, for now just do enough for MVP.
export const FIELD_IDS = {
    CORE_COLOR_NEUTRAL_SEED,
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
};

export const FIELD_IDS_TO_LABEL_MAP = {
    CORE_COLOR_NEUTRAL_SEED: 'Neutral Seed Color',
    SEMANTIC_COLOR_ACCENT_PRIMARY: 'Accent Primary Color',
    SEMANTIC_COLOR_ACCENT_SECONDARY: 'Accent Secondary Color',
    SEMANTIC_COLOR_ACCENT_TERTIARY: 'Accent Tertiary Color',
    SEMANTIC_COLOR_AFFIRMATIVE: 'Affirmative Color',
    SEMANTIC_COLOR_BRAND: 'Brand Color',
    SEMANTIC_COLOR_CAUTIONARY: 'Cautionary Color',
    SEMANTIC_COLOR_CANVAS_BRAND: 'Canvas Brand Color',
    SEMANTIC_COLOR_DESTRUCTIVE: 'Destructive Color',
    SEMANTIC_COLOR_ERROR: 'Error Color',
    SEMANTIC_COLOR_INFO: 'Info Color',
    SEMANTIC_COLOR_PRIMARY: 'Primary Color',
    SEMANTIC_COLOR_SECONDARY: 'Secondary Color',
};

export const FIELD_IDS_TO_VALUE_DEFAULTS = {
    CORE_COLOR_NEUTRAL_SEED: CORE_COLOR_NEUTRAL_SEED_DEFAULT,
    SEMANTIC_COLOR_ACCENT_PRIMARY:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_ACCENT_PRIMARY],
    SEMANTIC_COLOR_ACCENT_SECONDARY:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_ACCENT_SECONDARY],
    SEMANTIC_COLOR_ACCENT_TERTIARY:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_ACCENT_TERTIARY],
    SEMANTIC_COLOR_AFFIRMATIVE:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_AFFIRMATIVE],
    SEMANTIC_COLOR_BRAND: SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_BRAND],
    SEMANTIC_COLOR_CAUTIONARY:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_CAUTIONARY],
    SEMANTIC_COLOR_CANVAS_BRAND:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_CANVAS_BRAND],
    SEMANTIC_COLOR_DESTRUCTIVE:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_DESTRUCTIVE],
    SEMANTIC_COLOR_ERROR: SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_ERROR],
    SEMANTIC_COLOR_INFO: SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_INFO],
    SEMANTIC_COLOR_PRIMARY:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_PRIMARY],
    SEMANTIC_COLOR_SECONDARY:
        SEMANTIC_COLOR_TOKEN_DEFAULTS[SEMANTIC_COLOR_SECONDARY],
};
