import PropTypes from 'prop-types';
import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-info.scss';

const BannerInfo = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--info';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

BannerInfo.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerInfo;
