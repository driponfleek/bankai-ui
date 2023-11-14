import { VARIANTS } from '@driponfleek/bankai-ui-buttons';
import { CORE_RADII_TOKEN_DEFAULTS } from '../core/coreRadiiConst';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

const getBtnVariantTokenNames = (variant) => ({
    [`BTN_${variant}_ACTIVE_BG_COLOR`]: `BTN_${variant}_ACTIVE_BG_COLOR`,
    [`BTN_${variant}_ACTIVE_BORDER_COLOR`]: `BTN_${variant}_ACTIVE_BORDER_COLOR`,
    [`BTN_${variant}_ACTIVE_TEXT_COLOR`]: `BTN_${variant}_ACTIVE_TEXT_COLOR`,
    [`BTN_${variant}_BG_COLOR`]: `BTN_${variant}_BG_COLOR`,
    [`BTN_${variant}_BORDER_COLOR`]: `BTN_${variant}_BORDER_COLOR`,
    [`BTN_${variant}_FOCUS_INNER_COLOR`]: `BTN_${variant}_FOCUS_INNER_COLOR`,
    [`BTN_${variant}_FOCUS_OUTER_COLOR`]: `BTN_${variant}_FOCUS_OUTER_COLOR`,
    [`BTN_${variant}_TEXT_COLOR`]: `BTN_${variant}_TEXT_COLOR`,
    [`BTN_${variant}_HOVER_BG_COLOR`]: `BTN_${variant}_HOVER_BG_COLOR`,
    [`BTN_${variant}_HOVER_BORDER_COLOR`]: `BTN_${variant}_HOVER_BORDER_COLOR`,
    [`BTN_${variant}_HOVER_TEXT_COLOR`]: `BTN_${variant}_HOVER_TEXT_COLOR`,
    [`BTN_${variant}_FOCUS_HALO_INNER_COLOR`]: `BTN_${variant}_FOCUS_HALO_INNER_COLOR`,
    [`BTN_${variant}_FOCUS_HALO_OUTER_COLOR`]: `BTN_${variant}_FOCUS_HALO_OUTER_COLOR`,
    [`BTN_SPLIT_${variant}_BORDER_COLOR`]: `BTN_SPLIT_${variant}_HOVER_TEXT_COLOR`,
});

export const BTN_TOKEN_NAMES = {
    BTN_BORDER_RADIUS: 'BTN_BORDER_RADIUS',
    BTN_BORDER_WIDTH: 'BTN_BORDER_WIDTH',
    BTN_FONT_WEIGHT: 'BTN_FONT_WEIGHT',
};

export const BTN_TOKEN_DEFAULTS = {
    BTN_BORDER_RADIUS: CORE_RADII_TOKEN_DEFAULTS.CORE_RADIUS_06_X,
    BTN_BORDER_WIDTH: 1,
    BTN_FONT_WEIGHT: 'normal',
};

export const BTN_PRIMARY_TOKEN_NAMES = getBtnVariantTokenNames(PRIMARY);

export const BTN_SECONDARY_TOKEN_NAMES = getBtnVariantTokenNames(SECONDARY);

export const BTN_PRIMARY_DESTRUCTIVE_TOKEN_NAMES =
    getBtnVariantTokenNames(PRIMARY_DESTRUCTIVE);

export const BTN_SECONDARY_DESTRUCTIVE_TOKEN_NAMES = getBtnVariantTokenNames(
    SECONDARY_DESTRUCTIVE,
);
