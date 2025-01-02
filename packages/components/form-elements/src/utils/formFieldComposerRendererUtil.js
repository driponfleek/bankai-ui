/* eslint-disable import/prefer-default-export */
import FFCInlineLeft from '../components/form-field-composer/FFCInlineLeft';
import FFCInlineRight from '../components/form-field-composer/FFCInlineRight';
import FFCStacked from '../components/form-field-composer/FFCStacked';
import FFCStackedHintTop from '../components/FFCStackedHintTop';

// Constants
import VARIANTS from '../const/formFieldComposerVariantsConst';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, STACKED_HINT_TOP } = VARIANTS;

export const getFFCRenderer = (props) => {
    const { variant } = props ?? {};

    switch (variant) {
        case INLINE_LEFT:
            return FFCInlineLeft;
        case INLINE_RIGHT:
            return FFCInlineRight;
        case STACKED_HINT_TOP:
            return FFCStackedHintTop;
        case STACKED:
        default:
            return FFCStacked;
    }
};
