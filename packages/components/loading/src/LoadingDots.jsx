import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { getArrayOfNumbers, getModCls } from './utils/loadingDotsUtils';

// Constants
import { LOADING_DOTS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-dots.scss';

const { BOUNCE } = LOADING_DOTS_VARIANTS;

const LoadingDots = (props) => {
    const { contextCls, variant } = props;
    const baseCls = 'bankai-loading-dots';
    const modCls = getModCls(variant, baseCls);
    const arrayOfNums = getArrayOfNumbers(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {Children.toArray(
                arrayOfNums.map(() => <span className={`${baseCls}__dot`} />),
            )}
        </span>
    );
};

LoadingDots.defaultProps = {
    variant: BOUNCE,
};

LoadingDots.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default LoadingDots;
