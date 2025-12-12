import PropTypes from 'prop-types';
import cx from 'classnames';
import { Callout } from '@driponfleek/bankai-ui-callouts';
import LoadingSpinners from './LoadingSpinners';

// Styles
import './styles/loading-state.scss';

const LoadingState = (props) => {
    const { contextCls, renderIcon = LoadingSpinners, ...rest } = props;
    const baseCls = 'bankai-loading-state';

    return (
        <Callout
            {...rest}
            renderIcon={renderIcon}
            contextCls={cx(baseCls, contextCls)}
        />
    );
};

LoadingState.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default LoadingState;
