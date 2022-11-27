/* eslint-disable no-console */
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import BaseAccordion from '../BaseAccordion';
import AccordionContentComposer from '../AccordionContentComposer';

const originalConsoleError = console.error.bind(console.error);
const containerCls = 'accordion-test-content-container';
const ContentContainer = (props) => {
    const { children } = props;

    return <div className={containerCls}>{children}</div>;
};
const ComposedContent = AccordionContentComposer(ContentContainer);

describe('<Accordion />', () => {
    it('should render without crashing', () => {
        render(<BaseAccordion />);
    });

    it('should not crash if calling renderItem with undefined', () => {
        let compRef;
        const setCompRef = (el) => {
            compRef = el;
        };
        render(<BaseAccordion ref={setCompRef} />);

        compRef.renderItem();
    });

    it('should not crash if calling renderTrigger with undefined', () => {
        let compRef;
        const setCompRef = (el) => {
            compRef = el;
        };
        render(<BaseAccordion ref={setCompRef} />);

        compRef.renderTrigger();
    });

    it('should call props.onChange when handleChange is called', () => {
        const onChangeSpy = jest.fn(BaseAccordion.defaultProps.onChange);
        const props = {
            onChange: onChangeSpy,
        };
        const params = ['testId'];
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<BaseAccordion {...props} ref={setRef} />);
        compRef.handleChange(params);

        expect(onChangeSpy).toHaveBeenCalledWith(params);
    });

    it('should render all the child items nested inside', () => {
        render(
            <BaseAccordion>
                <ComposedContent
                    accItemProps={{
                        id: '001',
                    }}
                    accTriggerProps={{
                        children: 'Accordion Item 1',
                    }}
                />
                <ComposedContent
                    accItemProps={{
                        id: '002',
                    }}
                    accTriggerProps={{
                        children: 'Accordion Item 2',
                    }}
                />
                <ComposedContent
                    accItemProps={{
                        id: '003',
                    }}
                    accTriggerProps={{
                        children: 'Accordion Item 3',
                    }}
                />
            </BaseAccordion>,
        );
        const childItems = document.getElementsByClassName(containerCls);

        expect(childItems).toHaveLength(3);
    });

    it('should render without crashing when invalid children are nested', () => {
        console.error = jest.fn();
        render(<BaseAccordion>{[undefined, undefined]}</BaseAccordion>);
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
