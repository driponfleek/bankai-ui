import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import Avatar from '../Avatar';

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

    it('should not render inner DOM if both props.children and props.imgURL are passed and have appropriate modifier class', () => {
        const props = {
            children: text,
            imgURL,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const avatarDOM = document.getElementsByClassName(baseCls)[0];
        const innerDOMs = document.getElementsByClassName(`${baseCls}__inner`);

        expect(innerDOMs).toHaveLength(0);
        expect(avatarDOM.classList.contains(`${baseCls}--img`)).toBe(true);
    });

    it('should render text passed to props.children', () => {
        const props = {
            children: text,
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];

        expect(innerDOM).toHaveTextContent(text);
    });

    it('should render icon passed to props.children', () => {
        const props = {
            children: renderIcon(),
        };
        act(() => {
            render(<Avatar {...props} />, { container });
        });
        const iconDOMs = document.getElementsByClassName('bankai-icon');

        expect(iconDOMs).toHaveLength(1);
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

    // it('should ', () => {});
});
