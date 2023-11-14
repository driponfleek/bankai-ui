import PropTypes from 'prop-types';

const BannerIcon = (props) => {
    const { baseCls, renderIcon } = props;
    const iconCls = `${baseCls}__icon`;

    return (
        <div className={`${iconCls}-container`}>
            {renderIcon({ contextCls: iconCls })}
        </div>
    );
};

BannerIcon.propTypes = {
    baseCls: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default BannerIcon;
