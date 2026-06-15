import cx from 'classnames';
import MenuButton from './MenuButton';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-primary.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const MenuButtonPrimary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${BUTTON_BASE_CLS}--primary`;

    return <MenuButton {...rest} btnContextCls={cx(baseCls, contextCls)} />;
};

export default MenuButtonPrimary;
