import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { getShouldRenderInner, getModCls } from './utils/loadingSpinnersUtils';

// Constants
import { LOADING_SPINNERS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-spinners.scss';

const { CUBE } = LOADING_SPINNERS_VARIANTS;

const LoadingSpinners = (props) => {
    const { contextCls, variant } = props;
    const baseCls = 'bankai-loading-spinners';
    const modCls = getModCls(variant, baseCls);
    const shouldRenderInner = getShouldRenderInner(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {shouldRenderInner && <span className={`${baseCls}__inner`} />}
        </span>
    );
};

LoadingSpinners.defaultProps = {
    variant: CUBE,
};

LoadingSpinners.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default LoadingSpinners;
