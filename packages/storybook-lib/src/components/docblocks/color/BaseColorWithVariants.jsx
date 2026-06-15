import cx from 'classnames';
import ColorSwatch from './ColorSwatch';
import ColorVariantsList from './ColorVariantsList';

// Constants
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Props

// Styles
import './styles/base-color-with-variants.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isCard] - Renders in card style instead of block style
 * @param {boolean} [props.shouldScrollList] - Enables scrolling on the variants list
 * @param {Object} props.base - Base color swatch configuration passed to ColorSwatch
 * @param {Array<Object>} [props.variants] - List of variant color swatch configurations
 */
const BaseColorWithVariants = (props) => {
    const {
        contextCls,
        isCard = false,
        shouldScrollList = true,
        base,
        variants = [],
    } = props;
    const baseCls = genSBBaseCls('base-color-with-variants');
    const modCls = {
        [`${baseCls}--fancy`]: isCard,
        [`${baseCls}--standard`]: !isCard,
    };

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            <div className={`${baseCls}__inner`}>
                <div className={`${baseCls}__base-container`}>
                    <ColorSwatch {...base} isCard={isCard} />
                </div>
                <div className={`${baseCls}__variants-container`}>
                    <ColorVariantsList
                        variants={variants}
                        shouldScrollList={shouldScrollList}
                    />
                </div>
            </div>
        </div>
    );
};

export default BaseColorWithVariants;
