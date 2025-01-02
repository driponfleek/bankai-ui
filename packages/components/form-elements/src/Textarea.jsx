import PropTypes from 'prop-types';
import UniversalTextInput from './UniversalTextInput';

import { getTextInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/textarea.scss';

const Textarea = (props) => {
    const baseCls = 'bankai-textarea';

    return (
        <UniversalTextInput
            {...props}
            baseCls={baseCls}
            getExtantProps={getTextInputExtantProps}
            isTextarea
        />
    );
};

Textarea.defaultProps = {
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    autoComplete: 'on',
    shouldAutoFocus: false,
    shouldSpellCheck: false,
    onChange: () => Promise.resolve(),
};

Textarea.propTypes = {
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

export default Textarea;
