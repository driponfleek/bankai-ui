import PropTypes from 'prop-types';
import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-danger.scss';

const BannerDanger = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--danger';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

BannerDanger.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerDanger;
