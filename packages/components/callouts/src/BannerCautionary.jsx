import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-cautionary.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BannerCautionary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--cautionary';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default BannerCautionary;
