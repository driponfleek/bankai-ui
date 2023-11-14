/* eslint-disable import/prefer-default-export */
import FFCInlineLeft from '../components/FFCInlineLeft';
import FFCInlineRight from '../components/FFCInlineRight';
import FFCStacked from '../components/FFCStacked';
import FFCToggle from '../components/FFCToggle';

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
