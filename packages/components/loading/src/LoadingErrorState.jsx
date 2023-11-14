import PropTypes from 'prop-types';
import cx from 'classnames';
import { CalloutDanger } from '@driponfleek/bankai-ui-callouts';

// Styles
import './styles/loading-state.scss';

const LoadingErrorState = (props) => {
    const { contextCls, renderIcon, ...rest } = props;
    const baseCls = 'bankai-loading-error-state';

    return <CalloutDanger {...rest} contextCls={cx(baseCls, contextCls)} />;
};

LoadingErrorState.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default LoadingErrorState;
