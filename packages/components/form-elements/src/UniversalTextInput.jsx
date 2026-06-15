import cx from 'classnames';

/**
 * @param {Object} props
 * @param {string} [props.autoComplete] - autocomplete attribute for the input
 * @param {string} [props.baseCls] - Base CSS class name for the input element
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the input element
 * @param {string} [props.name] - Name attribute for the input element
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Current value of the input
 * @param {boolean} [props.hasError] - Whether the input is in an error state
 * @param {boolean} [props.isDisabled] - Whether the input is disabled
 * @param {boolean} [props.isReadOnly] - Whether the input is read-only
 * @param {boolean} [props.isTextarea] - Whether to render as a textarea instead of an input
 * @param {boolean} [props.shouldAutoFocus] - Whether the input should auto-focus on mount
 * @param {boolean} [props.shouldSpellCheck] - Whether spell checking is enabled
 * @param {Function} [props.getExtantProps] - Function that filters and maps props to native input attributes
 * @param {Function} [props.onChange] - Callback fired when the input value changes
 */
const UniversalTextInput = (props) => {
    const {
        autoComplete = 'on',
        baseCls,
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        isTextarea = false,
        shouldAutoFocus = false,
        shouldSpellCheck = false,
        contextCls,
        getExtantProps = UniversalTextInput.getExtantProps,
        onChange = UniversalTextInput.onChange,
        ...rest
    } = props;
    const inputProps = getExtantProps({
        ...rest,
        autoComplete,
        hasError,
        isDisabled,
        isReadOnly,
        isTextarea,
        shouldAutoFocus,
        shouldSpellCheck,
    });
    const Tag = isTextarea ? 'textarea' : 'input';

    return (
        <Tag
            {...inputProps}
            className={cx(baseCls, contextCls)}
            onChange={onChange}
        />
    );
};

UniversalTextInput.onChange = () => Promise.resolve();
UniversalTextInput.getExtantProps = () => Promise.resolve();

export default UniversalTextInput;
