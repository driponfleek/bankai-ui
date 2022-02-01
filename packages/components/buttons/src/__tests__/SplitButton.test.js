import React from 'react';
import {
    act,
    userEvent,
    render,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import SplitButton from '../SplitButton';
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
const baseProps = {
    menuButtonARIALabel: 'More Options',
    menuOptions: menuOps,
};
const baseCls = 'bankai-split-button';
const menuBtnCls = 'bankai-menu-button';
const btnCls = 'bankai-button';

describe('<SplitButton />', () => {
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
        render(<SplitButton {...baseProps} />);
    });

    it('should call props.onMainButtonClick handler when it is clicked and not disabled', () => {
        const clickSpy = jest.fn(SplitButton.defaultProps.onMainButtonClick);
        const props = {
            ...baseProps,
            onMainButtonClick: clickSpy,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const button = container.querySelector(`.${btnCls}`);
        userEvent.click(button);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('should call props.onSelection handler', () => {
        const selectionSpy = jest.fn(SplitButton.defaultProps.onSelection);
        const props = {
            ...baseProps,
            onSelection: selectionSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<SplitButton {...props} ref={setRef} />, { container });
        });
        compRef.props.onSelection();

        expect(selectionSpy).toHaveBeenCalled();
    });

    it('should call props.onMenuToggle handler when menu button is clicked', () => {
        const menuToggleSpy = jest.fn(SplitButton.defaultProps.onMenuToggle);
        const props = {
            ...baseProps,
            onMenuToggle: menuToggleSpy,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const button = container.querySelector(`.${menuBtnCls}__button`);
        userEvent.click(button);

        expect(menuToggleSpy).toHaveBeenCalled();
    });

    it('should disable the main and menu buttons when props.isDisabled is true', () => {
        const props = {
            ...baseProps,
            isDisabled: true,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);
        const mainButton = container.querySelector(`.${btnCls}`);

        expect(menuButton).toBeDisabled();
        expect(mainButton).toBeDisabled();
    });

    it('should only disable the main button when props.mainButtonProps.isDisabled is true', () => {
        const props = {
            ...baseProps,
            mainButtonProps: {
                isDisabled: true,
            },
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);
        const mainButton = container.querySelector(`.${btnCls}`);

        expect(mainButton).toBeDisabled();
        expect(menuButton).not.toBeDisabled();
    });

    it('should only disable the menu button when props.menuButtonProps.isDisabled is true', () => {
        const props = {
            ...baseProps,
            menuButtonProps: {
                isDisabled: true,
            },
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);
        const mainButton = container.querySelector(`.${btnCls}`);

        expect(menuButton).toBeDisabled();
        expect(mainButton).not.toBeDisabled();
    });

    it(`should render as a primary split button when props.variant is ${PRIMARY}`, () => {
        const props = {
            ...baseProps,
            variant: PRIMARY,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const splitButton = container.querySelector(`.${baseCls}`);
        const mainButton = container.querySelector(`.${btnCls}`);
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);

        expect(splitButton).toHaveClass(`${baseCls}--primary`);
        expect(mainButton).toHaveClass(`${btnCls}--primary`);
        expect(menuButton).toHaveClass(`${btnCls}--primary`);
    });

    it(`should render as a primary destructive split button when props.variant is ${PRIMARY_DESTRUCTIVE}`, () => {
        const props = {
            ...baseProps,
            variant: PRIMARY_DESTRUCTIVE,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const splitButton = container.querySelector(`.${baseCls}`);
        const mainButton = container.querySelector(`.${btnCls}`);
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);

        expect(splitButton).toHaveClass(`${baseCls}--primary-destructive`);
        expect(mainButton).toHaveClass(`${btnCls}--primary-destructive`);
        expect(menuButton).toHaveClass(`${btnCls}--primary-destructive`);
    });

    it(`should render as a secondary split button when props.variant is ${SECONDARY}`, () => {
        const props = {
            ...baseProps,
            variant: SECONDARY,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const splitButton = container.querySelector(`.${baseCls}`);
        const mainButton = container.querySelector(`.${btnCls}`);
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);

        expect(splitButton).toHaveClass(`${baseCls}--secondary`);
        expect(mainButton).toHaveClass(`${btnCls}--secondary`);
        expect(menuButton).toHaveClass(`${btnCls}--secondary`);
    });

    it(`should render as a secondary destructive split button when props.variant is ${SECONDARY_DESTRUCTIVE}`, () => {
        const props = {
            ...baseProps,
            variant: SECONDARY_DESTRUCTIVE,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const splitButton = container.querySelector(`.${baseCls}`);
        const mainButton = container.querySelector(`.${btnCls}`);
        const menuButton = container.querySelector(`.${menuBtnCls}__button`);

        expect(splitButton).toHaveClass(`${baseCls}--secondary-destructive`);
        expect(mainButton).toHaveClass(`${btnCls}--secondary-destructive`);
        expect(menuButton).toHaveClass(`${btnCls}--secondary-destructive`);
    });

    it(`should have --is-disabled modifier class when props.isDisabled is true`, () => {
        const props = {
            ...baseProps,
            isDisabled: true,
        };
        act(() => {
            render(<SplitButton {...props} />, { container });
        });
        const splitButton = container.querySelector(`.${baseCls}`);

        expect(splitButton).toHaveClass(`${baseCls}--is-disabled`);
    });
});
