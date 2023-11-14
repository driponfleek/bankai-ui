import PropTypes from 'prop-types';
import cx from 'classnames';
import { Banner as BankaiBannerCaution } from '@driponfleek/bankai-ui-callouts';
import { BankaiTriangleAlert } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

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

BannerCautionary.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerCautionary;
