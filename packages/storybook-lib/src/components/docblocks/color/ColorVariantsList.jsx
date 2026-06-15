import { Children } from 'react';
import cx from 'classnames';
import { Callout } from '@driponfleek/bankai-ui-callouts';
import { BankaiColorPalette } from '@driponfleek/bankai-ui-icons';
import ColorVariantsLI from './ColorVariantsLI';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/color-variants-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.emptyStateTitle] - Title shown in the empty state callout
 * @param {boolean} [props.shouldScrollList] - Enables scrolling on the variants list
 * @param {Array<Object>} [props.variants] - List of color variant configurations passed to ColorSwatch
 */
const ColorVariantsList = (props) => {
    const {
        contextCls,
        emptyStateTitle,
        variants = [],
        shouldScrollList = true,
    } = props;
    const baseCls = genSBBaseCls('color-variants-list');
    const hasNoVariants = variants.length === 0;
    const modCls = {
        [`${baseCls}--scrollable`]: !hasNoVariants && shouldScrollList,
        [`${baseCls}--empty`]: hasNoVariants,
    };
    const childItems = Children.toArray(
        variants.map((item) => <ColorVariantsLI item={item} />),
    );
    const renderEmptyIcon = (iconCls) => (
        <BankaiColorPalette contextCls={iconCls} />
    );

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            {!hasNoVariants && (
                <ul className={`${baseCls}__inner`}>{childItems}</ul>
            )}
            {hasNoVariants && (
                <Callout title={emptyStateTitle} renderIcon={renderEmptyIcon} />
            )}
        </div>
    );
};

export default ColorVariantsList;
