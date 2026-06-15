import UniversalTextInput from './UniversalTextInput';

import { getTextInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/text-input.scss';

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
 * @param {boolean} [props.isReadOnly] - Whether the input is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether the input should auto-focus on mount
 * @param {boolean} [props.shouldSpellCheck] - Whether spell checking is enabled
 * @param {Function} [props.onChange] - Callback fired when the input value changes
 */
const TextInput = (props) => {
    const {
        autoComplete = 'on',
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        shouldAutoFocus = false,
        shouldSpellCheck = false,
        onChange = TextInput.onChange,
        ...rest
    } = props;
    const baseCls = 'bankai-text-input';

    return (
        <UniversalTextInput
            {...rest}
            baseCls={baseCls}
            hasError={hasError}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            autoComplete={autoComplete}
            shouldAutoFocus={shouldAutoFocus}
            shouldSpellCheck={shouldSpellCheck}
            onChange={onChange}
            type="text"
            getExtantProps={getTextInputExtantProps}
        />
    );
};

TextInput.onChange = () => Promise.resolve();

export default TextInput;
