import cx from 'classnames';
import Toggle from 'react-toggle';
import ToggleSwitchBusyIcon from './ToggleSwitchBusyIcon';

// Utils
import { getToggleSwitchExtantProps } from './utils/inputUtils';

// Styles
import './styles/toggle-switch.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID for the toggle input
 * @param {string} [props.name] - Name attribute for the toggle input
 * @param {string} [props.value] - Value passed back in the onChange callback
 * @param {boolean} [props.isBusy] - Whether to display the busy/loading state
 * @param {boolean} [props.isChecked] - Whether the toggle is on
 * @param {boolean} [props.isDefaultChecked] - Initial checked state (uncontrolled)
 * @param {boolean} [props.isDisabled] - Whether the toggle is disabled
 * @param {boolean|Object} [props.icons] - Custom icons for the on/off states, or false to disable icons
 * @param {Function} [props.onChange] - Callback fired when the toggle state changes
 * @param {Function} [props.renderBusyIcon] - Custom render function for the busy state icon
 */
const ToggleSwitch = (props) => {
    const {
        contextCls,
        id,
        name,
        value,
        isBusy = false,
        isDisabled = false,
        onChange,
        renderBusyIcon = ToggleSwitchBusyIcon,
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

ToggleSwitch.onChange = () => Promise.resolve();

export default ToggleSwitch;
