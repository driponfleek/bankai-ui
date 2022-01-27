import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import AccordionItemTrigger from '../AccordionItemTrigger';

describe('<AccordionItemTrigger />', () => {
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
        render(<AccordionItemTrigger />);
    });

    it('should call props.renderTriggerIcon when prop is passed', () => {
        const renderSpy = jest.fn();
        const props = {
            renderTriggerIcon: renderSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<AccordionItemTrigger {...props} ref={setRef} />, {
                container,
            });
        });
        const triggerBaseCls = 'bankai-accordion-item-trigger';
        const resultParams = {
            isExpanded: false,
            triggerIconCls: `${triggerBaseCls}__icon`,
            triggerIconContainerCls: `${triggerBaseCls}__icon-container`,
        };
        compRef.renderTriggerIcon(false);

        expect(renderSpy).toHaveBeenCalledWith(resultParams);
    });

    it('should not crash when calling renderButton with no param', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<AccordionItemTrigger ref={setRef} />, { container });
        });
        compRef.renderButton();
    });

    // it('should ', () => {});
});
