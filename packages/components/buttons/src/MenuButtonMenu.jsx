import { Children } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-aria-menubutton';
import MenuButtonOption from './MenuButtonOption';

const MenuButtonMenu = (props) => {
    const { baseCls, menuOptions, menuProps, renderMenuOption } = props;
    const MenuOp = renderMenuOption ?? MenuButtonOption;

    return (
        <Menu {...menuProps} className={`${baseCls}__menu`}>
            <ul className={`${baseCls}__menu-list`}>
                {Children.toArray(
                    menuOptions.map((menuOp) => (
                        <li className={`${baseCls}__menu-list-option`}>
                            <MenuOp {...menuOp} />
                        </li>
                    )),
                )}
            </ul>
        </Menu>
    );
};

MenuButtonMenu.defaultProps = {
    menuOptions: [],
};

MenuButtonMenu.propTypes = {
    baseCls: PropTypes.string,
    menuProps: PropTypes.object,
    menuOptions: PropTypes.array,
    renderMenuOption: PropTypes.func,
};

export default MenuButtonMenu;
