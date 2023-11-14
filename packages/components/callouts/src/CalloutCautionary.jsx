import PropTypes from 'prop-types';
import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-cautionary.scss';

const CalloutCautionary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--cautionary';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

CalloutCautionary.propTypes = {
    contextCls: PropTypes.string,
};

export default CalloutCautionary;
