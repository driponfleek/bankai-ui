import PropTypes from 'prop-types';
import CalloutStatusIcon from './CalloutStatusIcon';

const CalloutIcon = (props) => {
    const { baseCls, variant, renderIcon: Icon } = props;
    const iconCls = `${baseCls}__icon`;

    return (
        <div className={`${baseCls}__icon-container`}>
            {Icon ? (
                <Icon contextCls={iconCls} />
            ) : (
                <CalloutStatusIcon variant={variant} contextCls={iconCls} />
            )}
        </div>
    );
};

CalloutIcon.propTypes = {
    baseCls: PropTypes.string,
    variant: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default CalloutIcon;
