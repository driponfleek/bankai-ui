import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LOADING_SPHERES_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-spheres.scss';

const { ALTERNATING_PULSE, RIPPLES, RIPPLES_OUTLINE } =
    LOADING_SPHERES_VARIANTS;

const LoadingSpheres = (props) => {
    const { contextCls, variant } = props;
    const baseCls = 'bankai-loading-spheres';
    const modCls = {
        [`${baseCls}--alternating-pulse`]: variant === ALTERNATING_PULSE,
        [`${baseCls}--ripples`]: variant === RIPPLES,
        [`${baseCls}--ripples-outline`]: variant === RIPPLES_OUTLINE,
    };

    return <span className={cx(baseCls, modCls, contextCls)} />;
};

LoadingSpheres.defaultProps = {
    variant: RIPPLES,
};

LoadingSpheres.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default LoadingSpheres;
