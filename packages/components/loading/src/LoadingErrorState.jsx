import cx from 'classnames';
import { CalloutDanger } from '@driponfleek/bankai-ui-callouts';

// Styles
import './styles/loading-state.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.title] - Heading text for the error state
 * @param {string} [props.msg] - Body text for the error state
 * @param {Function} [props.renderIcon] - Custom render function for the error icon
 */
const LoadingErrorState = (props) => {
    const { contextCls, renderIcon, ...rest } = props;
    const baseCls = 'bankai-loading-error-state';

    return <CalloutDanger {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default LoadingErrorState;
