import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import BaseAccordionItemTrigger from '../BaseAccordionItemTrigger';

describe('<BaseAccordionItemTrigger />', () => {
    it('should render without crashing', () => {
        render(<BaseAccordionItemTrigger />);
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
        render(<BaseAccordionItemTrigger {...props} ref={setRef} />);
        const triggerBaseCls = 'bankai-base-accordion-item-trigger';
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
        render(<BaseAccordionItemTrigger ref={setRef} />);
        compRef.renderButton();
    });

    // it('should ', () => {});
});
