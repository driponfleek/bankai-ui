/* eslint-disable import/prefer-default-export */
import FFCInlineLeft from '../components/form-field-composer/FFCInlineLeft';
import FFCInlineRight from '../components/form-field-composer/FFCInlineRight';
import FFCStacked from '../components/form-field-composer/FFCStacked';
import FFCToggle from '../components/form-field-composer/FFCToggle';

// Constants
import VARIANTS from '../const/formFieldComposerVariantsConst';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, TOGGLE } = VARIANTS;

export const getFFCRenderer = (props) => {
    const { variant } = props ?? {};

    switch (variant) {
        case INLINE_LEFT:
            return FFCInlineLeft;
        case INLINE_RIGHT:
            return FFCInlineRight;
        case TOGGLE:
            return FFCToggle;
        case STACKED:
        default:
            return FFCStacked;
    }
};
