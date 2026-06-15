import cx from 'classnames';
import { Wrapper, Button } from 'react-aria-menubutton';
import MenuButtonMenu from './MenuButtonMenu';
import MainContent from './components/MainContent';

// Utils
import {
    getMenuBtnExtantProps,
    getBtnDisabledModCls,
} from './utils/buttonUtils';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/menu-button.scss';

/**
 * @param {Object} props
 * @param {string} [props.btnContextCls] - Additional CSS class name(s) applied to the inner button element
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.text] - Text label for the button
 * @param {boolean} [props.isDisabled] - Whether the button is disabled
 * @param {boolean} [props.shouldCloseOnBlur] - Whether the menu should close when focus leaves it
 * @param {boolean} [props.shouldCloseOnSelection] - Whether the menu should close after an option is selected
 * @param {Object} [props.menuProps] - Props forwarded to the menu element
 * @param {Object} [props.wrapperProps] - Props forwarded to the menu button wrapper element
 * @param {Array} [props.menuOptions] - Array of option data objects rendered in the menu
 * @param {Function} [props.onSelection] - Callback fired when a menu option is selected
 * @param {Function} [props.onMenuToggle] - Callback fired when the menu opens or closes
 * @param {Function} [props.renderIcon] - Render function for the button icon
 * @param {Function} [props.renderMenuOption] - Custom render function for individual menu options
 */
const MenuButton = (props) => {
    const {
        btnContextCls,
        contextCls,
        text,
        isDisabled = false,
        shouldCloseOnBlur = true,
        shouldCloseOnSelection = true,
        menuProps,
        wrapperProps,
        menuOptions = [],
        onSelection = MenuButton.onSelection,
        onMenuToggle = MenuButton.onMenuToggle,
        renderIcon,
        renderMenuOption,
        children,
    } = props;
    const baseCls = 'bankai-menu-button';
    const btnProps = getMenuBtnExtantProps(props);
    const btnModCls = {
        ...getBtnDisabledModCls(baseCls, isDisabled),
        ...getBtnDisabledModCls(BUTTON_BASE_CLS, isDisabled),
    };
    const handleSelection = (value, event) => {
        onSelection({ e: event, value });
    };

    // TODO: Need to find a way to do faux disabling of button
    return (
        <Wrapper
            {...wrapperProps}
            className={cx(baseCls, contextCls)}
            closeOnBlur={shouldCloseOnBlur}
            closeOnSelection={shouldCloseOnSelection}
            onMenuToggle={onMenuToggle}
            onSelection={handleSelection}
        >
            <Button
                {...btnProps}
                className={cx(
                    `${baseCls}__button`,
                    BUTTON_BASE_CLS,
                    btnModCls,
                    btnContextCls,
                )}
                disabled={isDisabled}
                tag="button"
            >
                <MainContent
                    baseCls={baseCls}
                    text={text}
                    renderIcon={renderIcon}
                >
                    {children}
                </MainContent>
            </Button>
            <MenuButtonMenu
                baseCls={baseCls}
                menuOptions={menuOptions}
                menuProps={menuProps}
                renderMenuOption={renderMenuOption}
            />
        </Wrapper>
    );
};

MenuButton.onSelection = () => Promise.resolve();
MenuButton.onMenuToggle = () => Promise.resolve();

export default MenuButton;
