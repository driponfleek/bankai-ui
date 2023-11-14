import PropTypes from 'prop-types';
import cx from 'classnames';
import { Wrapper, Button } from 'react-aria-menubutton';
import MenuButtonMenu from './MenuButtonMenu';
import MainContent from './components/MainContent';

// Utils
import {
    getBtnVariantModCls,
    getMenuBtnExtantProps,
    getBtnDisabledModCls,
} from './utils/buttonUtils';

// Styles
import './styles/menu-button.scss';

const MenuButton = (props) => {
    const {
        btnContextCls,
        contextCls,
        text,
        variant,
        isDisabled,
        shouldCloseOnBlur,
        shouldCloseOnSelection,
        menuProps,
        wrapperProps,
        menuOptions,
        onSelection,
        onMenuToggle,
        renderIcon,
        renderMenuOption,
        children,
    } = props;
    const baseCls = 'bankai-menu-button';
    const btnCls = 'bankai-button';
    const btnProps = getMenuBtnExtantProps(props);
    const btnModCls = {
        ...getBtnVariantModCls(variant, btnCls),
        ...getBtnDisabledModCls(baseCls, isDisabled),
    };

    // TODO: Need to find a way to do faux disabling of button
    return (
        <Wrapper
            {...wrapperProps}
            className={cx(baseCls, contextCls)}
            closeOnBlur={shouldCloseOnBlur}
            closeOnSelection={shouldCloseOnSelection}
            onMenuToggle={onMenuToggle}
            onSelection={onSelection}
        >
            <Button
                {...btnProps}
                className={cx(`${baseCls}__button`, btnModCls, btnContextCls)}
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

MenuButton.defaultProps = {
    isDisabled: false,
    shouldCloseOnBlur: true,
    shouldCloseOnSelection: true,
    menuOptions: [],
    onSelection: () => Promise.resolve(),
    onMenuToggle: () => Promise.resolve(),
};

MenuButton.propTypes = {
    btnContextCls: PropTypes.string,
    contextCls: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
    isDisabled: PropTypes.bool,
    shouldCloseOnBlur: PropTypes.bool,
    shouldCloseOnSelection: PropTypes.bool,
    menuProps: PropTypes.object,
    wrapperProps: PropTypes.object,
    menuOptions: PropTypes.array,
    onSelection: PropTypes.func,
    onMenuToggle: PropTypes.func,
    renderIcon: PropTypes.func,
    renderMenuOption: PropTypes.func,
};

export default MenuButton;
