import PropTypes from 'prop-types';
import cx from 'classnames';
import { BannerAffirmative as BankaiBannerAffirm } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleCheck } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

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

BannerAffirmative.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerAffirmative;
