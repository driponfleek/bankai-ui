import { Children } from 'react';
import cx from 'classnames';

// Utils
import { getArrayOfNumbers, getModCls } from './utils/loadingSquaresUtils';

// Constants
import { LOADING_SQUARES_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-squares.scss';

const { PULSING_WAVE } = LOADING_SQUARES_VARIANTS;

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.variant] - Visual variant of the loading squares animation
 */
const LoadingSquares = (props) => {
    const { contextCls, variant = PULSING_WAVE } = props;
    const baseCls = 'bankai-loading-squares';
    const modCls = getModCls(variant, baseCls);
    const arrayOfNums = getArrayOfNumbers(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {Children.toArray(
                arrayOfNums.map(() => (
                    <span className={`${baseCls}__square`} />
                )),
            )}
        </span>
    );
};

export default LoadingSquares;
