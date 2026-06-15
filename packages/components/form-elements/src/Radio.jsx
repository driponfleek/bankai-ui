import cx from 'classnames';
import UniversalToggleInput from './UniversalToggleInput';
import ToggleInputRadioIcon from './ToggleInputRadioIcon';

// Styles
import './styles/radio.scss';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name override
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the underlying input element
 * @param {string} [props.name] - Name attribute for the underlying input element
 * @param {string} [props.value] - Value attribute for the underlying input element
 * @param {boolean} [props.isChecked] - Whether the radio button is selected
 * @param {boolean} [props.isDisabled] - Whether the radio button is disabled
 * @param {Object} [props.data] - Arbitrary data object passed back in the onChange callback
 * @param {Function} [props.onChange] - Callback fired when the radio state changes
 * @param {Function} [props.renderCheckedIcon] - Custom render function for the selected state icon
 */
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

export default Radio;
