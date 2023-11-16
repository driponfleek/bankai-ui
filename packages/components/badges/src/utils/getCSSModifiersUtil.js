import { VARIANTS, BADGE_CSS_MODIFIERS } from '../const/variantsConst';

const { DANGER, INFO, AFFIRMATIVE, CAUTIONARY } = VARIANTS;

const getCSSModifiersUtil = (baseCls, VARIANT) => {
    return {
        ...(baseCls && {
            [`${baseCls}${BADGE_CSS_MODIFIERS[DANGER]}`]: VARIANT === DANGER,
        }),
        ...(baseCls && {
            [`${baseCls}${BADGE_CSS_MODIFIERS[INFO]}`]: VARIANT === INFO,
        }),
        ...(baseCls && {
            [`${baseCls}${BADGE_CSS_MODIFIERS[AFFIRMATIVE]}`]:
                VARIANT === AFFIRMATIVE,
        }),
        ...(baseCls && {
            [`${baseCls}${BADGE_CSS_MODIFIERS[CAUTIONARY]}`]:
                VARIANT === CAUTIONARY,
        }),
    };
};

export default getCSSModifiersUtil;
