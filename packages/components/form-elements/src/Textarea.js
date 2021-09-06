import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/textarea.scss';

class Textarea extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        shouldAutoFocus: false,
        shouldSpellCheck: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
        value: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        isRequired: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldSpellCheck: PropTypes.bool,
    };

    render() {
        const { contextCls } = this.props;
        const props = this.getProps();
        const modCls = this.getModCls();

        return (
            <input
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
            />
        );
    }

    getModCls() {
        const { hasError } = this.props;

        return {
            [`${this.baseCls}--error`]: hasError,
        };
    }

    getProps() {
        const {
            contextCls,
            hasError,
            isDisabled,
            isReadOnly,
            isRequired,
            shouldAutoFocus,
            shouldSpellCheck,
            ...rest
        } = this.props;
        const props = { ...rest };
        props.disabled = isDisabled;
        props.readOnly = isReadOnly;
        props.required = isRequired;
        props.autoFocus = shouldAutoFocus;
        props.spellCheck = shouldSpellCheck;

        return props;
    }

    baseCls = 'bankai-textarea';
}

export default Textarea;
