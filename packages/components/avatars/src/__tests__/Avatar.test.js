import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import Avatar from '../Avatar';
import VARIANTS from '../const/variantConst';

const baseCls = 'bankai-avatar';
const text = 'DY';
const renderIcon = () => <BankaiUser />;
const imgURL =
    'https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg';

describe('<Avatar />', () => {
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
        render(<Avatar />);
    });

    it('should not render inner DOM if both props.text and props.imgURL are passed and have appropriate modifier class', () => {
        const props = {
            text,
            imgURL,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        const innerDOMs = document.getElementsByClassName(`${baseCls}__inner`);

        expect(innerDOMs).toHaveLength(0);
        expect(avatarDOM.classList.contains(`${baseCls}--img`)).toBe(true);
        expect(avatarDOM.classList.contains(`${baseCls}--text`)).toBe(false);
    });

    it('should not render inner DOM if both props.renderIcon and props.imgURL are passed and have appropriate modifier classes', () => {
        const props = {
            renderIcon,
            imgURL,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        const innerDOMs = document.getElementsByClassName(`${baseCls}__inner`);

        expect(innerDOMs).toHaveLength(0);
        expect(avatarDOM.classList.contains(`${baseCls}--img`)).toBe(true);
        expect(avatarDOM.classList.contains(`${baseCls}--icon`)).toBe(false);
    });

    it('should only render the icon if both props.renderIcon and props.text are passed and have appropriate modifier classes', () => {
        const props = {
            renderIcon,
            text,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];
        const iconDOMs = document.getElementsByClassName('bankai-icon');

        expect(innerDOM).not.toHaveTextContent();
        expect(iconDOMs).toHaveLength(1);
        expect(avatarDOM.classList.contains(`${baseCls}--icon`)).toBe(true);
        expect(avatarDOM.classList.contains(`${baseCls}--text`)).toBe(false);
    });

    it('should render text passed to props.text and have appropriate modifier class', () => {
        const props = {
            text,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];

        expect(innerDOM).toHaveTextContent(text);
        expect(avatarDOM.classList.contains(`${baseCls}--text`)).toBe(true);
    });

    it('should have the --has-border modifier class without any setting for props.hasBorder because it is defaulted to true', () => {
        act(() => {
            render(<Avatar />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        expect(avatarDOM.classList.contains(`${baseCls}--has-border`)).toBe(
            true,
        );
    });

    it('should not have the --has-border modifier class if props.hasBorder is false', () => {
        const props = {
            hasBorder: false,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        expect(avatarDOM.classList.contains(`${baseCls}--has-border`)).toBe(
            false,
        );
    });

    it('should have the --circle modifier class without any setting for props.variant because it is defaulted to CIRCLE', () => {
        act(() => {
            render(<Avatar />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        expect(avatarDOM.classList.contains(`${baseCls}--circle`)).toBe(true);
    });

    it('should have the --rounded-square modifier class when props.variant is ROUNDED_SQUARE', () => {
        const props = {
            variant: VARIANTS.ROUNDED_SQUARE,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        expect(avatarDOM.classList.contains(`${baseCls}--rounded-square`)).toBe(
            true,
        );
    });

    it('should have the --square modifier class when props.variant is SQUARE', () => {
        const props = {
            variant: VARIANTS.SQUARE,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        expect(avatarDOM.classList.contains(`${baseCls}--square`)).toBe(true);
    });

    // it('should ', () => {});
});
