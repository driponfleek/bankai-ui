import React from 'react';
import { act, render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import CalloutMemo from '../CalloutMemo';
import VARIANTS from '../const/variantsConst';

const { AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;
const baseCls = 'bankai-callout-memo';
const renderIcon = (iconCls) => <BankaiUser contextCls={iconCls} />;

describe('<CalloutMemo />', () => {
    it('should render without crashing', () => {
        render(<CalloutMemo />);
    });

    it('should not render any default UI and only render children when children are nested', () => {
        const props = {
            renderIcon,
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: "I'm a Callout Memo!",
        };
        const childCls = 'test';
        act(() => {
            render(
                <CalloutMemo {...props}>
                    <div className={childCls} />
                </CalloutMemo>,
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
            render(<CalloutMemo />);
        });
        const textContainerDOMs = document.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerDOMs).toHaveLength(0);
    });

    it('should render messaging DOM if props.title is defined', () => {
        const props = {
            title: "I'm a Callout Memo!",
        };
        act(() => {
            render(<CalloutMemo {...props} />);
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
            render(<CalloutMemo {...props} />);
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
            render(<CalloutMemo />);
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
            render(<CalloutMemo {...props} />);
        });
        const iconContainerDOMs = document.getElementsByClassName(
            `${baseCls}__icon-container`,
        );
        const iconDOMs = document.getElementsByClassName('bankai-icon');

        expect(iconContainerDOMs).toHaveLength(1);
        expect(iconDOMs).toHaveLength(1);
    });

    it('should only set the affirmative modifier class to true when props.variant is AFFIRMATIVE', () => {
        const props = {
            variant: AFFIRMATIVE,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<CalloutMemo {...props} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--affirmative`]: true,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the cautionary modifier class to true when props.variant is CAUTIONARY', () => {
        const props = {
            variant: CAUTIONARY,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<CalloutMemo {...props} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: true,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the error modifier class to true when props.variant is ERROR', () => {
        const props = {
            variant: ERROR,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<CalloutMemo {...props} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: true,
            [`${baseCls}--info`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the info modifier class to true when props.variant is INFO', () => {
        const props = {
            variant: INFO,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<CalloutMemo {...props} ref={setRef} />);
        });
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: true,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    // it('should ', () => {});
});
