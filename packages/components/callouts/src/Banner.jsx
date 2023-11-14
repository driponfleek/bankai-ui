import PropTypes from 'prop-types';
import cx from 'classnames';
import BannerIcon from './components/BannerIcon';
import MainContent from './components/MainContent';

// Styles
import './styles/banner.scss';

const Banner = (props) => {
    const { contextCls, headingLvl, title, msg, renderIcon, children } = props;
    const baseCls = 'bankai-banner';

    return (
        <div className={cx(baseCls, contextCls)}>
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
    msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headingLvl: PropTypes.number,
    renderIcon: PropTypes.func,
};

export default Banner;
