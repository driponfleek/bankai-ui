import cx from 'classnames';
import { BannerInfo as BankaiBannerInfo } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleInfo } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BannerInfo = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${genSBBaseCls('banner')} ${genSBBaseCls('banner-info')}`;

    return (
        <BankaiBannerInfo
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={BankaiCircleInfo}
        />
    );
};

export default BannerInfo;
