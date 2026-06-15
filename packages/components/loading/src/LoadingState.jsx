import cx from 'classnames';
import { Callout } from '@driponfleek/bankai-ui-callouts';
import LoadingSpinners from './LoadingSpinners';

// Styles
import './styles/loading-state.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.title] - Heading text for the loading state
 * @param {string} [props.msg] - Body text for the loading state
 * @param {Function} [props.renderIcon] - Custom render function for the loading icon
 */
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

export default LoadingState;
