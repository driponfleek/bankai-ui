import PropTypes from 'prop-types';
import cx from 'classnames';
import { Callout, VARIANTS } from '@driponfleek/bankai-ui-callouts';

// Styles
import './styles/loading-state.scss';

const { DANGER } = VARIANTS;

const LoadingErrorState = (props) => {
    const { contextCls, renderIcon, ...rest } = props;
    const baseCls = 'bankai-loading-error-state';

    return (
        <Callout
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            variant={DANGER}
        />
    );
};

LoadingErrorState.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default LoadingErrorState;
