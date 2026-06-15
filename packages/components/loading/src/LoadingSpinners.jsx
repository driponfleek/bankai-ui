import cx from 'classnames';

// Utils
import { getShouldRenderInner, getModCls } from './utils/loadingSpinnersUtils';

// Constants
import { LOADING_SPINNERS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-spinners.scss';

const { CUBE } = LOADING_SPINNERS_VARIANTS;

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.variant] - Visual variant of the loading spinners animation
 */
const LoadingSpinners = (props) => {
    const { contextCls, variant = CUBE } = props;
    const baseCls = 'bankai-loading-spinners';
    const modCls = getModCls(variant, baseCls);
    const shouldRenderInner = getShouldRenderInner(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {shouldRenderInner && <span className={`${baseCls}__inner`} />}
        </span>
    );
};

export default LoadingSpinners;
