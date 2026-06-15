import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-affirmative.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BannerAffirmative = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--affirmative';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default BannerAffirmative;
