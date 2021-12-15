import React from 'react';
import ReactDOM from 'react-dom';
import {
    act,
    fireEvent,
    render,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import Button from '../Button';
import { VARIANTS } from '../const/variantsConst';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;
const baseCls = 'bankai-button';

describe('<Button />', () => {
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
        render(<Button />);
    });

    it(`should render as a primary button when props.variant is ${PRIMARY}`, () => {
        const props = {
            variant: PRIMARY,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);

        expect(button).toHaveClass(`${baseCls}--primary`);
    });

    it(`should render as a primary destructive button when props.variant is ${PRIMARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: PRIMARY_DESTRUCTIVE,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);

        expect(button).toHaveClass(`${baseCls}--primary-destructive`);
    });

    it(`should render as a secondary button when props.variant is ${SECONDARY}`, () => {
        const props = {
            variant: SECONDARY,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);

        expect(button).toHaveClass(`${baseCls}--secondary`);
    });

    it(`should render as secondary destructive button when props.variant is ${SECONDARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: SECONDARY_DESTRUCTIVE,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);

        expect(button).toHaveClass(`${baseCls}--secondary-destructive`);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon: () => <BankaiCirclePlus />,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        const iconDOM = container.querySelector(`.${baseCls}__icon`);

        expect(button).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        act(() => {
            ReactDOM.render(<Button />, container);
        });
        const iconContainerEls = container.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should not render icon container DOM when children are nested in the Button and props.renderIcon is provided', () => {
        const props = {
            renderIcon: () => <BankaiCirclePlus />,
        };
        act(() => {
            ReactDOM.render(<Button {...props}>Test</Button>, container);
        });
        const iconContainerEls = container.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should render busy spinner icon when props.isBusy is true', () => {
        const props = {
            isBusy: true,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        const iconDOM = container.querySelector('.bankai-icon-spinner');

        expect(button).toContainElement(iconDOM);
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        const textDOM = container.querySelector(`.${baseCls}__text-container`);

        expect(button).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        act(() => {
            ReactDOM.render(<Button />, container);
        });
        const textContainerEls = container.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should not render text container DOM when children are nested in the Button and props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        act(() => {
            ReactDOM.render(<Button {...props}>Test</Button>, container);
        });
        const textContainerEls = container.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should not allow aria-label to be set when props.text is provided', () => {
        const props = {
            'aria-label': 'Click me to do a thing',
            text: 'Click Me!',
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);

        expect(button).not.toHaveAttribute('aria-label');
    });

    it('should have aria-label provided and props.text is not provided', () => {
        const props = {
            'aria-label': 'Click me to do a thing',
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);

        expect(button).toHaveAttribute('aria-label');
    });

    it('should call onClick handler when button is clicked and not disabled', () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            onClick: clickSpy,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        fireEvent.click(button);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('should not call onClick handler when the button is clicked and props.isDisabled is true', () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            isDisabled: true,
            onClick: clickSpy,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        fireEvent.click(button);

        expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should not call onClick handler when button is clicked and props.isBusy is true', () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            isBusy: true,
            onClick: clickSpy,
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        fireEvent.click(button);

        expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should return props.data in the props.onClick call when the button is clicked', () => {
        const data = {
            action: 'SAVE',
        };
        let result;
        const props = {
            data,
            onClick: (params) => {
                result = params;
            },
        };
        act(() => {
            ReactDOM.render(<Button {...props} />, container);
        });
        const button = container.querySelector(`.${baseCls}`);
        fireEvent.click(button);

        expect(result?.data).toEqual(data);
    });

    // it('should ', () => {});
});
