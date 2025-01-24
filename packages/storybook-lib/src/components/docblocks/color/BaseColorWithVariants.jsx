import PropTypes from 'prop-types';
import cx from 'classnames';
import ColorSwatch from './ColorSwatch';
import ColorVariantsList from './ColorVariantsList';

// Constants
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Props

// Styles
import './styles/base-color-with-variants.scss';

const BaseColorWithVariants = (props) => {
    const { contextCls, isCard, shouldScrollList, base, variants } = props;
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

BaseColorWithVariants.defaultProps = {
    isCard: false,
    shouldScrollList: true,
    variants: [],
};

BaseColorWithVariants.propTypes = {
    contextCls: PropTypes.string,
    isCard: PropTypes.bool,
    shouldScrollList: PropTypes.bool,
    base: PropTypes.shape({
        color: PropTypes.string,
        mainContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        metaList: PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        ),
        hasAlpha: PropTypes.bool,
    }).isRequired,
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            mainContent: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element,
            ]),
            metaList: PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            ),
            hasAlpha: PropTypes.bool,
        }),
    ),
};

export default BaseColorWithVariants;
