import PropTypes from 'prop-types';
import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-affirmative.scss';

const BannerAffirmative = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--affirmative';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

BannerAffirmative.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerAffirmative;
