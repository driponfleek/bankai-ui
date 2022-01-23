import React from 'react';
import ReactDOM from 'react-dom';
import {
    act,
    fireEvent,
    render,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import MenuButton from '../MenuButton';
import MenuButtonOption from '../MenuButtonOption';
import { VARIANTS } from '../const/variantsConst';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;
const menuOps = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];
const baseCls = 'bankai-menu-button';
const btnCls = 'bankai-button';
const renderIcon = () => <BankaiCirclePlus />;

describe('<MenuButton />', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = undefined;
    });

    it('should render without crashing', () => {
        render(<MenuButton />);
    });

    it(`should render as a primary menu button when props.variant is ${PRIMARY}`, () => {
        const props = {
            variant: PRIMARY,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--primary`);
    });

    it(`should render as a primary destructive menu button when props.variant is ${PRIMARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: PRIMARY_DESTRUCTIVE,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--primary-destructive`);
    });

    it(`should render as a secondary menu button when props.variant is ${SECONDARY}`, () => {
        const props = {
            variant: SECONDARY,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--secondary`);
    });

    it(`should render as secondary destructive menu button when props.variant is ${SECONDARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: SECONDARY_DESTRUCTIVE,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--secondary-destructive`);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);
        const iconDOM = container.querySelector(`.${btnCls}__icon`);

        expect(button).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        act(() => {
            ReactDOM.render(<MenuButton />, container);
        });
        const iconContainerEls = container.getElementsByClassName(
            `${btnCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should not render icon container DOM when children are nested in the menu button and props.renderIcon is provided', () => {
        const props = {
            renderIcon,
        };
        act(() => {
            ReactDOM.render(
                <MenuButton {...props}>Test</MenuButton>,
                container,
            );
        });
        const iconContainerEls = container.getElementsByClassName(
            `${btnCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);
        const textDOM = container.querySelector(`.${btnCls}__text-container`);

        expect(button).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        act(() => {
            ReactDOM.render(<MenuButton />, container);
        });
        const textContainerEls = container.getElementsByClassName(
            `${btnCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should not render text container DOM when children are nested in the menu button and props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        act(() => {
            ReactDOM.render(
                <MenuButton {...props}>Test</MenuButton>,
                container,
            );
        });
        const textContainerEls = container.getElementsByClassName(
            `${btnCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should call props.onSelection handler', () => {
        const selectionSpy = jest.fn(MenuButton.defaultProps.onSelection);
        const props = {
            onSelection: selectionSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} ref={setRef} />, container);
        });
        compRef.props.onSelection();

        expect(selectionSpy).toHaveBeenCalled();
    });

    it('should call props.onMenuToggle handler when menu button is clicked', () => {
        const menuToggleSpy = jest.fn(MenuButton.defaultProps.onMenuToggle);
        const props = {
            onMenuToggle: menuToggleSpy,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);
        fireEvent.click(button);

        expect(menuToggleSpy).toHaveBeenCalled();
    });

    it('should not call props.onMenuToggle handler when menu button is clicked and props.isDisabled is true', () => {
        const menuToggleSpy = jest.fn(MenuButton.defaultProps.onMenuToggle);
        const props = {
            onMenuToggle: menuToggleSpy,
            isDisabled: true,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);
        fireEvent.click(button);

        expect(menuToggleSpy).not.toHaveBeenCalled();
    });

    it('should render default menu options when props.renderMenuOption is not defined', () => {
        const props = {
            menuOptions: menuOps,
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);
        fireEvent.click(button);
        const optionEls = container.getElementsByClassName(
            `${baseCls}__menu-list-option`,
        );

        expect(optionEls).toHaveLength(2);
    });

    it('should render custom menu option UI when using props.renderMenuOption', () => {
        const props = {
            menuOptions: menuOps,
            renderMenuOption: (opProps) => (
                <MenuButtonOption {...opProps} contextCls="custom-op" />
            ),
        };
        act(() => {
            ReactDOM.render(<MenuButton {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}__button`);
        fireEvent.click(button);
        const optionEls = container.getElementsByClassName('custom-op');

        expect(optionEls).toHaveLength(2);
    });

    // it('should ', () => {});
});
