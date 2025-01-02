import PropTypes from 'prop-types';
import cx from 'classnames';
import { Banner } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleInfo } from '@driponfleek/bankai-ui-icons';
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/banner-and-example-composer.scss';

const withBannerAndExample = (Comp) => {
    const Wrapper = (props) => {
        const {
            contextCls,
            shouldRenderIcon,
            bannerProps,
            renderBanner,
            renderBannerIcon,
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

    Wrapper.defaultProps = {
        shouldRenderIcon: true,
        renderBanner: Banner,
        renderBannerIcon: BankaiCircleInfo,
    };

    Wrapper.propTypes = {
        contextCls: PropTypes.string,
        shouldRenderIcon: PropTypes.bool,
        bannerProps: PropTypes.object,
        renderBanner: PropTypes.func,
        renderBannerIcon: PropTypes.func,
    };

    return Wrapper;
};

const BannerAndExampleComposer = withBannerAndExample;

export default BannerAndExampleComposer;
