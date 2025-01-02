import PropTypes from 'prop-types';
import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-danger.scss';

const CalloutDanger = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--danger';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

CalloutDanger.propTypes = {
    contextCls: PropTypes.string,
};

export default CalloutDanger;
