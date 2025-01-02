import PropTypes from 'prop-types';
import cx from 'classnames';
import UniversalToggleInput from './UniversalToggleInput';
import ToggleInputRadioIcon from './ToggleInputRadioIcon';

// Styles
import './styles/radio.scss';

const Radio = (props) => {
    const { contextCls } = props;
    const baseCls = 'bankai-radio';

    return (
        <UniversalToggleInput
            {...props}
            contextCls={cx(baseCls, contextCls)}
            type="radio"
        />
    );
};

Radio.defaultProps = {
    isDisabled: false,
    isChecked: false,
    onChange: () => Promise.resolve(),
    renderCheckedIcon: ToggleInputRadioIcon,
};

Radio.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    data: PropTypes.object,
    onChange: PropTypes.func,
    renderCheckedIcon: PropTypes.func,
};

export default Radio;
