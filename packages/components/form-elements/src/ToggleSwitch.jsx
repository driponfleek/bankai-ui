import PropTypes from 'prop-types';
import cx from 'classnames';
import Toggle from 'react-toggle';
import ToggleSwitchBusyIcon from './ToggleSwitchBusyIcon';

// Utils
import { getToggleSwitchExtantProps } from './utils/inputUtils';

// Styles
import './styles/toggle-switch.scss';

const ToggleSwitch = (props) => {
    const {
        contextCls,
        id,
        name,
        value,
        isBusy,
        isDisabled,
        onChange,
        renderBusyIcon,
    } = props;
    const baseCls = 'bankai-toggle-switch';
    const handleChange = () => {
        onChange({ id, name, value });
    };
    const toggleProps = getToggleSwitchExtantProps(props);
    const modCls = {
        [`${baseCls}--is-busy`]: isBusy,
        [`${baseCls}--is-disabled`]: isBusy || isDisabled,
    };

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            <Toggle
                {...toggleProps}
                className={`${baseCls}__toggle`}
                onChange={handleChange}
            />
            {isBusy && renderBusyIcon({ contextCls: `${baseCls}__icon-busy` })}
        </div>
    );
};

ToggleSwitch.defaultProps = {
    isBusy: false,
    isDisabled: false,
    icons: false,
    renderBusyIcon: ToggleSwitchBusyIcon,
    onChange: () => Promise.resolve(),
};

ToggleSwitch.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    isBusy: PropTypes.bool,
    isChecked: PropTypes.bool,
    isDefaultChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    icons: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onChange: PropTypes.func,
    renderBusyIcon: PropTypes.func,
};

export default ToggleSwitch;
