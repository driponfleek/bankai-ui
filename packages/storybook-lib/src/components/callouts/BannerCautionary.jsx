import PropTypes from 'prop-types';
import cx from 'classnames';
import { Banner, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import { BankaiTriangleAlert } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

const { CAUTIONARY: VARIANT } = VARIANTS;

const BannerCautionary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = genSBBaseCls('banner');

    return (
        <Banner
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={BankaiTriangleAlert}
            variant={VARIANT}
        />
    );
};

BannerCautionary.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerCautionary;
