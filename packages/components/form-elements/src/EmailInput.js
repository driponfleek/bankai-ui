import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/text-input.scss';

// TODO: Either remove or finish
class EmailInput extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        shouldAutoComplete: true,
        shouldAutoFocus: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
        pattern: PropTypes.string,
        value: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        isRequired: PropTypes.bool,
        shouldAutoComplete: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        getIsValidEmail: PropTypes.func,
    };

    render() {
        const { contextCls } = this.props;
        const props = this.getExtantProps();

        return <input {...props} className={cx(this.baseCls, contextCls)} />;
    }

    getExtantProps() {
        const {
            contextCls,
            hasError,
            isDisabled,
            isReadOnly,
            isRequired,
            pattern,
            shouldAutoComplete,
            shouldAutoFocus,
            ...rest
        } = this.props;
        const props = {
            ...rest,
            autoComplete: shouldAutoComplete ? 'on' : 'off',
            ...(hasError && { 'aria-invalid': hasError }),
            ...(isDisabled && { disabled: isDisabled }),
            ...(isReadOnly && { readOnly: isReadOnly }),
            ...(isRequired && { required: isRequired }),
            ...(shouldAutoFocus && { autoFocus: shouldAutoFocus }),
            type: 'email',
        };

        return props;
    }

    baseCls = 'bankai-email-input';
}

export default EmailInput;
