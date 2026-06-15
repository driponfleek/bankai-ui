import cx from 'classnames';

// Constants
import { LOADING_SPHERES_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-spheres.scss';

const { ALTERNATING_PULSE, RIPPLES, RIPPLES_OUTLINE } =
    LOADING_SPHERES_VARIANTS;

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.variant] - Visual variant of the loading spheres animation
 */
const LoadingSpheres = (props) => {
    const { contextCls, variant = RIPPLES } = props;
    const baseCls = 'bankai-loading-spheres';
    const modCls = {
        [`${baseCls}--alternating-pulse`]: variant === ALTERNATING_PULSE,
        [`${baseCls}--ripples`]: variant === RIPPLES,
        [`${baseCls}--ripples-outline`]: variant === RIPPLES_OUTLINE,
    };

    return <span className={cx(baseCls, modCls, contextCls)} />;
};

export default LoadingSpheres;
