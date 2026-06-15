import cx from 'classnames';
import { Banner as BankaiBannerCaution } from '@driponfleek/bankai-ui-callouts';
import { BankaiTriangleAlert } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BannerCautionary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${genSBBaseCls('banner')} ${genSBBaseCls(
        'banner-cautionary',
    )}`;

    return (
        <BankaiBannerCaution
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={BankaiTriangleAlert}
        />
    );
};

export default BannerCautionary;
