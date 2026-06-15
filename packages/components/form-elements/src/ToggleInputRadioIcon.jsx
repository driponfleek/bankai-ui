import cx from 'classnames';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the icon class
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon
 */
const ToggleInputRadioIcon = (props) => {
    const { baseCls, contextCls } = props;
    const iconBaseCls = `${baseCls}__icon`;

    return <span className={cx(iconBaseCls, contextCls)} />;
};

export default ToggleInputRadioIcon;
