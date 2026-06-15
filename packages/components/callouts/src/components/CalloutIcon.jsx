import CalloutStatusIcon from './CalloutStatusIcon';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent Callout component
 * @param {string} [props.variant] - Visual variant used to select the default status icon
 * @param {Function} [props.renderIcon] - Custom render function for the icon; defaults to CalloutStatusIcon
 */
const CalloutIcon = (props) => {
    const { baseCls, variant, renderIcon: Icon = CalloutStatusIcon } = props;
    const iconCls = `${baseCls}__icon`;

    return (
        <div className={`${baseCls}__icon-container`}>
            <Icon variant={variant} contextCls={iconCls} />
        </div>
    );
};

export default CalloutIcon;
