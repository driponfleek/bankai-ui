import PropTypes from 'prop-types';
import cx from 'classnames';
import BannerIcon from './components/BannerIcon';
import MainContent from './components/MainContent';

// Utils
import {
    getBannerVariantModCls,
    getBannerHasTitleModCls,
} from './utils/bannerUtils';

// Styles
import './styles/banner.scss';

const Banner = (props) => {
    const {
        contextCls,
        headingLvl,
        title,
        msg,
        variant,
        renderIcon,
        children,
    } = props;
    const baseCls = 'bankai-banner';
    const variantModCls = getBannerVariantModCls(variant, baseCls);
    const hasTitleModCls = getBannerHasTitleModCls(variant, baseCls);

    return (
        <div className={cx(baseCls, variantModCls, hasTitleModCls, contextCls)}>
            <div className={`${baseCls}__inner`}>
                {!children && (
                    <>
                        {renderIcon && (
                            <BannerIcon
                                baseCls={baseCls}
                                renderIcon={renderIcon}
                            />
                        )}
                        {(title || msg) && (
                            <MainContent
                                baseCls={baseCls}
                                msg={msg}
                                title={title}
                                headingLvl={headingLvl}
                            />
                        )}
                    </>
                )}
                {children}
            </div>
        </div>
    );
};

Banner.defaultProps = {
    headingLvl: 3,
};

Banner.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
    msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headingLvl: PropTypes.number,
    renderIcon: PropTypes.func,
};

export default Banner;
