import cx from 'classnames';
import { BannerAffirmative as BankaiBannerAffirm } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleCheck } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BannerAffirmative = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${genSBBaseCls('banner')} ${genSBBaseCls(
        'banner-affirmative',
    )}`;

    return (
        <BankaiBannerAffirm
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={BankaiCircleCheck}
        />
    );
};

export default BannerAffirmative;
