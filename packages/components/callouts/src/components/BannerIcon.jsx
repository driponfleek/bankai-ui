/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent Banner component
 * @param {Function} [props.renderIcon] - Custom render function for the icon
 */
const BannerIcon = (props) => {
    const { baseCls, renderIcon = BannerIcon.renderIcon } = props;
    const iconCls = `${baseCls}__icon`;

    return (
        <div className={`${iconCls}-container`}>
            {renderIcon({ contextCls: iconCls })}
        </div>
    );
};

BannerIcon.renderIcon = () => '';

export default BannerIcon;
