import PropTypes from 'prop-types';
import cx from 'classnames';
import { BannerDanger as BankaiBannerDang } from '@driponfleek/bankai-ui-callouts';
import { BankaiTriangleAlert } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/banner.scss';

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

BannerDanger.propTypes = {
    contextCls: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default BannerDanger;
