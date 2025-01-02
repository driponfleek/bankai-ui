import PropTypes from 'prop-types';
import cx from 'classnames';

const ToggleInputRadioIcon = (props) => {
    const { baseCls, contextCls } = props;
    const iconBaseCls = `${baseCls}__icon`;

    return <span className={cx(iconBaseCls, contextCls)} />;
};

ToggleInputRadioIcon.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
};

export default ToggleInputRadioIcon;
