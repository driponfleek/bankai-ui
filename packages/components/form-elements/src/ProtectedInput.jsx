import UniversalTextInput from './UniversalTextInput';

// Utils
import { getProtectedInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/protected-input.scss';

/**
 * @param {Object} props
 * @param {string} [props.autoComplete] - autocomplete attribute for the input
 * @param {string} [props.baseCls] - Base CSS class name override
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the input element
 * @param {string} [props.name] - Name attribute for the input element
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Current value of the input
 * @param {boolean} [props.hasError] - Whether the input is in an error state
 * @param {boolean} [props.isDisabled] - Whether the input is disabled
 * @param {boolean} [props.isProtected] - Whether to render as a password input
 * @param {boolean} [props.isReadOnly] - Whether the input is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether the input should auto-focus on mount
 * @param {Function} [props.onChange] - Callback fired when the input value changes
 */
const ProtectedInput = (props) => {
    const {
        autoComplete = 'off',
        hasError = false,
        isDisabled = false,
        isProtected = true,
        isReadOnly = false,
        shouldAutoFocus = false,
        onChange = ProtectedInput.onChange,
        ...rest
    } = props;
    const baseCls = 'bankai-protected-input';

    return (
        <UniversalTextInput
            {...rest}
            autoComplete={autoComplete}
            hasError={hasError}
            isDisabled={isDisabled}
            isProtected={isProtected}
            isReadOnly={isReadOnly}
            shouldAutoFocus={shouldAutoFocus}
            onChange={onChange}
            baseCls={baseCls}
            getExtantProps={getProtectedInputExtantProps}
        />
    );
};

ProtectedInput.onChange = () => Promise.resolve();

export default ProtectedInput;
