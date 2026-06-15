import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-info.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const CalloutInfo = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--info';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default CalloutInfo;
