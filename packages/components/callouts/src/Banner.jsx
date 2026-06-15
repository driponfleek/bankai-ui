import cx from 'classnames';
import BannerIcon from './components/BannerIcon';
import MainContent from './components/MainContent';

// Styles
import './styles/banner.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.msg] - Body content of the banner
 * @param {string|React.ReactElement} [props.title] - Heading content of the banner
 * @param {number} [props.headingLvl] - Heading level for the title
 * @param {Function} [props.renderIcon] - Custom render function for the banner icon
 */
const Banner = (props) => {
    const {
        contextCls,
        headingLvl = 3,
        title,
        msg,
        renderIcon,
        children,
    } = props;
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

export default Banner;
