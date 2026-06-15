import cx from 'classnames';
import UniversalToggleInput from './UniversalToggleInput';
import ToggleInputCheckboxIcon from './ToggleInputCheckboxIcon';

// Styles
import './styles/checkbox.scss';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name override
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the underlying input element
 * @param {string} [props.name] - Name attribute for the underlying input element
 * @param {string} [props.value] - Value attribute for the underlying input element
 * @param {boolean} [props.isChecked] - Whether the checkbox is checked
 * @param {boolean} [props.isDisabled] - Whether the checkbox is disabled
 * @param {Object} [props.data] - Arbitrary data object passed back in the onChange callback
 * @param {Function} [props.onChange] - Callback fired when the checkbox state changes
 * @param {Function} [props.renderCheckedIcon] - Custom render function for the checked state icon
 */
const Checkbox = (props) => {
    const {
        contextCls,
        isDisabled = false,
        isChecked = false,
        renderCheckedIcon = ToggleInputCheckboxIcon,
        onChange = Checkbox.onChange,
        ...rest
    } = props;
    const baseCls = 'bankai-checkbox';

    return (
        <UniversalToggleInput
            {...rest}
            isDisabled={isDisabled}
            isChecked={isChecked}
            renderCheckedIcon={renderCheckedIcon}
            onChange={onChange}
            contextCls={cx(baseCls, contextCls)}
            type="checkbox"
        />
    );
};

Checkbox.onChange = () => Promise.resolve();

export default Checkbox;
