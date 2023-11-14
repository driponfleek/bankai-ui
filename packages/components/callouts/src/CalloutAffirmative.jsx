import PropTypes from 'prop-types';
import cx from 'classnames';
import Callout from './Callout';

// Styles
import './styles/callout-affirmative.scss';

const CalloutAffirmative = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-callout--affirmative';

    return <Callout {...rest} contextCls={cx(baseCls, contextCls)} />;
};

CalloutAffirmative.propTypes = {
    contextCls: PropTypes.string,
};

export default CalloutAffirmative;
