import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-danger.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const CalloutDanger = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--danger';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default CalloutDanger;
