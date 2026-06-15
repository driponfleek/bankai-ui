import { Children } from 'react';
import cx from 'classnames';

// Utils
import { getArrayOfNumbers, getModCls } from './utils/loadingBarsUtils';

// Constants
import { LOADING_BARS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-bars.scss';

const { FREQUENCY } = LOADING_BARS_VARIANTS;

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.variant] - Visual variant of the loading bars animation
 */
const LoadingBars = (props) => {
    const { contextCls, variant = FREQUENCY } = props;
    const baseCls = 'bankai-loading-bars';
    const modCls = getModCls(variant, baseCls);
    const arrayOfNums = getArrayOfNumbers(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {Children.toArray(
                arrayOfNums.map(() => <span className={`${baseCls}__bar`} />),
            )}
        </span>
    );
};

export default LoadingBars;
