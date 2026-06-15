import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-cautionary.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const CalloutCautionary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--cautionary';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default CalloutCautionary;
