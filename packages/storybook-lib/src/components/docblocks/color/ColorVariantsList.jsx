import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Callout } from '@driponfleek/bankai-ui-callouts';
import { BankaiColorPalette } from '@driponfleek/bankai-ui-icons';
import ColorVariantsLI from './ColorVariantsLI';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/color-variants-list.scss';

const ColorVariantsList = (props) => {
    const { contextCls, emptyStateTitle, variants, shouldScrollList } = props;
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

ColorVariantsList.defaultProps = {
    shouldScrollList: true,
    variants: [],
};

ColorVariantsList.propTypes = {
    contextCls: PropTypes.string,
    emptyStateTitle: PropTypes.string,
    shouldScrollList: PropTypes.bool,
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            mainContent: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element,
            ]),
            metaList: PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            ),
        }),
    ),
};

export default ColorVariantsList;
