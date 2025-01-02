import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuButton from './MenuButton';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-secondary.scss';

const MenuButtonSecondary = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = `${BUTTON_BASE_CLS}--secondary`;

    return <MenuButton {...rest} btnContextCls={cx(baseCls, contextCls)} />;
};

MenuButtonSecondary.propTypes = {
    contextCls: PropTypes.string,
};

export default MenuButtonSecondary;
