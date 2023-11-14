import PropTypes from 'prop-types';
import cx from 'classnames';
import { Banner, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleInfo } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

const { INFO: VARIANT } = VARIANTS;

const BannerInfo = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = genSBBaseCls('banner');

    return (
        <Banner
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={BankaiCircleInfo}
            variant={VARIANT}
        />
    );
};

BannerInfo.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerInfo;
