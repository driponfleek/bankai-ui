import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuButton from './MenuButton';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-primary.scss';

const MenuButtonPrimary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${BUTTON_BASE_CLS}--primary`;

    return <MenuButton {...rest} btnContextCls={cx(baseCls, contextCls)} />;
};

MenuButtonPrimary.propTypes = {
    contextCls: PropTypes.string,
};

export default MenuButtonPrimary;
