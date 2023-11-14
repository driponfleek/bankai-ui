import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { getArrayOfNumbers, getModCls } from './utils/loadingSquaresUtils';

// Constants
import { LOADING_SQUARES_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-squares.scss';

const { PULSING_WAVE } = LOADING_SQUARES_VARIANTS;

const LoadingSquares = (props) => {
    const { contextCls, variant } = props;
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

LoadingSquares.defaultProps = {
    variant: PULSING_WAVE,
};

LoadingSquares.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default LoadingSquares;
