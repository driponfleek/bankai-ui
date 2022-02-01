import React from 'react';
import {
    act,
    userEvent,
    render,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import LinkButton from '../LinkButton';

const baseCls = 'bankai-link-button';
const renderIcon = () => <BankaiCirclePlus />;

describe('<LinkButton />', () => {
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
        render(<LinkButton />);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        act(() => {
            render(<LinkButton {...props} />, { container });
        });
        const button = container.querySelector(`.${baseCls}`);
        const iconDOM = container.querySelector(`.${baseCls}__icon`);

        expect(button).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        act(() => {
            render(<LinkButton />, { container });
        });
        const iconContainerEls = container.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should not render icon container DOM when children are nested in the link button and props.renderIcon is provided', () => {
        const props = {
            renderIcon,
        };
        act(() => {
            render(<LinkButton {...props}>Test</LinkButton>, { container });
        });
        const iconContainerEls = container.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        act(() => {
            render(<LinkButton {...props} />, { container });
        });
        const button = container.querySelector(`.${baseCls}`);
        const textDOM = container.querySelector(`.${baseCls}__text-container`);

        expect(button).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        act(() => {
            render(<LinkButton />, { container });
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
            render(<LinkButton {...props}>Test</LinkButton>, { container });
        });
        const textContainerEls = container.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should call onClick handler when link button is clicked', () => {
        const clickSpy = jest.fn(LinkButton.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            onClick: clickSpy,
        };
        act(() => {
            render(<LinkButton {...props} />, { container });
        });
        const button = container.querySelector(`.${baseCls}`);
        userEvent.click(button);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('should return props.data in the props.onClick call when the link button is clicked', () => {
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
            render(<LinkButton {...props} />, { container });
        });
        const button = container.querySelector(`.${baseCls}`);
        userEvent.click(button);

        expect(result?.data).toEqual(data);
    });

    // it('should ', () => {});
});
