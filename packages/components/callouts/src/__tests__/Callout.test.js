import React from 'react';
import { act, render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import Callout from '../Callout';

const baseCls = 'bankai-callout';
const renderIcon = (iconCls) => <BankaiUser contextCls={iconCls} />;

describe('<Callout />', () => {
    it('should render without crashing', () => {
        render(<Callout />);
    });

    it('should not render any default UI and only render children when children are nested', () => {
        const props = {
            renderIcon,
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: "I'm a Callout!",
        };
        const childCls = 'test';
        act(() => {
            render(
                <Callout {...props}>
                    <div className={childCls} />
                </Callout>,
            );
        });
        const childDOMs = document.getElementsByClassName(childCls);
        const iconContainerDOMs = document.getElementsByClassName(
            `${baseCls}__icon-container`,
        );
        const textContainerDOMs = document.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(childDOMs).toHaveLength(1);
        expect(iconContainerDOMs).toHaveLength(0);
        expect(textContainerDOMs).toHaveLength(0);
    });

    it('should not render messaging DOM if props.title and props.msg are not defined', () => {
        act(() => {
            render(<Callout />);
        });
        const textContainerDOMs = document.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerDOMs).toHaveLength(0);
    });

    it('should render messaging DOM if props.title is defined', () => {
        const props = {
            title: "I'm a Callout!",
        };
        act(() => {
            render(<Callout {...props} />);
        });
        const textContainerDOMs = document.getElementsByClassName(
            `${baseCls}__text-container`,
        );
        const headingContainerDOM = document.getElementsByClassName(
            `${baseCls}__title`,
        )[0];

        expect(textContainerDOMs).toHaveLength(1);
        expect(headingContainerDOM).toHaveTextContent(props.title);
    });

    it('should render messaging DOM if props.msg is defined', () => {
        const props = {
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        };
        act(() => {
            render(<Callout {...props} />);
        });
        const textContainerDOMs = document.getElementsByClassName(
            `${baseCls}__text-container`,
        );
        const headingContainerDOM = document.getElementsByClassName(
            `${baseCls}__msg`,
        )[0];

        expect(textContainerDOMs).toHaveLength(1);
        expect(headingContainerDOM).toHaveTextContent(props.msg);
    });

    it('should not render icon container DOM if props.renderIcon is not defined', () => {
        act(() => {
            render(<Callout />);
        });
        const iconContainerDOMs = document.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerDOMs).toHaveLength(0);
    });

    it('should render icon container and icon DOMs if props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        act(() => {
            render(<Callout {...props} />);
        });
        const iconContainerDOMs = document.getElementsByClassName(
            `${baseCls}__icon-container`,
        );
        const iconDOMs = document.getElementsByClassName('bankai-icon');

        expect(iconContainerDOMs).toHaveLength(1);
        expect(iconDOMs).toHaveLength(1);
    });

    // it('should ', () => {});
});
