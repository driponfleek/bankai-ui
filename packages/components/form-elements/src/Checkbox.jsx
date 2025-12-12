import PropTypes from 'prop-types';
import cx from 'classnames';
import UniversalToggleInput from './UniversalToggleInput';
import ToggleInputCheckboxIcon from './ToggleInputCheckboxIcon';

// Styles
import './styles/checkbox.scss';

const Checkbox = (props) => {
    const {
        contextCls,
        isDisabled = false,
        isChecked = false,
        renderCheckedIcon = ToggleInputCheckboxIcon,
        onChange = Checkbox.onChange,
        ...rest
    } = props;
    const baseCls = 'bankai-checkbox';

    return (
        <UniversalToggleInput
            {...rest}
            isDisabled={isDisabled}
            isChecked={isChecked}
            renderCheckedIcon={renderCheckedIcon}
            onChange={onChange}
            contextCls={cx(baseCls, contextCls)}
            type="checkbox"
        />
    );
};

Checkbox.onChange = () => Promise.resolve();

Checkbox.propTypes = {
    baseCls: PropTypes.string,
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

export default Checkbox;
