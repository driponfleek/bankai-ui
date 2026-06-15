import { chromajs, getSanitizedHex } from '@driponfleek/bankai-lib-color-utils';
import {
    ColorSwatchSimple,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import { ListItem } from '@driponfleek/bankai-ui-lists';
import CopyTokenValueBtn from '../buttons/CopyTokenValueBtn';

// Styles
import './styles/color-design-token-list-item.scss';

/**
 * @param {Object} props
 * @param {string} [props.token] - Design token name displayed as the list item label
 * @param {string} [props.color] - CSS color value used to render the swatch
 * @param {boolean} [props.shouldShowMeta] - Whether to show the hex/opacity metadata
 */
const ColorDesignTokenListItem = (props) => {
    const { token, color, shouldShowMeta = true } = props;
    const baseCls = genSBBaseCls('color-design-token-list-item');
    const sanatizedColor =
        !color || color.includes('#') ? getSanitizedHex(color) : color;
    const chromaColorData = chromajs(sanatizedColor);
    const alpha = chromaColorData.alpha();
    const hex = chromaColorData.hex('rgb'); // Required to prevent hex containing alpha value
    const hasTransparency = alpha < 1;
    const isTransparent = alpha === 0;
    let meta;

    if (shouldShowMeta) {
        meta = hasTransparency ? `${hex}, ${alpha * 100}% opacity` : hex;
        meta = isTransparent ? 'transparent' : meta;
    }

    const renderBefore = () => (
        <ColorSwatchSimple
            contextCls={`${baseCls}__swatch`}
            color={color}
            alpha={alpha}
            isTransparent={isTransparent}
        />
    );

    const renderAfter = () => (
        <CopyTokenValueBtn
            contextCls={`${baseCls}__copy-btn`}
            token={token}
            color={hex}
            isTransparent={isTransparent}
        />
    );

    return (
        <ListItem
            contextCls={baseCls}
            text={token}
            meta={meta}
            renderAfter={renderAfter}
            renderBefore={renderBefore}
        />
    );
};

export default ColorDesignTokenListItem;
