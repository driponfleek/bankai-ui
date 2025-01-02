import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { getArrayOfNumbers, getModCls } from './utils/loadingBarsUtils';

// Constants
import { LOADING_BARS_VARIANTS } from './const/loadingConst';

// Styles
import './styles/loading-bars.scss';

const { FREQUENCY } = LOADING_BARS_VARIANTS;

const LoadingBars = (props) => {
    const { contextCls, variant } = props;
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

LoadingBars.defaultProps = {
    variant: FREQUENCY,
};

LoadingBars.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default LoadingBars;
