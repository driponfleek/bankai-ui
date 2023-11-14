import PropTypes from 'prop-types';
import UniversalTextInput from './UniversalTextInput';

import { getTextInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/text-input.scss';

const TextInput = (props) => {
    const baseCls = 'bankai-text-input';

    return (
        <UniversalTextInput
            {...props}
            baseCls={baseCls}
            type="text"
            getExtantProps={getTextInputExtantProps}
        />
    );
};

TextInput.defaultProps = {
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    autoComplete: 'on',
    shouldAutoFocus: false,
    shouldSpellCheck: false,
    onChange: () => Promise.resolve(),
};

TextInput.propTypes = {
    autoComplete: PropTypes.string,
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    shouldSpellCheck: PropTypes.bool,
    onChange: PropTypes.func,
};

export default TextInput;
