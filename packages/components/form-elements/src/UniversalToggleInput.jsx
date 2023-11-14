import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { getToggleInputExtantProps } from './utils/inputUtils';

// Styles
import './styles/universal-toggle-input.scss';

const UniversalToggleInput = (props) => {
    const {
        contextCls,
        value,
        isChecked,
        isDisabled,
        data,
        onChange,
        renderCheckedIcon,
    } = props;
    const inputProps = getToggleInputExtantProps(props);
    const baseCls = 'bankai-universal-toggle-input';
    const handleChange = (evt) => {
        onChange({ value, isChecked, data, evt });
    };
    const modCls = {
        [`${baseCls}--checked`]: isChecked,
        [`${baseCls}--disabled`]: isDisabled,
    };

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            <input
                {...inputProps}
                className={`${baseCls}__input`}
                onChange={handleChange}
            />
            <span className={`${baseCls}__container`}>
                {isChecked && renderCheckedIcon({ baseCls })}
            </span>
        </span>
    );
};

UniversalToggleInput.defaultProps = {
    isDisabled: false,
    isChecked: false,
    onChange: () => Promise.resolve(),
    renderCheckedIcon: () => <span />,
};

UniversalToggleInput.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    data: PropTypes.object,
    onChange: PropTypes.func,
    renderCheckedIcon: PropTypes.func,
};

export default UniversalToggleInput;
