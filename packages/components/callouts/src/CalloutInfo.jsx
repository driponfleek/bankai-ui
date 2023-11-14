import PropTypes from 'prop-types';
import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-info.scss';

const CalloutInfo = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--info';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

CalloutInfo.propTypes = {
    contextCls: PropTypes.string,
};

export default CalloutInfo;
