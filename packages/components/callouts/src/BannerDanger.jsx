import cx from 'classnames';
import Banner from './Banner';

// Styles
import './styles/banner-danger.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BannerDanger = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = 'bankai-banner--danger';

    return <Banner {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default BannerDanger;
