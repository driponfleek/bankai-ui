import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/textarea.scss';

class Textarea extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
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
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldSpellCheck: PropTypes.bool,
        onChange: PropTypes.func,
    };

    render() {
        const { contextCls, onChange } = this.props;
        const props = this.getExtantProps();

        return (
            <textarea
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
            isReadOnly,
            shouldAutoFocus,
            shouldSpellCheck,
            onChange,
            ...rest
        } = this.props;
        const props = {
            ...rest,
            ...(hasError && { 'aria-invalid': hasError }),
            ...(isDisabled && { disabled: isDisabled }),
            ...(isReadOnly && { readOnly: isReadOnly }),
            ...(shouldAutoFocus && { autoFocus: shouldAutoFocus }),
            ...(shouldSpellCheck && { spellCheck: shouldSpellCheck }),
        };

        return props;
    }

    baseCls = 'bankai-textarea';
}

export default Textarea;
