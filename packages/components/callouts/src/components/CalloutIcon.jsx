import PropTypes from 'prop-types';
import CalloutStatusIcon from './CalloutStatusIcon';

const CalloutIcon = (props) => {
    const { baseCls, variant, renderIcon: Icon = CalloutStatusIcon } = props;
    const iconCls = `${baseCls}__icon`;

    return (
        <div className={`${baseCls}__icon-container`}>
            <Icon variant={variant} contextCls={iconCls} />
        </div>
    );
};

CalloutIcon.propTypes = {
    baseCls: PropTypes.string,
    variant: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default CalloutIcon;
