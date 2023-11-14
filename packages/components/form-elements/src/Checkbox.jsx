import PropTypes from 'prop-types';
import cx from 'classnames';
import UniversalToggleInput from './UniversalToggleInput';
import ToggleInputCheckboxIcon from './ToggleInputCheckboxIcon';

// Styles
import './styles/checkbox.scss';

const Checkbox = (props) => {
    const { contextCls } = props;
    const baseCls = 'bankai-checkbox';

    return (
        <UniversalToggleInput
            {...props}
            contextCls={cx(baseCls, contextCls)}
            type="checkbox"
        />
    );
};

Checkbox.defaultProps = {
    isDisabled: false,
    isChecked: false,
    onChange: () => Promise.resolve(),
    renderCheckedIcon: ToggleInputCheckboxIcon,
};

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
