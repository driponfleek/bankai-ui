import PropTypes from 'prop-types';
import cx from 'classnames';
import { BannerInfo as BankaiBannerInfo } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleInfo } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

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

BannerInfo.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerInfo;
