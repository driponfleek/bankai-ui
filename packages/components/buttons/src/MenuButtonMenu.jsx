import { Children } from 'react';
import { Menu } from 'react-aria-menubutton';
import MenuButtonOption from './MenuButtonOption';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {Object} [props.menuProps] - Props forwarded to the menu element
 * @param {Array} [props.menuOptions] - Array of option data objects rendered in the menu
 * @param {Function} [props.renderMenuOption] - Custom render function for individual menu options
 */
const MenuButtonMenu = (props) => {
    const { baseCls, menuOptions = [], menuProps, renderMenuOption } = props;
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

export default MenuButtonMenu;
