import PropTypes from 'prop-types';
import cx from 'classnames';

const UniversalTextInput = (props) => {
    const {
        baseCls,
        contextCls,
        isTextarea,
        getExtantProps,
        onChange,
        ...rest
    } = props;
    const inputProps = getExtantProps({ ...rest, isTextarea });
    const Tag = isTextarea ? 'textarea' : 'input';

    return (
        <Tag
            {...inputProps}
            className={cx(baseCls, contextCls)}
            onChange={onChange}
        />
    );
};

UniversalTextInput.defaultProps = {
    autoComplete: 'on',
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    isTextarea: false,
    shouldAutoFocus: false,
    shouldSpellCheck: false,
    getExtantProps: () => ({}),
    onChange: () => Promise.resolve(),
};

UniversalTextInput.propTypes = {
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
    isTextarea: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    shouldSpellCheck: PropTypes.bool,
    getExtantProps: PropTypes.func,
    onChange: PropTypes.func,
};

export default UniversalTextInput;
