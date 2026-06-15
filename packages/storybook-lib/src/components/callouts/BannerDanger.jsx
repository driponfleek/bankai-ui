import cx from 'classnames';
import { BannerDanger as BankaiBannerDang } from '@driponfleek/bankai-ui-callouts';
import { BankaiTriangleAlert } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Function} [props.renderIcon] - Custom icon component; defaults to BankaiTriangleAlert
 */
const BannerDanger = (props) => {
    const { contextCls, renderIcon, ...rest } = props;
    const baseCls = `${genSBBaseCls('banner')} ${genSBBaseCls(
        'banner-danger',
    )}`;

    return (
        <BankaiBannerDang
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={renderIcon ?? BankaiTriangleAlert}
        />
    );
};

export default BannerDanger;
