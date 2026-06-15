import cx from 'classnames';
import MenuButton from './MenuButton';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-secondary.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const MenuButtonSecondary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${BUTTON_BASE_CLS}--secondary`;

    return <MenuButton {...rest} btnContextCls={cx(baseCls, contextCls)} />;
};

export default MenuButtonSecondary;
