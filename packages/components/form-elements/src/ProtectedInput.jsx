import PropTypes from 'prop-types';
import UniversalTextInput from './UniversalTextInput';

// Utils
import { getProtectedInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/protected-input.scss';

const ProtectedInput = (props) => {
    const baseCls = 'bankai-protected-input';

    return (
        <UniversalTextInput
            {...props}
            baseCls={baseCls}
            getExtantProps={getProtectedInputExtantProps}
        />
    );
};

ProtectedInput.defaultProps = {
    autoComplete: 'off',
    hasError: false,
    isDisabled: false,
    isProtected: true,
    isReadOnly: false,
    shouldAutoFocus: false,
    onChange: () => Promise.resolve(),
};

ProtectedInput.propTypes = {
    autoComplete: PropTypes.string,
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isProtected: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    onChange: PropTypes.func,
};

export default ProtectedInput;
