import PropTypes from 'prop-types';

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

BannerIcon.propTypes = {
    baseCls: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default BannerIcon;
