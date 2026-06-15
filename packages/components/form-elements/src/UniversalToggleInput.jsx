import cx from 'classnames';

// Utils
import { getToggleInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/universal-toggle-input.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the hidden input element
 * @param {string} [props.name] - Name attribute for the hidden input element
 * @param {string} [props.value] - Value passed back in the onChange callback
 * @param {boolean} [props.isChecked] - Whether the toggle input is checked
 * @param {boolean} [props.isDisabled] - Whether the toggle input is disabled
 * @param {Object} [props.data] - Arbitrary data object passed back in the onChange callback
 * @param {Function} [props.onChange] - Callback fired when the toggle state changes
 * @param {Function} [props.renderCheckedIcon] - Custom render function for the checked state icon
 */
const UniversalToggleInput = (props) => {
    const {
        contextCls,
        value,
        isChecked = false,
        isDisabled = false,
        data,
        onChange = UniversalToggleInput.onChange,
        renderCheckedIcon = UniversalToggleInput.renderCheckedIcon,
    } = props;
    const inputProps = getToggleInputExtantProps(props);
    const baseCls = 'bankai-universal-toggle-input';
    const handleChange = (evt) => {
        onChange({ value, isChecked, data, evt });
    };
    const modCls = {
        [`${baseCls}--checked`]: isChecked,
        [`${baseCls}--disabled`]: isDisabled,
    };

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            <input
                {...inputProps}
                className={`${baseCls}__input`}
                onChange={handleChange}
            />
            <span className={`${baseCls}__container`}>
                {isChecked && renderCheckedIcon({ baseCls })}
            </span>
        </span>
    );
};

UniversalToggleInput.onChange = () => Promise.resolve();
UniversalToggleInput.renderCheckedIcon = () => <span />;

export default UniversalToggleInput;
