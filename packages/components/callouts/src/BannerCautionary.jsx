import PropTypes from 'prop-types';
import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-cautionary.scss';

const BannerCautionary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--cautionary';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

BannerCautionary.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerCautionary;
