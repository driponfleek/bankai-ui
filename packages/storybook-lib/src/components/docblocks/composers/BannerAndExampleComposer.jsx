import cx from 'classnames';
import { Banner } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleInfo } from '@driponfleek/bankai-ui-icons';
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/banner-and-example-composer.scss';

const withBannerAndExample = (Comp) => {
    /**
     * @param {Object} props
     * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
     * @param {boolean} [props.shouldRenderIcon] - Passes a renderIcon prop to the banner
     * @param {Object} [props.bannerProps] - Props passed to the banner component
     * @param {Function} [props.renderBanner] - Banner component render function
     * @param {Function} [props.renderBannerIcon] - Icon component passed to the banner when shouldRenderIcon is true
     */
    const Wrapper = (props) => {
        const {
            contextCls,
            shouldRenderIcon = true,
            bannerProps,
            renderBanner = Banner,
            renderBannerIcon = BankaiCircleInfo,
            children,
            ...rest
        } = props;
        const baseCls = genSBBaseCls('banner-and-example-composer');
        const bannerPropsWithFallback = {
            ...(shouldRenderIcon && { renderIcon: renderBannerIcon }),
            ...bannerProps,
        };

        return (
            <div className={cx(baseCls, contextCls)}>
                {renderBanner(bannerPropsWithFallback)}
                <Comp {...rest}>{children}</Comp>
            </div>
        );
    };

    return Wrapper;
};

const BannerAndExampleComposer = withBannerAndExample;

export default BannerAndExampleComposer;
