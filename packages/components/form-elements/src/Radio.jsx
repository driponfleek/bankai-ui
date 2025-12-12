import PropTypes from 'prop-types';
import cx from 'classnames';
import UniversalToggleInput from './UniversalToggleInput';
import ToggleInputRadioIcon from './ToggleInputRadioIcon';

// Styles
import './styles/radio.scss';

const Radio = (props) => {
    const {
        contextCls,
        isDisabled = false,
        isChecked = false,
        renderCheckedIcon = ToggleInputRadioIcon,
        onChange = Radio.onChange,
        ...rest
    } = props;
    const baseCls = 'bankai-radio';

    return (
        <UniversalToggleInput
            {...rest}
            isChecked={isChecked}
            isDisabled={isDisabled}
            renderCheckedIcon={renderCheckedIcon}
            contextCls={cx(baseCls, contextCls)}
            onChange={onChange}
            type="radio"
        />
    );
};

Radio.onChange = () => Promise.resolve();

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
