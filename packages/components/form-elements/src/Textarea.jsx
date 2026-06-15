import UniversalTextInput from './UniversalTextInput';

import { getTextInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/textarea.scss';

/**
 * @param {Object} props
 * @param {string} [props.autoComplete] - autocomplete attribute for the textarea
 * @param {string} [props.baseCls] - Base CSS class name override
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the textarea element
 * @param {string} [props.name] - Name attribute for the textarea element
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Current value of the textarea
 * @param {boolean} [props.hasError] - Whether the textarea is in an error state
 * @param {boolean} [props.isDisabled] - Whether the textarea is disabled
 * @param {boolean} [props.isReadOnly] - Whether the textarea is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether the textarea should auto-focus on mount
 * @param {boolean} [props.shouldSpellCheck] - Whether spell checking is enabled
 * @param {Function} [props.onChange] - Callback fired when the textarea value changes
 */
const Textarea = (props) => {
    const {
        autoComplete = 'on',
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        shouldAutoFocus = false,
        shouldSpellCheck = false,
        onChange = Textarea.onChange,
        ...rest
    } = props;
    const baseCls = 'bankai-textarea';

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
            getExtantProps={getTextInputExtantProps}
            isTextarea
        />
    );
};

Textarea.onChange = () => Promise.resolve();

export default Textarea;
