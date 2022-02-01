import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/text-input.scss';

class TextInput extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isProtected: false,
        isReadOnly: false,
        shouldAutoComplete: true,
        shouldAutoFocus: false,
        shouldSpellCheck: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isProtected: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoComplete: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldSpellCheck: PropTypes.bool,
        onChange: PropTypes.func,
    };

    render() {
        const { contextCls, onChange } = this.props;
        const props = this.getExtantProps();

        return (
            <input
                {...props}
                className={cx(this.baseCls, contextCls)}
                onChange={onChange}
            />
        );
    }

    getExtantProps() {
        const {
            contextCls,
            hasError,
            isDisabled,
            isProtected,
            isReadOnly,
            shouldAutoComplete,
            shouldAutoFocus,
            shouldSpellCheck,
            onChange,
            ...rest
        } = this.props;
        const props = {
            ...rest,
            autoComplete: !isProtected && shouldAutoComplete ? 'on' : 'off',
            ...(hasError && { 'aria-invalid': hasError }),
            ...(isDisabled && { disabled: isDisabled }),
            ...(isReadOnly && { readOnly: isReadOnly }),
            ...(shouldAutoFocus && { autoFocus: shouldAutoFocus }),
            ...(shouldSpellCheck && { spellCheck: shouldSpellCheck }),
            type: isProtected ? 'password' : 'text',
        };

        return props;
    }

    baseCls = 'bankai-text-input';
}

export default TextInput;
